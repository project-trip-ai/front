'use client';
import React from 'react';
import axios from 'axios';
import DealCard from '@/components/DealCard';
import { subscriptions } from '@/data/data';
import { loadStripe } from '@stripe/stripe-js';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);
export default function SubscriptionPage() {
  const { user } = useUser();
  const router = useRouter();
  const handleCheckout = async product => {
    if (user) {
      const lineItem = {
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
          },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      };

      const secretCode = product.code;
      const emailUser = user.email;
      const { data } = await axios.post(process.env.NEXT_PUBLIC_CHECKOUT, { 
          lineItems: [lineItem],
          secretCode, 
          emailUser,
      });

      const stripe = await stripePromise;

      await stripe.redirectToCheckout({ sessionId: data.id });
    } else {
      router.push('/auth/login');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Join us 🤝
          </h2>
          <p className="mb-5 font-light text-gray-200 sm:text-xl">
            Subscribe now to unlock exclusive features and get the most out of
            your travel planning experience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subscriptions.map(sub => (
            <DealCard
              tier={sub.name}
              features={sub.features}
              price={sub.price}
              key={sub.id}
              onBuyNow={() => handleCheckout(sub)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

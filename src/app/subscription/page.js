'use client';
import React from "react";
import axios from 'axios';
import DealCard from "@/app/components/DealCard";
import { subscriptions } from "../data/data";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function SubscriptionPage() {
  const handleCheckout = async (product) => {
    const lineItem = {
        price_data: {
            currency: 'eur',
            product_data: {
                name: product.name
            },
            unit_amount: product.price * 100
        },
        quantity: 1
    }

    const secretCode = product.code;

    const { data } = await axios.post(process.env.NEXT_PUBLIC_CHECKOUT, { 
        lineItems: [lineItem],
        secretCode
    });

    const stripe = await stripePromise

    await stripe.redirectToCheckout({ sessionId: data.id })
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex gap-[40px]">
       {subscriptions.map((sub) => (
        <DealCard tier={sub.name} features={sub.features} price={sub.price} key={sub.id} onBuyNow={() => handleCheckout(sub)}/>
        ))}
      </div>
    </div>
  );
}

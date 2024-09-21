'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import TripCard from '@/components/TripCard';
import Link from 'next/link';

export default function ProfilePage() {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: user?.firstname || '',
    lastname: user?.lastname || '',
    email: user?.email || '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = user.token;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/updateUser/${token}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );
      if (response.ok) {
        const updatedUser = await response.json();
        closeModal();
        router.refresh();
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.sub) {
        const now = new Date();
        const expirationDate = new Date(user.sub.expirationDate);

        if (expirationDate < now) {
          setStatus('EXPIRED');
        } else {
          setStatus('ACTIVE');
        }
      }
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {user && (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 py-[100px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
            <div className="border-b border-gray-200 pb-8 mb-8">
              <h1 className="text-3xl font-medium text-gray-900 mb-2">
                {user.firstname} {user.lastname}
              </h1>
              <p className="text-sm text-gray-500">{user.email}</p>
              <div className="mt-4 space-x-4">
                <button
                  onClick={openModal}
                  className="text-sm text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
                  Edit Profile
                </button>
                <Link
                  href={`/auth/resetPassword?email=${user.email}&token=${user.token}`}
                  className="text-sm text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700 transition-colors">
                  Change Password
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-[30px] font-medium text-gray-900 mb-4 uppercase">
                Your Trips
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {user.itineraties.map(itinerary => (
                  <TripCard key={itinerary.id} trip={itinerary} />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-[30px] font-light text-gray-900 mb-4">
                Subscription Details
              </h2>
              {user.sub ? (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status</span>
                    <span
                      className={
                        status === 'ACTIVE' ? 'text-green-600' : 'text-red-600'
                      }>
                      {status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subscription Date</span>
                    <span>
                      {new Date(user.sub.subscriptionDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Expiration Date</span>
                    <span>
                      {new Date(user.sub.expirationDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-500">
                  You currently don't have any subscription.{' '}
                  <Link
                    href="/subscription"
                    className="text-blue-600 hover:underline">
                    Would you like to join us?
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-xl font-light text-gray-900 mb-4">
              Edit Profile
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastname"
                  className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

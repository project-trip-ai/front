'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import TripCard from '@/components/TripCard';
import Link from 'next/link';
import Button from '@/components/Button';

import EditProfileIcon from '@/../../public/icons/edit-profile.svg';
import Image from 'next/image';

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

  console.log(user, 'userr');

  return (
    <>
      {user && (
        <div className="min-h-screen bg-white py-[100px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-4">
            <div className="border-4 border-gray-200 pb-8 mb-8 bg-white bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg p-4 flex flex-col items-center justify-center h-full">
              <h1 className="text-3xl font-semibold mb-2">
                🌟 {user.firstname} {user.lastname} 🌟
              </h1>
              <p className="text-sm">{user.email}</p>
              <div className="flex mt-4 space-x-4 ">
                <Button
                  onClick={openModal}
                  buttonStyle="space-x-1 text-gray-800 bg-white rounded-lg hover:bg-gray-300 active:bg-gray-400 active:text-white transition-all">
                  <p>Edit Profile</p>
                  <Image
                    priority
                    src={EditProfileIcon}
                    height={20}
                    width={20}
                    alt="Edit Profile"
                  />
                </Button>
                <Button
                  onClick={() =>
                    router.push(
                      `/auth/resetPassword?email=${user.email}&token=${user.token}`,
                    )
                  }
                  buttonStyle="text-gray-800 bg-white rounded-lg hover:bg-gray-300 active:bg-gray-400 active:text-white transition-all">
                  Change Password
                </Button>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-[30px] font-medium text-gray-900 mb-4 uppercase">
                My Trips
              </h2>
              {user.itineraties && user.itineraties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {user.itineraties.map(itinerary => (
                    <TripCard key={itinerary.id} trip={itinerary} />
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-900 ">
                  You currently don't have any trips.{' '}
                  <Link
                    href="/plan-trip"
                    className="text-blue-600 hover:underline">
                    Would you like to create a new trip?
                  </Link>
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-[30px] font-medium text-gray-900 mb-4 uppercase">
                Subscription Details
              </h2>
              {user.sub ? (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-900">Status</span>
                    <span
                      className={`px-4 py-2 font-semibold rounded-md text-white ${
                        status === 'ACTIVE'
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-red-600 hover:bg-red-700'
                      }`}>
                      {status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Subscription Date</span>
                    <span>
                      {new Date(user.sub.subscriptionDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-900">Expiration Date</span>
                    <span>
                      {new Date(user.sub.expirationDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-900 ">
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
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
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
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
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

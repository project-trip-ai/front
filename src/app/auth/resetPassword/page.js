'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { removeCookie } from '@/lib/auth';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [tokenPassword, setTokenPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const codeString = searchParams.get('code');
  const code = parseInt(codeString, 10);
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (token && email) {
      try {
        const updatePassword = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/updatePassword`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, token }),
          },
        );

        if (updatePassword.ok) {
          setMessage('Password reset successfully');
          router.push('/auth/login');
        } else {
          setError('Failed to reset password.');
        }
      } catch (error) {
        setError('Failed to reset password. Please try again.');
      }
    } else {
      try {
        const verifyResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/verifyCode`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code, email }),
          },
        );

        const verifyResult = await verifyResponse.json();
        if (verifyResponse.ok) {
          const tokenPassword = verifyResult;
          setTokenPassword(tokenPassword);
          const resetResponse = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/resetPassword`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ tokenPassword, email, password }),
            },
          );

          const resetResult = await resetResponse.json();
          if (resetResponse.ok) {
            setMessage('Password reset successfully');
            removeCookie();
            router.push('/auth/login');
          } else {
            setError(resetResult.message || 'Failed to reset password.');
          }
        } else {
          setError(verifyResult.message || 'Invalid verification code.');
        }
      } catch (err) {
        setError('Failed to reset password. Please try again.');
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Reset your password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700">
                New password :
              </label>
              <div className="mt-1">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  autoComplete="newPassword"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Reset
              </button>
            </div>
          </form>

          {message && (
            <div className="mt-4 text-sm text-green-600">{message}</div>
          )}
          {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
        </div>
      </div>
    </div>
  );
}

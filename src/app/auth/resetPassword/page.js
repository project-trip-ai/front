'use client';
import { updatePassword, resetPassword } from '@/lib/action';

export default function ResetPasswordPage({ searchParams }) {
  const codeString = searchParams.code;
  const code = parseInt(codeString, 10);
  const email = searchParams.email;
  const token = searchParams.token;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get('password');

    let result;
    if (token) {
      result = await updatePassword(email, password, token);
    } else if (code) {
      result = await resetPassword(email, code, password);
    }
    if (result?.error) {
      console.error(result.error);
    } else {
      console.log('Password reset successful');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Reset your password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="email" value={email} />
            <input type="hidden" name="token" value={token} />
            <input type="hidden" name="code" value={code} />

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                New password:
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
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
        </div>
      </div>
    </div>
  );
}

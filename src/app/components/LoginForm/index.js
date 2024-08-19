"use client";
import { useState } from "react";
import { loginAction } from "@/app/lib/action";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(formData) {
    const result = await loginAction(formData);
    if (result.error) {
      setError(result.error);
    } else if (result.success) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Welcome Back
      </h2>
      <form action={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 block mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                     invalid:border-pink-500 invalid:text-pink-600
                     focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 block mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                     focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Your password"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { registerAction } from "@/app/lib/action";
import { useRouter } from "next/navigation";
import Input from "@/app/components/Input";

export default function RegisterForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(formData) {
    const result = await registerAction(formData);
    if (result.error) {
      setError(result.error);
    } else if (result.success) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Create Account
      </h2>
      <form action={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Input label="First Name" id="firstname" name="firstname" required />
        <Input label="Last Name" id="lastname" name="lastname" required />
        <Input
          label="Email Address"
          id="email"
          name="email"
          type="email"
          required
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          required
        />
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

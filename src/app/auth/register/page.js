import RegisterForm from "@/app/components/RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "Register | Your App Name",
  description: "Create a new account",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}

import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export const metadata = {
  title: 'Login | Your App Name',
  description: 'Login to access your account',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}

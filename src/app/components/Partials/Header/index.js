"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/app/lib/action";

const ChicHeader = ({ isLoggedIn }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className=" shadow-sm z-10 absolute top-0 left-0 w-full bg-transarent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-auto" alt="Logo" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/plan-trip"
              className="text-white hover:text-gray-900 flex items-center"
            >
              Plan Your Trip
            </Link>
            <Link
              href="/subscription"
              className="text-white hover:text-gray-900 flex items-center"
            >
              Subscription
            </Link>
          </nav>
          <div className="flex items-center">
            {isLoggedIn !== false ? (
              <>
                <Link
                  href="/account/profile"
                  className="text-white hover:text-gray-900 flex items-center mr-4"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-900 flex items-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="text-white hover:text-gray-900 flex items-center"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChicHeader;

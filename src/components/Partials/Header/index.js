'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { logout } from '@/lib/action';
import { usePathname } from 'next/navigation';
import WebsiteIcon from '@/../../public/icons/website-icon.svg';
import Image from 'next/image';
const ChicHeader = ({ isLoggedIn }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (pathname.startsWith('/itinerary')) {
    return null;
  }

  return (
    <header
      className={`z-20 px-4 lg:px-6 py-2.5 w-full transition-all duration-300 ${
        isScrolled
          ? 'fixed top-0 left-0 bg-gray-800 bg-opacity-50'
          : 'absolute top-0 left-0 bg-transparent'
      }
    `}>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link
          href="/"
          onClick={() => handleLinkClick('/')}
          className={`flex items-center ${activeLink === '/' ? '' : 'text-white'}`}>
          <div className="flex space-x-2">
            <Image
              priority
              src={WebsiteIcon}
              alt="Icon"
              height={60}
              width={60}
            />{' '}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Wizard Planner
            </span>
          </div>
        </Link>
        <div className="flex items-center lg:order-2">
          {isLoggedIn !== false ? (
            <>
              <Link
                href="/account/profile"
                className="text-white border border-white hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-white font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-white focus:outline-none">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-white border border-white hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-white font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-white focus:outline-none">
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="text-white border border-white text-xl hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-white font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-white focus:outline-none">
              Sign In
            </Link>
          )}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-xl text-white border border-white rounded-lg lg:hidden hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:focus:ring-white"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className={`z-10 px-10 py-2 rounded-lg bg-gray-900 bg-opacity-50 justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <Link
              href="/plan-trip"
              onClick={() => handleLinkClick('/plan-trip')}
              className={`block rounded-lg py-2 pr-4 pl-3 border-b border-white hover:underline lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-white dark:hover:underline lg:dark:hover:bg-transparent text-xl ${activeLink === '/plan-trip' ? 'underline' : 'no-underline text-white'}`}>
              Plan your trip
            </Link>
            <Link
              href="/subscription"
              onClick={() => handleLinkClick('/subscription')}
              className={`block rounded-lg py-2 pr-4 pl-3 border-b border-white hover:underline lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-white dark:hover:underline lg:dark:hover:bg-transparent text-xl ${activeLink === '/subscription' ? 'underline' : 'no-underline text-white'}`}>
              Price
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default ChicHeader;

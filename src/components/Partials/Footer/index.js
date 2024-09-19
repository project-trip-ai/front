import Link from 'next/link';
const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-xl text-white sm:text-center">
          © 2024{' '}
          <a href="/" className="hover:underline">
            Wizard Planner
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-xl font-medium text-white sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline me-4 md:me-6">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

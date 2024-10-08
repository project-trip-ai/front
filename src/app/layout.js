import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Partials/Header';
import Footer from '../components/Partials/Footer';
import { isUserLoggedIn, getUserCookies } from '@/lib/auth';
import { UserProvider } from '../context/UserContext';
const inter = Inter({ subsets: ['latin'] });
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Wizard Planner',
  description: 'Generate an itinerary !',
};
export default async function RootLayout({ children }) {
  const isLoggedIn = await isUserLoggedIn();
  const userData = await getUserCookies();
  return (
    <html lang="en">
      <body>
        <UserProvider userData={userData}>
          <Header isLoggedIn={isLoggedIn} />
          {children}
          <ToastContainer />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

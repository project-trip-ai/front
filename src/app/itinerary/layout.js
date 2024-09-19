import { Inter } from 'next/font/google';
import '../globals.css';
import { getUserCookies } from '@/lib/auth';
import { UserProvider } from '../../context/UserContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export default async function RootLayout({ children }) {
  const userData = await getUserCookies();
  return (
    <html lang="en">
      <body>
        <UserProvider userData={userData}>{children}</UserProvider>
      </body>
    </html>
  );
}

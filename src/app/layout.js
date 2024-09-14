import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Partials/Header";
import Footer from "./components/Partials/Footer";
import { isUserLoggedIn, getUserCookies } from "@/app/lib/auth";
import { UserProvider } from "./context/UserContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

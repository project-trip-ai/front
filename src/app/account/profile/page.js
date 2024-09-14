"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import Link from "next/link";
export default function ProfilePage() {
    const { user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (user !== undefined) {
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/auth/login");
        }
    }, [loading, user, router]);

    if (loading) {
    return <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>;
    }
    
  return (
    <>
    { user ? (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow m-24">
          <div className="flex flex-col items-center p-10">
              <h5 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 text-center">Hello {user.firstname} {user.lastname} 😉</h5>
              
              <span className="font-light text-gray-900 lg:mb-16 sm:text-xl">{user.email}</span>
              <div className="flex mt-4 md:mt-6 space-x-4">
                <Link href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit your profile</Link>
                <Link href="/auth/resetPassword" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit your password</Link>
            </div>
          </div>
    
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
              <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                  <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900">🌟 Your trips 🌟</h2>
                  <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Here are your saved trips, feel free to explore them!</p>
              </div> 
              <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                  <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                          <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"></img>
                      </a>
                      <div className="p-5">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              <a href="#">Bonnie Green</a>
                          </h3>
                          <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                          <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                      </div>
                  </div>  
              </div>  
          </div>
          
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <caption className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 text-center">
                        🌟  Your subscription 🌟
                        </caption>
                        {user.sub ? (
            <>
                        <thead className="text-xs text-gray-900 uppercase bg-gray-500">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-white">
                                    Expiration date
                                </th>
                                <th scope="col" className="px-6 py-3 text-white">
                                    Subcription date
                                </th>
                                <th scope="col" className="px-6 py-3 text-white">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {new Date(user.sub.expirationDate).toLocaleString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true,
                                })}
                                </th>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {new Date(user.sub.subscriptionDate).toLocaleString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true,
                                })}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {user.sub.status}
                                </td>
                            </tr>
                        </tbody>
                        </>
            ) : (
                <p className="pt-5 font-light text-gray-800 lg:mb-16 sm:text-xl text-center"> You currently don’t have any subscription. <Link href="/subscription" className="font-bold">Would you like to join us? 😊</Link></p>
            )}
                    </table>
                </div>
            
      </div>
    </div>
    ) : null}
    
    </>
    
  );
}

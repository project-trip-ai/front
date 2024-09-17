'use client';

import Button from '@/app/components/Button';
import DayCard from '@/app/components/Trips/DayCard';
import ArrowLeft from '../../../../public/icons/arrow-left.svg';
import Image from 'next/image';
import GMap from '@/app/components/GMap';
import { APIProvider } from '@vis.gl/react-google-maps';

export default function ItineraryPage() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <div className="min-h-screen flex">
        <div className="relative w-full h-screen bg-white no-scrollbar overflow-y-scroll overflow-x-clip">
          <div className="z-10 w-full flex sticky top-0 py-2 px-10  justify-between bg-white bg-opacity-80 backdrop-blur-sm">
            <Button
              buttonStyle={
                'rounded-md bg-gray-300 bg-opacity-20 hover:bg-opacity-50'
              }>
              <Image priority src={ArrowLeft} alt="Back Arrow" />
            </Button>
            <Button
              buttonStyle={
                'text-black font-medium bg-gray-300 bg-opacity-20 hover:bg-opacity-50'
              }>
              Share
            </Button>
          </div>
          <div className="absolute top-0 grid w-full h-[340px] content-between bg-gradient-to-b from-gray-700 via-gray-300 to-gray-700 px-10 py-5">
            <div className="absolute inset-x-10 bottom-10 w-full">
              <h1 className="text-5xl font-extrabold text-white">Country</h1>
              <div className="flex space-x-2 mt-4">
                <Button buttonStyle={'border border-gray-400 bg-opacity-10'}>
                  09 Dec 24
                </Button>
                <Button buttonStyle={'border border-gray-400 bg-opacity-10'}>
                  2 People
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-[340px] w-full p-10">
            <DayCard day={'Monday'} month={'December'} ordinal={'9th'} />
            <DayCard day={'Tuesday'} month={'December'} ordinal={'10th'} />
            <DayCard day={'Wednesday'} month={'December'} ordinal={'11th'} />
          </div>
        </div>

        <div className="w-full h-screen hidden lg:block bg-gray-200 ">
          <GMap />
        </div>
      </div>
    </APIProvider>
  );
}

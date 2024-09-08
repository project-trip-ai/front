import Button from '@/app/components/Button';
import DayCard from '@/app/components/Trips/DayCard';
import ArrowLeft from '../../../../public/icons/arrow-left.svg';
import Image from 'next/image';

export default function ItineraryPage() {
  return (
    <div className="min-h-screen flex">
      <div className="w-full h-screen bg-white no-scrollbar overflow-y-scroll">
        <div className="grid w-full h-80 content-between bg-gradient-to-b from-gray-700 via-gray-300 to-gray-700 px-10 py-5">
          <div className="w-full flex justify-between">
            <Button
              rounded="rounded-md"
              opacity="bg-opacity-20"
              hover="hover:bg-opacity-50">
              <Image priority src={ArrowLeft} alt="Back Arrow" />
            </Button>
            <Button opacity="bg-opacity-20" hover="hover:bg-opacity-50">
              Share
            </Button>
          </div>
          <div className="w-full">
            <h1 className="text-5xl font-extrabold text-white">Country</h1>
            <div className="flex space-x-2 mt-4">
              <Button
                border="border"
                borderColor="border-gray-400"
                opacity="bg-opacity-10">
                09 Dec 24
              </Button>
              <Button
                border="border"
                borderColor="border-gray-400"
                opacity="bg-opacity-10">
                2 People
              </Button>
            </div>
          </div>
        </div>
        <div className="p-10">
          <DayCard day={'Monday'} month={'December'} ordinal={'9th'} />
          <DayCard day={'Tuesday'} month={'December'} ordinal={'10th'} />
          <DayCard day={'Wednesday'} month={'December'} ordinal={'11th'} />
        </div>
      </div>

      <div className="w-full h-screen hidden lg:block bg-gray-200 "></div>
    </div>
  );
}

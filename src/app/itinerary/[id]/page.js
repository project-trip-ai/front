'use client';
import { useEffect, useState } from 'react';
import { getItineraryById } from '@/app/api';
import { APIProvider } from '@vis.gl/react-google-maps';
import GMap from '@/app/components/GMap';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';

import Button from '@/app/components/Button';
import DayCard from '@/app/components/Trips/DayCard';

import ArrowLeft from '../../../../public/icons/arrow-left.svg';
import ArrowRight from '../../../../public/icons/arrow-right.svg';

export default function ItineraryPage() {
  const router = useRouter();
  const { id } = useParams();
  const [itineraryData, setItineraryData] = useState('');
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  // Define options for the desired format
  const options = { day: 'numeric', month: 'short', year: '2-digit' };

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchItineraryData = async () => {
      if (!id) return; // Wait for `id` to be available (i.e. when router.query is ready)

      try {
        const data = await getItineraryById(id); // Fetch the itinerary data by ID
        setItineraryData(data); // Update the state with fetched data
        // Create a Date object from the string
        const startDateFormatted = new Date(data.startDate);
        const endDateFormatted = new Date(data.endDate);

        setStartDate(
          new Intl.DateTimeFormat('en-GB', options).format(startDateFormatted),
        );
        setEndDate(
          new Intl.DateTimeFormat('en-GB', options).format(endDateFormatted),
        );

        setPosition(() => ({
          lat: data.lat, // Mettre à jour uniquement lat
          lng: data.long, // Mettre à jour uniquement lng
        }));
        console.log(position);
        console.log(data);
      } catch (error) {
        setError('Failed to fetch itinerary data'); // Handle errors
      } finally {
        setLoading(false); // Stop loading when the fetch completes
      }
    };

    fetchItineraryData(); // Call the async function
  }, [id]);
  // Show a loading state until the id is available
  if (!itineraryData) {
    return <div>Loading...</div>;
  }
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
            <Image
              priority
              src={itineraryData.bgImg}
              alt="Cover Image"
              className="bg-img"
              fill
            />

            <div className="absolute inset-x-10 bottom-10 w-full">
              <h1 className="text-5xl font-extrabold text-white">
                {itineraryData.destination}
              </h1>
              <div className="flex space-x-2 mt-4">
                <Button
                  buttonStyle={
                    'border border-gray-400 bg-white bg-opacity-10 rounded-full text-white'
                  }
                  padding="px-4 py-1">
                  {startDate}
                  <Image priority src={ArrowRight} alt="Back Arrow" /> {endDate}
                </Button>
                {itineraryData.nbPerson > 1 ? (
                  <Button
                    buttonStyle={
                      'border border-gray-400 bg-white bg-opacity-10 rounded-full text-white'
                    }
                    padding="px-4 py-1">
                    {itineraryData.nbPerson} People
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="absolute top-[340px] w-full p-10">
            <DayCard
              day={'Monday'}
              month={'December'}
              ordinal={'9th'}
              shortName={itineraryData.shortName}
            />
            <DayCard
              day={'Tuesday'}
              month={'December'}
              ordinal={'10th'}
              shortName={itineraryData.shortName}
            />
            <DayCard
              day={'Wednesday'}
              month={'December'}
              ordinal={'11th'}
              shortName={itineraryData.shortName}
            />
          </div>
        </div>

        <div className="w-full h-screen hidden lg:block bg-gray-200 ">
          <GMap position={position} />
        </div>
      </div>
    </APIProvider>
  );
}

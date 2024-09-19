'use client';
import { useEffect, useRef, useState } from 'react';
import { getItineraryById } from '@/api';
import { APIProvider } from '@vis.gl/react-google-maps';
import GMap from '@/components/GMap';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';

import Button from '@/components/Button';
import DayCard from '@/components/Trips/DayCard';

import ArrowLeft from '@/../../public/icons/arrow-left.svg';
import ArrowRight from '@/../../public/icons//arrow-right.svg';

import {
  generateDateRangeObjects,
  groupActivitiesByDate,
  addActivitiesToDateList,
} from '@/lib/dates';

export default function ItineraryPage() {
  const router = useRouter();
  const { id } = useParams();
  const [itineraryData, setItineraryData] = useState('');
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [dateList, setDateList] = useState([]);
  const [activities, setActivities] = useState([]);
  const [openDayCardIndex, setOpenDayCardIndex] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleSetActiveMarker = markerIndex => {
    setActiveMarker(markerIndex);
  };

  // Define options for the desired format
  const options = { day: 'numeric', month: 'short', year: '2-digit' };

  const handleToggleDayCard = index => {
    // Si l'index du `DayCard` que vous voulez ouvrir est déjà ouvert, fermez-le
    // Sinon, ouvrez le nouveau `DayCard` et fermez l'autre
    setOpenDayCardIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // Ajoute la nouvelle activité à la liste des activités
  const handleNewActivity = newActivity => {
    setActivities(prevActivities => [...prevActivities, newActivity]); // Add the new activity
    setActiveMarker(newActivity.id);
  };

  useEffect(() => {
    // Ajoute ce log pour vérifier l'état des activités avant le traitement
    console.log('Vérification des activités dans useEffect : ', activities);

    if (
      Array.isArray(activities) &&
      activities.length > 0 &&
      dateList.length > 0
    ) {
      setDateList(addActivitiesToDateList(dateList, activities));

      console.log('activities de base en sah :', activities),
        console.log(
          'La liste mise à jour :',
          addActivitiesToDateList(dateList, activities),
        );
    } else {
      console.log('Les données ne sont pas prêtes ou vides', activities);
    }
  }, [activities]);

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

        setDateList(generateDateRangeObjects(data.startDate, data.endDate));
        console.log(
          'DateList : ',
          generateDateRangeObjects(data.startDate, data.endDate),
        );

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

        if (data.activities) {
          setActivities(data.activities);
          console.log('Activités récupérées :', data.activities); // Vérifie ici les activités
        } else {
          console.warn("Pas d'activités dans les données récupérées.");
        }

        console.log("L'itinéraire : ", data);
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
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <div className="min-h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 pt-16">
        <div className="relative w-full h-screen bg-white no-scrollbar overflow-y-scroll overflow-x-clip">
          <div className="z-20 w-full flex sticky top-0 py-2 px-10  justify-between bg-white bg-opacity-80 backdrop-blur-sm">
            <Button
              buttonStyle={
                'rounded-md bg-gray-300 bg-opacity-20 hover:bg-opacity-50'
              }>
              <Image
                priority
                src={ArrowLeft}
                alt="Back Arrow"
                onClick={() => router.back()}
              />
            </Button>
            <Button
              buttonStyle={
                'text-black font-medium bg-gray-300 bg-opacity-20 hover:bg-opacity-50'
              }>
              Share
            </Button>
          </div>
          <div className="absolute top-0 grid w-full h-[340px] content-between bg-gradient-to-b from-gray-700 via-gray-300 to-gray-700 px-10 py-5">
            <div className="absolute top-0 w-full h-[340px] z-10 bg-gradient-to-t from-black to-70% opacity-80"></div>
            <div className="absolute top-0 w-full h-[340px] z-10 bg-gradient-to-b from-black to-10% opacity-70"></div>
            <Image
              priority
              className="relative z-0"
              src={itineraryData.bgImg}
              alt="Cover Image"
              style={{ objectFit: 'cover' }}
              fill
            />
            <div className="absolute z-20 inset-x-10 bottom-10 w-full">
              <h1 className="text-6xl font-bold text-white">
                {itineraryData.destination}
              </h1>
              <div className="flex space-x-2 mt-4">
                <Button
                  buttonStyle={
                    'border border-gray-300 bg-white bg-opacity-20 rounded-full text-white'
                  }
                  padding="px-4 py-1">
                  {startDate}
                  <Image
                    priority
                    src={ArrowRight}
                    height={15}
                    width={15}
                    className="mx-2"
                    alt="Back Arrow"
                  />{' '}
                  {endDate}
                </Button>
                {itineraryData.nbPerson > 1 ? (
                  <>
                    <Button
                      buttonStyle={
                        'border border-gray-300 bg-white bg-opacity-20 rounded-full text-white'
                      }
                      padding="px-4 py-1">
                      {itineraryData.nbPerson} People
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="absolute top-[340px] w-full last:pt-10">
            {dateList.map((date, index) => {
              return (
                <DayCard
                  key={index}
                  day={date.day}
                  month={date.month}
                  ordinal={date.ordinal}
                  date={date.dateFormatted}
                  itineraryId={id}
                  activities={date.activities}
                  shortName={itineraryData.shortName}
                  isOpen={openDayCardIndex === index}
                  onToggle={() => handleToggleDayCard(index)} // Passer la fonction de toggle
                  onActivityCreated={handleNewActivity} // Passer le callback pour les nouvelles activités
                  setActiveMarker={setActiveMarker}
                  setActivities={setActivities}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full h-screen hidden lg:block bg-gray-200 ">
          <GMap
            position={position}
            dayIndex={openDayCardIndex}
            places={dateList}
            activeMarker={activeMarker}
            setActiveMarker={handleSetActiveMarker}
          />
        </div>
      </div>
    </APIProvider>
  );
}

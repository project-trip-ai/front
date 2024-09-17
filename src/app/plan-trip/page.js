'use client';

import React, { useEffect, useState } from 'react';

import { APIProvider } from '@vis.gl/react-google-maps';
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';
import { createItineraryAction } from '@/app/lib/action';
import Image from 'next/image';

import AutoComplete from '../components/AutoComplete';
import TripFormDiv from '../components/TripFormDiv';
import Button from '../components/Button';
import Counter from '../components/Counter';
import DateRangePicker from '../components/DateRangePicker';
import SelectableButtons from '../components/SelectableButtons';

import heartIcon from '../../../public/icons/heart.svg';
import friendsIcon from '../../../public/icons/friends.svg';
import familyIcon from '../../../public/icons/family.svg';
import colleguesIcon from '../../../public/icons/collegues.svg';
import halalIcon from '../../../public/icons/halal.svg';
import vegetarianIcon from '../../../public/icons/vegetarian.svg';
import veganIcon from '../../../public/icons/vegan.svg';
import plateIcon from '../../../public/icons/plate.svg';

export default function PlanTripPage() {
  const { user } = useUser();
  const today = new Date().toISOString().split('T')[0];
  const [counter, setCounter] = useState(1);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState('');
  const [groupSelected, setGroupSelected] = useState(null);
  const [dietSelected, setDietSelected] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const [formData, setFormData] = useState({
    destination: '',
    bgImg: '',
    lng: '',
    lat: '',
    shortName: '',
    nbPerson: counter,
    startDate: startDate,
    endDate: endDate,
    typeGroup: 'SOLO',
    regimeAlimentaire: 'NONE',
    userId: user?.id || '',
    token: user?.token || '',
  });

  const options = {
    types: ['(cities)'],
    fields: [
      'address_components',
      'geometry',
      'name',
      'formatted_address',
      'photos',
    ], // Champs récupérés
  };

  const typeOfGroup = [
    { name: 'Couple', icon: heartIcon },
    { name: 'Friends', icon: friendsIcon },
    { name: 'Family', icon: familyIcon },
    { name: 'Collegues', icon: colleguesIcon },
  ];

  const regimeAlimentaireList = [
    { name: 'None', icon: plateIcon },
    { name: 'Halal', icon: halalIcon },
    { name: 'Vegan', icon: veganIcon },
    { name: 'Vegetarian', icon: vegetarianIcon },
  ];

  // Fonction de rappel pour recevoir le lieu sélectionné
  const handlePlaceSelected = place => {
    setSelectedPlace(place);
    setFormData(prevFormData => ({
      ...prevFormData, // On conserve toutes les autres propriétés de formData
      destination: place.name,
      bgImg: place.photoUrl,
      lng: place.geometry.location.lng(),
      lat: place.geometry.location.lat(),
      shortName:
        place.address_components[place.address_components.length - 1]
          .short_name,
    }));
    console.log('Lieu sélectionné dans le composant parent :', place);
  };

  // Fonction qui met à jour les dates
  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    setFormData(prevFormData => ({
      ...prevFormData, // On conserve toutes les autres propriétés de formData
      startDate: start,
      endDate: end,
    }));
  };

  const handleGroupSelect = index => {
    setGroupSelected(index); // Met à jour l'état avec l'index du bouton cliqué
    setFormData(prevFormData => ({
      ...prevFormData, // On conserve toutes les autres propriétés de formData
      typeGroup: typeOfGroup[index].name.toUpperCase(), // On met à jour seulement typeGroup
    }));
  };

  const handleDietSelect = index => {
    setDietSelected(index); // Met à jour l'état avec l'index du bouton cliqué
    setFormData(prevFormData => ({
      ...prevFormData, // On conserve toutes les autres propriétés de formData
      regimeAlimentaire: regimeAlimentaireList[index].name.toUpperCase(), // On met à jour seulement typeGroup
    }));
  };

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      userId: user.id,
      token: user.token,
    }));
  }, [user]);

  useEffect(() => {
    if (counter === 1) {
      setFormData(prevFormData => ({
        ...prevFormData, // On conserve toutes les autres propriétés de formData
        typeGroup: 'SOLO', // On met à jour seulement typeGroup quand le counter tombe à 1
      }));
    }
    setFormData(prevFormData => ({
      ...prevFormData, // On conserve toutes les autres propriétés de formData
      nbPerson: counter, // On met à jour seulement typeGroup quand le counter tombe à 1
    }));
  }, [counter]);

  async function handleSubmit(formData) {
    console.log(user);
    console.log("voici l 'itinéraire : ", formData);
    const result = await createItineraryAction(formData);
    if (result.error) {
      setError(result.error);
      console.log("voici l'erreur : ", result.error);
    } else if (result.success) {
      setError('');
      console.log("bravo c'est créer !! : ", result);
      // router.push('/account/profile');
    }

    // try {
    //   const response = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/createItinerary`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     },
    //   );
    //   if (response.ok) {
    //     const newItinerary = await response.json();
    //     // router.push(`/itinerary/${newItinerary.id}`)
    //   } else {
    //     console.error('Failed to update user');
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <div className="h-screen mt-16 flex justify-center">
        <div className="w-[36%] min-w-[550px] p-8 space-y-12">
          <h1 className="text-4xl text-center">Plan your next adventure</h1>
          <TripFormDiv title={'Where do you want to go?'}>
            <AutoComplete
              autoCompleteOptions={options}
              placeholderText={'Select a city'}
              onPlaceSelected={handlePlaceSelected}
              maxWidth={4500}
              required={true}
            />
          </TripFormDiv>
          <TripFormDiv title={'Select dates:'}>
            <DateRangePicker onDateChange={handleDateChange} />
          </TripFormDiv>
          <TripFormDiv title={'Do you have any special diet?'}>
            <SelectableButtons
              itemList={regimeAlimentaireList}
              handleGroupSelect={handleDietSelect}
              groupSelected={dietSelected}
            />
          </TripFormDiv>
          <TripFormDiv title={'How many people are going?'}>
            <div className="flex h-13 w-auto py-3 px-4 border border-gray-300 rounded-md items-center justify-between shadow-sm">
              <div className="flex items-center space-x-4">
                <p className="w-10 py-1 bg-yellow-100 border border-yellow-300 rounded-md text-center">
                  {counter}
                </p>
                {counter > 1 ? <p>Persons</p> : <p>Person</p>}
              </div>
              <div className="flex items-center space-x-4">
                <Counter
                  min={1}
                  max={14}
                  counter={counter}
                  setCounter={setCounter}
                />
              </div>
            </div>
          </TripFormDiv>
          {counter > 1 ? (
            <TripFormDiv title={'Who are you traveling with?'}>
              <SelectableButtons
                itemList={typeOfGroup}
                handleGroupSelect={handleGroupSelect}
                groupSelected={groupSelected}
              />
            </TripFormDiv>
          ) : (
            ''
          )}
          <div className="flex flex-col items-center justify-center">
            {error ? <p className="text-red-500">{error}</p> : <></>}
            <Button
              buttonStyle="mt-14 rounded-full text-white bg-amber-600 hover:bg-amber-500"
              padding="px-6 py-2"
              onClick={() => handleSubmit(formData)}>
              Create a new trip
            </Button>
            <p className="mt-5 text-gray-400 text-sm text-center">
              By clicking Create New Trip, you agree to our Terms and Conditions
              and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </APIProvider>
  );
}

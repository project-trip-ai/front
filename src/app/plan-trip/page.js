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
    long: '',
    lat: '',
    shortName: '',
    nbPerson: counter,
    startDate: startDate,
    endDate: endDate,
    typeGroup: 'SOLO',
    regimeAlimentaire: 'NORMAL',
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
    { name: 'Couple', icon: heartIcon, value:"COUPLE" },
    { name: 'Friends', icon: friendsIcon, value: "FRIENDS" },
    { name: 'Family', icon: familyIcon, value: "FAMILY" },
    { name: 'Collegues', icon: colleguesIcon, value: "COMPANY" },
  ];

  const regimeAlimentaireList = [
    { name: 'None', icon: plateIcon, value: "NORMAL" },
    { name: 'Halal', icon: halalIcon, value: "HALAL" },
    { name: 'Vegan', icon: veganIcon, value: "VEGAN" },
    { name: 'Vegetarian', icon: vegetarianIcon, value: "VEGETARIAN" },
  ];

  // Fonction de rappel pour recevoir le lieu sélectionné
  const handlePlaceSelected = place => {
    setSelectedPlace(place);
    setFormData(prevFormData => ({
      ...prevFormData, // On conserve toutes les autres propriétés de formData
      destination: place.name,
      bgImg: place.photoUrl,
      long: place.geometry.location.lng(),
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
      typeGroup: typeOfGroup[index].value.toUpperCase(), // On met à jour seulement typeGroup
    }));
  };

  const handleDietSelect = index => {
    setDietSelected(index); // Met à jour l'état avec l'index du bouton cliqué
    setFormData(prevFormData => ({
      ...prevFormData, // On conserve toutes les autres propriétés de formData
      regimeAlimentaire: regimeAlimentaireList[index].value.toUpperCase(), // On met à jour seulement typeGroup
    }));
  };

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
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
    if(user){

      if(user.sub){
        const now = new Date();
        const expirationDate = new Date(user.sub.expirationDate);

        if (expirationDate < now) {
          setError("Your subscription is expired")
        } else {
          try{
            const data = await createItineraryAction(formData);
            if (data.error) {
              setError(data.error);
            } else {
              router.push(`/itinerary/${data.itinerary.id}`);
            }
          }
          catch (error) {
            setError("Failed to create the itinerary.");
          }
        }
      }
      else if (user.try === false){
        try{
          const data = await createItineraryAction(formData);
          if (data.error) {
            setError(data.error);
          } else {
            router.push(`/itinerary/${data.itinerary.id}`);
          }
        }
        catch (error) {
          console.error("Error creating itinerary:", error);
          setError("Failed to create the itinerary.");
        }
      }
      else {
        setError("You currently don’t have any subscription.")
      }
    } 
    else {
      setError("You have to log in before creating an itinerary")
    }
    

    // } else if (result.error) {
    //   setError(result.error);
    //   console.log("voici l'erreur : ", result.error);
    // }

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
    //     setError('');
    //     const newItinerary = await response.json();
    //     router.push(`/itinerary/${newItinerary.id}`);
    //   } else {
    //     setError(response.error);
    //     console.error('Failed to create a new trip : ', response);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-16">
        <div className="w-[36%] min-w-[550px] p-8 space-y-12 bg-white rounded-xl">
          <h1 className="text-4xl text-center font-extrabold">Plan your next adventure</h1>
          <form className="space-y-6" 
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(formData);
          }}>
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
              {error && <p className="text-red-500">{error}</p>}
              <button
                className="mt-14 rounded-full text-white bg-amber-600 hover:bg-amber-500 px-6 py-2"
                type="submit">
                Create a new trip
              </button>
              <p className="mt-5 text-sm text-center">
                By clicking Create New Trip, you agree to our Terms and Conditions
                and Privacy Policy.
              </p>
            </div>
          </form>        
        </div>
      </div>
    </APIProvider>
  );
}

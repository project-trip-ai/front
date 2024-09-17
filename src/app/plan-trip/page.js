'use client';

import React, { useState } from 'react';
import AutoComplete from '../components/AutoComplete';
import { APIProvider } from '@vis.gl/react-google-maps';
import TripFormDiv from '../components/TripFormDiv';
import Button from '../components/Button';
import Counter from '../components/Counter';
import DateRangePicker from '../components/DateRangePicker';
import heartIcon from '../../../public/icons/heart.svg';
import friendsIcon from '../../../public/icons/friends.svg';
import familyIcon from '../../../public/icons/family.svg';
import colleguesIcon from '../../../public/icons/collegues.svg';
import Image from 'next/image';

export default function PlanTripPage() {
  const [counter, setCounter] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [groupSelected, setGroupSelected] = useState(null);

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

  // Fonction qui met à jour les dates
  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleGroupSelect = index => {
    setGroupSelected(index); // Met à jour l'état avec l'index du bouton cliqué
    console.log('click !!! : ', groupSelected);
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <div className="h-screen mt-32 flex justify-center">
        <div className="w-[36%] min-w-[550px] p-8 space-y-12">
          <h1 className="text-4xl text-center">Plan your next adventure</h1>
          <TripFormDiv title={'Where do you want to go?'}>
            <AutoComplete
              autoCompleteOptions={options}
              placeholderText={'Select a city'}
              maxWidth={4500}
              required={true}
            />
          </TripFormDiv>
          <TripFormDiv title={'Select dates:'}>
            <DateRangePicker onDateChange={handleDateChange} />
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
              <div className="w-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {typeOfGroup.map((type, index) => (
                  <Button
                    key={index}
                    buttonStyle={` transition-colors duration-100 rounded-md shadow-sm  
                      ${
                        groupSelected === index
                          ? 'border border-yellow-300 bg-yellow-100 text-black hover:border-yellow-400 hover:bg-yellow-200'
                          : 'border border-gray-200 bg-white text-gray-400 hover:text-gray-500 hover:border-gray-300 hover:bg-gray-100'
                      }`}
                    onClick={() => handleGroupSelect(index)}>
                    <Image
                      priority
                      src={type.icon}
                      alt="icon"
                      width={40}
                      height={40}
                      className="mr-2 text-white"
                    />
                    {type.name}
                  </Button>
                ))}
              </div>
            </TripFormDiv>
          ) : (
            ''
          )}
          <div className="flex flex-col items-center justify-center">
            <Button
              buttonStyle="mt-14 rounded-full text-white bg-amber-600 hover:bg-amber-500"
              padding="px-6 py-2">
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

'use client';

import { useEffect, useState } from 'react';
import ActivityCard from '../ActivityCard';
import AngleRight from '@/../../public/icons/angle-right.svg';
import Image from 'next/image';
import Input from '../../Input';
import AutoComplete from '../../AutoComplete';
import { useUser } from '@/context/UserContext';
import { createActivity, deleteActivity } from '@/api';

const DayCard = ({
  day,
  month,
  ordinal,
  shortName,
  activities,
  date,
  itineraryId,
  onActivityCreated,
  setActiveMarker,
  isOpen, // Reçoit l'état d'ouverture du parent
  onToggle,
  setActivities,
}) => {
  // const [isOpen, setIsOpen] = useState(false); // Toggle to show/hide activities
  const [selectedPlace, setSelectedPlace] = useState(null); // Selected place from AutoComplete
  const [error, setError] = useState(''); // For error messages
  const [loading, setLoading] = useState(false); // Loading state
  const { user } = useUser(); // User from context

  // Options for Google Places Autocomplete
  const options = {
    componentRestrictions: { country: shortName },
    fields: [
      'geometry',
      'name',
      'rating',
      'price_level',
      'international_phone_number',
      'formatted_address',
      'photos',
      'url',
    ], // Fields to retrieve from Google Places
  };

  const handleDelete = async (id, token) => {
    if (!user) {
      console.log("L'utilisateur est manquant.");
      setError('Unable to proceed: Place or user information missing.');
      return;
    }

    try {
      // Make the API call to delete the activity
      const data = await deleteActivity(id, token);

      if (data.error) {
        console.error('Erreur API : ', data.error);
      } else {
        console.log('Activité supprimée avec succès:', data);
        // Filter out the deleted activity from activities
        setActivities(prevActivities =>
          prevActivities.filter(activity => activity.id !== id),
        );
      }
    } catch (err) {
      console.error("Erreur lors de la suppression de l'activité :", err);
    }
  };

  // Callback when a place is selected
  const handlePlaceSelected = async place => {
    if (!place || !user) {
      console.log("Le lieu ou l'utilisateur est manquant.");
      setError('Unable to proceed: Place or user information missing.');
      return;
    }

    // Logs to verify place data
    console.log('Lieu sélectionné : ', place);

    // Construct the activity data object
    const activityData = {
      name: place.name,
      adresse: place.formatted_address,
      date: date,
      long: place.geometry.location.lng(),
      lat: place.geometry.location.lat(),
      rating: place.rating,
      phoneNumber: place.international_phone_number,
      priceLevel: place.price_level,
      url: place.url,
      itineraryId: itineraryId,
      image: place.photoUrl, // Assuming photoUrl is correct
      token: user?.token || '',
    };

    console.log("Données de l'activité : ", activityData);

    setLoading(true); // Start loading

    try {
      // Make the API call to create an activity
      const data = await createActivity(activityData);

      if (data.error) {
        setError(data.error);
        console.error('Erreur API : ', data.error);
      } else {
        console.log('Activité créée avec succès:', data);
        onActivityCreated(data.activity);
      }
    } catch (err) {
      console.error("Erreur lors de la création de l'activité :", err);
      setError('Failed to create activity');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="px-12">
      {/* Clickable div to handle toggle */}
      <div className="flex items-center cursor-pointer " onClick={onToggle}>
        <Image
          priority
          src={AngleRight}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          alt="Toggle Arrow"
        />
        <p className="text-2xl ml-2">
          {day}, {month} {ordinal}
        </p>
      </div>

      <div className="h-[1px] w-full bg-gray-300 my-10"></div>

      {/* Conditionally show the ActivityCard */}
      {isOpen && (
        <div className="space-y-5 mb-16">
          <AutoComplete
            autoCompleteOptions={options}
            placeholderText={'Search for a place'}
            onPlaceSelected={handlePlaceSelected}
          />
          {/* Loading indicator */}
          {loading && <p className="text-blue-500">Creating activity...</p>}
          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}

          {activities && activities.length > 0 ? (
            <>
              {activities.map((activity, index) => {
                return (
                  <ActivityCard
                    name={activity.name}
                    image={activity.image}
                    key={index}
                    onHover={() => setActiveMarker(activity.id)}
                    handleDelete={() => handleDelete(activity.id, user.token)}
                  />
                );
              })}
            </>
          ) : (
            <div className="flex text-gray-400 w-full p-3 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 hover:border-gray-300">
              <p>You don't have plans for this day</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DayCard;

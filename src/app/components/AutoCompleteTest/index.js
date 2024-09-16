import React, { useEffect, useState, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';

const AutoComplete = () => {
  const libraries = ['places'];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY, // Assurez-vous que cette clé est bien configurée
    libraries,
  });

  const [inputValue, setInputValue] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isLoaded || loadError) return;

    // Options pour l'autocomplete Google Places
    const options = {
      componentRestrictions: { country: 'jp' }, // Restriction de pays, ici le Japon
      fields: ['address_components', 'geometry'], // Champs récupérés
    };

    // Instanciation de l'autocomplete
    const autocomplete = new google.maps.places.Autocomplete(
      inputRef.current,
      options,
    );

    // Listener pour l'événement "place_changed" lorsque l'utilisateur sélectionne une adresse
    autocomplete.addListener('place_changed', () =>
      handlePlaceChanged(autocomplete),
    );
  }, [isLoaded, loadError]);

  const handlePlaceChanged = autocomplete => {
    const place = autocomplete.getPlace();
    if (place && place.geometry) {
      setSelectedPlace(place); // Met à jour les informations du lieu sélectionné
    }
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="p-4">
      {/* Champ de saisie pour l'auto-complétion */}
      <input
        ref={inputRef} // Référence pour l'auto-complétion
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for a place"
      />

      {/* Affichage des informations du lieu sélectionné */}
      {selectedPlace && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Selected Place:</h2>
          <pre className="p-2 mt-2 bg-gray-100 rounded-md shadow-sm">
            {JSON.stringify(selectedPlace, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AutoComplete;

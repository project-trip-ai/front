import React, { useState, useEffect, useRef } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import Input from '../Input';

const AutoComplete = ({
  autoCompleteOptions,
  placeholderText,
  maxWidth = 400,
  required,
}) => {
  const [inputValue, setInputValue] = useState(''); // Stocke la valeur de l'input
  const [selectedPlace, setSelectedPlace] = useState(null); // Stocke le lieu sélectionné
  const [photoUrl, setPhotoUrl] = useState(null); // Stocke l'URL de la photo
  const inputRef = useRef(null); // Référence de l'input
  const autocompleteRef = useRef(null); // Référence pour l'instance d'autocomplete
  const places = useMapsLibrary('places'); // Utilisation de la bibliothèque Google Places

  // Initialisation de l'auto-complétion une seule fois
  useEffect(() => {
    if (!places || !inputRef.current || autocompleteRef.current) return;

    const options = autoCompleteOptions;

    // Crée l'instance d'autocomplete et la stocke dans autocompleteRef
    autocompleteRef.current = new places.Autocomplete(
      inputRef.current,
      options,
    );

    // Listener pour détecter quand un lieu est sélectionné
    autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current.getPlace();
      if (place && place.geometry) {
        setSelectedPlace(place); // Met à jour l'état avec le lieu sélectionné

        // Si des photos sont disponibles, récupère l'URL de la première photo
        if (place.photos && place.photos.length > 0) {
          const url = place.photos[0].getUrl({ maxWidth: maxWidth }); // Récupère l'URL de la photo
          setPhotoUrl(url); // Met à jour l'état avec l'URL de la photo
        } else {
          setPhotoUrl(null); // Si pas de photos, pas d'URL
        }
      }
    });
  }, [places]);

  useEffect(() => {
    console.log('voici la place : ', selectedPlace);
  }, [selectedPlace]);

  const handleChange = event => {
    setInputValue(event.target.value); // Met à jour l'état avec la valeur de l'input
  };

  return (
    <div>
      {/* Champ de saisie avec auto-complétion */}
      <Input
        ref={inputRef} // Référence pour l'auto-complétion
        type="text"
        value={inputValue}
        onChange={handleChange}
        focus="w-full focus:border-gray-400 h-11"
        placeholder={placeholderText}
        required={required}
      />
      {/* <input
        ref={inputRef} // Référence pour l'auto-complétion
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for a place"
      /> */}
    </div>
  );
};

export default AutoComplete;

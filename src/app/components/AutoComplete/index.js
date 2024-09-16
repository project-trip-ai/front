import React, { useState, useEffect, useRef } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import Input from '../Input';

const AutoComplete = ({ shortName }) => {
  const [inputValue, setInputValue] = useState(''); // Stocke la valeur de l'input
  const [selectedPlace, setSelectedPlace] = useState(null); // Stocke le lieu sélectionné
  const [photoUrl, setPhotoUrl] = useState(null); // Stocke l'URL de la photo
  const inputRef = useRef(null); // Référence de l'input
  const autocompleteRef = useRef(null); // Référence pour l'instance d'autocomplete
  const places = useMapsLibrary('places'); // Utilisation de la bibliothèque Google Places

  // Initialisation de l'auto-complétion une seule fois
  useEffect(() => {
    if (!places || !inputRef.current || autocompleteRef.current) return;

    const options = {
      // componentRestrictions: { country: '${shortName' },
      // types: ['country'], ce sera pour le formulaire
      fields: [
        // 'address_components', ce sera pour le formulaire
        'geometry',
        'name',
        'formatted_address',
        'photos',
        'types',
        'url',
      ], // Champs récupérés
    };

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
          const url = place.photos[0].getUrl({ maxWidth: 4000 }); // Récupère l'URL de la photo
          setPhotoUrl(url); // Met à jour l'état avec l'URL de la photo
        } else {
          setPhotoUrl(null); // Si pas de photos, pas d'URL
        }
      }
    });
  }, [places]);

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
        focus="w-full focus:border-gray-400"
        placeholder="Search for a place"
      />
      {/* <input
        ref={inputRef} // Référence pour l'auto-complétion
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for a place"
      /> */}

      {/* Affichage des informations du lieu sélectionné */}
      {selectedPlace && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Selected Place:</h2>
          <pre className="p-2 mt-2 bg-gray-100 rounded-md shadow-sm">
            {JSON.stringify(selectedPlace, null, 2)}
          </pre>

          {/* Affichage de l'image si elle est disponible */}
          {photoUrl && (
            <div className="mt-4">
              <img
                src={photoUrl}
                alt={selectedPlace.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;

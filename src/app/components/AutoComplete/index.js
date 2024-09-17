import { useEffect, useRef, useState } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import Input from '../Input';

const AutoComplete = ({
  autoCompleteOptions,
  placeholderText,
  maxWidth = 400,
  required,
  onPlaceSelected, // Ajout de la prop pour le callback
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
        // Récupérer l'URL de la photo s'il y en a
        let photoUrl = null;
        if (place.photos && place.photos.length > 0) {
          photoUrl = place.photos[0].getUrl({ maxWidth: maxWidth }); // Récupère l'URL de la photo
        }

        // Ajouter photoUrl à l'objet place
        const updatedPlace = {
          ...place,
          photoUrl, // Ajout de la propriété photoUrl à place
        };

        setSelectedPlace(updatedPlace); // Met à jour l'état avec le lieu sélectionné et photoUrl

        // Appeler la fonction de rappel si elle est définie pour informer le parent
        if (onPlaceSelected) {
          onPlaceSelected(updatedPlace); // Passe le lieu sélectionné (avec photoUrl) au parent via le callback
        }

        setPhotoUrl(photoUrl); // Met à jour l'état avec l'URL de la photo
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
        focus="w-full focus:border-gray-400 h-11"
        placeholder={placeholderText}
        required={required}
      />
    </div>
  );
};

export default AutoComplete;

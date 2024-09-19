'use client'; // Assure que le composant est un composant client

import React, { useState, useEffect } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMap,
} from '@vis.gl/react-google-maps';
import Image from 'next/image';

const GMap = ({
  position = { lat: 53.54, lng: 10 },
  dayIndex,
  places,
  activeMarker,
  setActiveMarker,
}) => {
  const [mapCenter, setMapCenter] = useState(position);
  const [placesList, setPlacesList] = useState([]);

  const handleMapClick = () => {
    setActiveMarker(null); // Fermer l'InfoWindow lorsque l'on clique sur la carte
  };

  useEffect(() => {
    if (places[dayIndex]) {
      setPlacesList(places[dayIndex].activities);
    }
  }, [dayIndex, places]);

  useEffect(() => {
    if (activeMarker !== null && places[dayIndex]) {
      // Trouver l'activité correspondante
      const marker = places[dayIndex].activities.find(
        activity => activity.id === activeMarker,
      );
      if (marker) {
        // Mettre à jour mapCenter avec les coordonnées de l'activité trouvée
        setMapCenter({ lat: marker.lat, lng: marker.long });
      }
    }
  }, [activeMarker, dayIndex, places]);

  return (
    <div className="h-full w-full">
      <Map
        defaultZoom={11}
        defaultCenter={mapCenter}
        mapId={process.env.NEXT_PUBLIC_MAP_ID}
        disableDefaultUI={true}
        onClick={handleMapClick}>
        <Markers
          points={placesList}
          setActiveMarker={setActiveMarker}
          activeMarker={activeMarker}
          setMapCenter={setMapCenter}
          mapCenter={mapCenter}
        />
      </Map>
    </div>
  );
};

export default GMap;

const Markers = ({
  points,
  setActiveMarker,
  activeMarker,
  setMapCenter,
  mapCenter,
}) => {
  const map = useMap();

  // useEffect(() => {
  //   console.log('le marker actuel yes : ', activeMarker);
  //   setMapCenter({ lat: position.lat, lng: position.long });
  // }, [activeMarker]);

  useEffect(() => {
    if (!map) {
      console.log("Map hasn't loaded yet");
      return;
    }

    console.log('Current map center before pan:', mapCenter);
    map.panTo(mapCenter);
  }, [mapCenter, map]);

  const handleMarkerClick = (index, position) => {
    setActiveMarker(position.id);
    console.log('la position qui est passé au pan : ', position);
    setMapCenter({ lat: position.lat, lng: position.long });
  };

  return (
    <>
      {points && points.length > 0 ? (
        <>
          {points.map((point, index) => (
            <div key={index}>
              <AdvancedMarker
                position={{ lat: point.lat, lng: point.long }}
                onClick={() => handleMarkerClick(index, point)}>
                <Pin
                  background={'#fceba4'}
                  borderColor={'orange'}
                  glyphColor={'orange'}
                />
              </AdvancedMarker>
              {activeMarker === point.id && (
                <InfoWindow
                  position={{ lat: point.lat, lng: point.long }}
                  headerDisabled={true}
                  onCloseClick={() => setActiveMarker(null)}
                  className="w-[480px] h-60">
                  <div className="flex space-x-4 py-1">
                    <div className="space-y-2">
                      <h1
                        className="font-medium text-lg cursor-pointer"
                        onClick={() => window.open(point.url)}>
                        {point.name}
                      </h1>
                      <p>{point.adresse}</p>
                      {point.phoneNumber ? <p>{point.phoneNumber}</p> : <></>}
                    </div>
                    <div className="h-[230px] w-[230px] rounded-lg bg-gray-200">
                      <div className="w-[230px] h-[230px] relative overflow-hidden rounded-lg shadow-sm cursor-pointer">
                        <Image
                          priority
                          src={point.image}
                          layout="fill"
                          objectFit="cover"
                          alt={point.name}
                          onClick={() => window.open(point.url)}
                        />
                      </div>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

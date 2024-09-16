'use client';

import React, { useState, useEffect } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMap,
} from '@vis.gl/react-google-maps';

const GMap = ({ position = { lat: 53.54, lng: 10 } }) => {
  const positionList = [
    { lat: 53.54, lng: 10 },
    { lat: 53.74, lng: 10 },
  ];
  const [mapCenter, setMapCenter] = useState(position);
  const [activeMarker, setActiveMarker] = useState(null); // State to track the active marker

  const handleMapClick = () => {
    setActiveMarker(null); // Close the InfoWindow when clicking on the map
  };

  return (
    <div className="h-full w-full">
      <Map
        defaultZoom={10}
        defaultCenter={mapCenter}
        mapId={process.env.NEXT_PUBLIC_MAP_ID}
        disableDefaultUI={true}
        onClick={handleMapClick}
        onLoad={map => console.log('Map Loaded:', map)} // Ensure map is loaded
      >
        <Markers
          points={positionList}
          setActiveMarker={setActiveMarker}
          setMapCenter={setMapCenter}
          activeMarker={activeMarker}
          mapCenter={mapCenter} // Pass the mapCenter state down
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

  useEffect(() => {
    if (!map) {
      console.log("Map hasn't loaded yet");
      return;
    }

    // Log the current map center before panTo is called
    console.log('Current map center before pan:', mapCenter);

    map.panTo(mapCenter);
  }, [mapCenter, map]); // Trigger effect on mapCenter or map change

  const handleMarkerClick = (index, position) => {
    setActiveMarker(index);
    setMapCenter(position); // Set the new center when a marker is clicked
  };

  return (
    <>
      {points.map((point, index) => (
        <div key={index}>
          <AdvancedMarker
            position={point}
            onClick={() => handleMarkerClick(index, point)}>
            <Pin
              background={'#fceba4'}
              borderColor={'orange'}
              glyphColor={'orange'}></Pin>
          </AdvancedMarker>
          {/* Show InfoWindow only for the active marker */}
          {activeMarker === index && (
            <InfoWindow
              position={point}
              headerDisabled={true}
              onCloseClick={() => setActiveMarker(null)} // Close the InfoWindow
            >
              <div className="flex space-x-4 py-1">
                <div>
                  <h1 className="font-medium text-lg">Tokyo Tower</h1>
                  <p>Restaurant</p>
                  <p>Description {index + 1}</p>
                </div>
                <div className="h-40 w-40 rounded-lg bg-gray-200"></div>
              </div>
            </InfoWindow>
          )}
        </div>
      ))}
    </>
  );
};

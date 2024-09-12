'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = ({ latValue = 43.642693, longValue = -79.3871189 }) => {
  const mapRef = React.useRef(null); // No type annotation in JavaScript

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');

      // init a marker
      const { Marker } = await loader.importLibrary('marker');

      const position = {
        lat: latValue,
        lng: longValue,
      };

      // map options
      const mapOptions = {
        center: position,
        zoom: 13,
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
      };

      // setup the map
      const map = new Map(mapRef.current, mapOptions);

      //put up a marker
      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return <div className="h-full w-full" ref={mapRef} />;
};

export default Map;

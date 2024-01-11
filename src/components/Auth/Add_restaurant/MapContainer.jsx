import React from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps-api';

const MapContainer = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.7128, // Specify your default latitude
    lng: -74.0060, // Specify your default longitude
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10} // Specify your default zoom level
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;

"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749, // Latitude
  lng: -122.4194, // Longitude
};

export default function MyMap() {
  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Markers or other map elements here */}
        </GoogleMap>
      </LoadScript>
    </>
  );
}

// LocationMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = ({ latitude, longitude }) => {
  const position = [latitude, longitude]; // Use the latitude and longitude props

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100%", height: "500px" }}
    >
      {/* OpenStreetMap TileLayer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Klinsept</a> '
      />
      {/* Marker at the specified position */}
      <Marker position={position}>
        <Popup>Our Business Location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;

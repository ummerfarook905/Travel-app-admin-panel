import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const LocationMap = ({ coordinates, location, zoom = 13, height = 'h-48' }) => {
  console.log("Coordinates in LocationMap:", coordinates);

  if (!coordinates) {
    return <p className="text-sm text-gray-500">Loading map...</p>;
  }
  

// Fix default icon URLs
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});



  return (
    <MapContainer
      center={coordinates}
      zoom={zoom}
      scrollWheelZoom={false}
      className={`w-full ${height} rounded-md`}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={coordinates}>
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;

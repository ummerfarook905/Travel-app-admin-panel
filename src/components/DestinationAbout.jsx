import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useGeocode from "../hooks/useGeoCode"; 
import LocationMap from "./LocationMap"; 
import { useEffect, useState } from "react";

const DestinationAbout = ({ description, location }) => {
   console.log("Incoming location prop:", location);
  
   
 useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://your-api.com/location");
        const data = await response.json();
        setLocation(data.location);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);
   
  const coordinates = useGeocode(location); 

   console.log("Resolved coordinates:", coordinates);
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#004D40] mb-3">About:</h2>
      <p className="text-gray-700 text-sm mb-4">{description}</p>

 {/* <img
      src="https://via.placeholder.com/400x200?text=Map"
      alt="Map"
      className="w-full h-48 object-cover rounded-md"
    /> */}
      
      <LocationMap coordinates={coordinates} location={location} />
    </div>
  );
};

export default DestinationAbout;

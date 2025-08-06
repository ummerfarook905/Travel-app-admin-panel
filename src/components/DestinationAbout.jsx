


import React from "react";
import useGeocode from "../hooks/useGeoCode";
import LocationMap from "./LocationMap";

const DestinationAbout = ({ description, location }) => {
  console.log("Incoming location prop:", location);

  const coordinates = useGeocode(location);

  console.log("Resolved coordinates:", coordinates);

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#004D40] mb-3">About:</h2>
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      <LocationMap coordinates={coordinates} location={location} />
    </div>
  );
};

export default DestinationAbout;

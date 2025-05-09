import React from "react";
import { useParams } from "react-router-dom";
import { initialDestinations } from "../redux/destinationReducer";

import DestinationImageHeader from "../components/DestinationImageHeader";
import DestinationInfoBar from "../components/DestinationInfoBar";
import DestinationAbout from "../components/DestinationAbout";
import DestinationImages from "../components/DestinationImages";
import DestinationReviews from "../components/DestinationReviews";

const Detailed_Destination = () => {
  const { id } = useParams();
  const destination = initialDestinations.find((dest) => dest.id === id);

  if (!destination) {
    return <div className="p-6 text-center text-xl text-gray-500">Destination not found.</div>;
  }

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-md">
        <DestinationImageHeader image={destination.image} name={destination.name} />
        <DestinationInfoBar name={destination.name} location={destination.location} />

        <div className="grid md:grid-cols-2 gap-6 px-6 py-8">
          <DestinationAbout description={destination.description} />
          <DestinationImages images={destination.images} />
        </div>

        <DestinationReviews rating={destination.rating} reviews={destination.reviews} />
      </div>
    </div>
  );
};

export default Detailed_Destination;

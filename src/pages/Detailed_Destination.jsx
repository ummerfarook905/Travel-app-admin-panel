import React from "react";
import { useParams } from "react-router-dom";
import { initialDestinations } from "../redux/destinationReducer";
import SectionTitle from "../components/SectionTitle";


import DestinationInfoBar from "../components/DestinationInfoBar";
import DestinationAbout from "../components/DestinationAbout";
// import DestinationImages from "../components/DestinationImages";
import ReviewList from "../components/ReviewList";
import ImageGallery from "../components/ImageGallery";

const Detailed_Destination = () => {
  const { id } = useParams();
  const destination = initialDestinations.find((dest) => dest.id === id);

  if (!destination) {
    return <div className="p-6 text-center text-xl text-gray-500">Destination not found.</div>;
  }

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-md">
       
        <DestinationInfoBar name={destination.name} location={destination.location} />

        {/* <div className="grid md:grid-cols-2 gap-6 px-6 py-8">
          <DestinationAbout description={destination.description} />
          <DestinationImages images={destination.images} />
           <div className="md:w-2/3">
              <SectionTitle>Images</SectionTitle>
              <ImageGallery images={destination.images} />
            </div>
        </div> */}
 <div className="p-4 md:p-6 space-y-8">

          {/* Description and price */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1 max-w-full md:max-w-[70%] min-w-0">
              <SectionTitle>About:</SectionTitle>
              <p className="text-sm md:text-base mt-2 leading-relaxed text-justify text-[#303972]">
                {destination.description}
              </p>
            </div>
          </div>

          {/* Map and gallery */}
          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="md:w-1/3">
               <DestinationAbout
      location={destination.location}
      description={destination.description}
    />
            </div>
            <div className="pl-6">
              <SectionTitle>
                Images
              </SectionTitle>
              <ImageGallery images={destination.images} />
            </div>
          </div>

        </div>
        <ReviewList rating={destination.rating} reviews={destination.reviews} />
      </div>
    </div>
  );
};

export default Detailed_Destination;

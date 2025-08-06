
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import DestinationInfoBar from "../components/DestinationInfoBar";
import DestinationAbout from "../components/DestinationAbout";
import ReviewList from "../components/ReviewList";
import ImageGallery from "../components/ImageGallery";

// ✅ Local image imports
import munnar from "../assets/Images/Destination/Munnar.jpg";
import beach from "../assets/Images/Destination/Beach.jpg";
import goa from "../assets/Images/Destination/Goa.jpg";
import madayipara from "../assets/Images/Destination/madayipara.jpeg";
import vypin from "../assets/Images/Destination/vypin.jpg";

// ✅ Map of image keys to image imports
const DESTINATION_IMAGES = {
  munnar,
  beach,
  goa,
  madayipara,
  vypin,
};

const Detailed_Destination = () => {
  const { id } = useParams();

  const destination = useSelector((state) =>
    state.destinations.find((dest) => dest.id === id)
  );

  if (!destination) {
    return (
      <div className="p-6 text-center text-xl text-gray-500">
        Destination not found.
      </div>
    );
  }

  // ✅ Resolve image keys to actual imported image files
  // const resolvedImages = destination.images?.map((imgKey) =>
  //   DESTINATION_IMAGES[imgKey?.split(".").pop()?.toLowerCase()]
  // );

  const resolvedImages = destination.images?.map((imgKey) =>
  DESTINATION_IMAGES[imgKey?.toLowerCase()]
);


  return (
    <div className="bg-[#F9FAFB] min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-md">
        
        {/* ✅ Corrected usage */}
        <DestinationInfoBar destination={destination} />

        <div className="p-4 md:p-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1 max-w-full md:max-w-[70%] min-w-0">
              <SectionTitle>About:</SectionTitle>
              <p className="text-sm md:text-base mt-2 leading-relaxed text-justify text-[#303972]">
                {destination.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-4">
            <div className="md:w-1/3">
              <DestinationAbout
                location={destination.location}
                description={destination.description}
              />
            </div>
            <div className="pl-6">
              <SectionTitle>Images</SectionTitle>
              <ImageGallery images={resolvedImages} />
            </div>
          </div>
        </div>

        <ReviewList
          rating={destination.rating}
          reviews={destination.reviews}
        />
      </div>
    </div>
  );
};

export default Detailed_Destination;

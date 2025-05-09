import React from "react";
import { useParams } from "react-router-dom";
import { initialDestinations } from "../redux/destinationReducer";
import { FaMapMarkerAlt } from "react-icons/fa";

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = initialDestinations.find((dest) => dest.id === id);

  if (!destination) {
    return <div className="p-6 text-center text-xl text-gray-500">Destination not found.</div>;
  }

  return (
    <div className="bg-[#E5E7EB] min-h-screen py-8 px-4 md:px-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-6xl mx-auto">
        {/* Image section with full rounded top */}
        <div className="relative">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-64 object-cover"
          />

          {/* Green bottom info bar */}
          <div className="bg-[#004D40] p-6 flex flex-col md:flex-row justify-between items-start md:items-center rounded-b-xl">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{destination.name}</h1>
                <p className="text-gray-200">{destination.location}</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <button className="bg-white text-[#004D40] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">Delete</button>
              <button className="bg-white text-[#004D40] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100">Edit</button>
            </div>
          </div>
        </div>

        {/* About & Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 px-6 pb-6 mt-6">
          <div>
            <h2 className="text-lg font-semibold text-[#004D40] mb-2">About:</h2>
            <p className="text-gray-700 mb-4">{destination.description}</p>
            <div className="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center text-gray-600">Map View Placeholder</div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#004D40] mb-2">Images:</h2>
            <div className="grid grid-cols-2 gap-4">
              {(destination.images || []).map((img, i) => (
                <img key={i} src={img} alt={`img-${i}`} className="w-full h-24 object-cover rounded-md" />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="px-6 pb-8">
          <h2 className="text-lg font-semibold text-[#004D40] mb-2">Reviews</h2>
          <div className="text-yellow-600 font-bold mb-4">
            ⭐ {destination.rating} from {destination.reviews.length} reviews
          </div>
          <ul className="space-y-4">
            {destination.reviews.map((review, index) => (
              <li key={index} className="bg-[#F9FAFB] p-4 rounded-lg shadow-sm flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{review.user}</p>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-yellow-600 text-sm">⭐ {review.rating}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;

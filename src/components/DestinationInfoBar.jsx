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
    <div className="bg-[#F9FAFB] min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-md ">
        {/* Header image */}
        <div className="relative h-[300px] mt-6 mx-6" >

        <img
          src={destination.image}
          alt={destination.name}
          className="  w-full h-[300px] object-cover rounded-t-3xl"
        />

        </div>
       

        {/* Header Info */}
        <div className="bg-[#004D40] px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center rounded-b-3xl mx-6">
  <div className="flex items-center space-x-4">
    <div className="bg-orange-500 p-2 rounded-full">
      <FaMapMarkerAlt className="text-white text-xl" />
    </div>
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-white">{destination.name}</h1>
      <p className="text-white text-sm">{destination.location}</p>
    </div>
  </div>

  <div className="flex space-x-2 mt-4 md:mt-0">
    <button className="bg-white text-[#004D40] px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200">
      Delete
    </button>
    <button className="bg-white text-[#004D40] px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200">
      Edit
    </button>
  </div>
</div>
        {/* About and Images */}
        <div className="grid md:grid-cols-2 gap-6 px-6 py-8">
          <div>
            <h2 className="text-xl font-semibold text-[#004D40] mb-3">About:</h2>
            <p className="text-gray-700 text-sm mb-4">{destination.description}</p>
            <img
              src="https://via.placeholder.com/400x200?text=Map"
              alt="Map Placeholder"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#004D40] mb-3">Images:</h2>
            <div className="grid grid-cols-3 gap-3">
              {(destination.images || []).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`img-${i}`}
                  className="w-full h-24 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="px-6 pb-8">
          <h2 className="text-xl font-semibold text-[#004D40] mb-4">Reviews</h2>
          <div className="text-3xl font-bold text-[#004D40] flex items-center gap-2 mb-4">
            <span>⭐ {destination.rating}</span>
            <span className="text-base font-medium text-gray-600">
              ({destination.reviews.length} reviews found)
            </span>
          </div>

          <ul className="space-y-6">
            {destination.reviews.map((review, index) => (
              <li key={index} className="bg-[#F3F4F6] p-5 rounded-xl shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-[#111827]">{review.user}</p>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                  <p className="text-yellow-600 text-sm mt-1">⭐ {review.rating}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination Placeholder */}
          <div className="mt-8 flex justify-center text-sm text-gray-500">
            1 of 10 ⬅️ ➡️
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;

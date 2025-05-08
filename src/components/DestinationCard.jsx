import React from "react";

const DestinationCard = ({ name, image }) => {
  return (
    <div className="bg-green-100 rounded-xl shadow hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-3 text-center text-lg font-medium text-gray-700">
        {name}
      </div>
    </div>
  );
};

export default DestinationCard;

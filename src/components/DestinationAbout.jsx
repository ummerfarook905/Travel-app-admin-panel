import React from "react";

const DestinationAbout = ({ description }) => (
  <div>
    <h2 className="text-xl font-semibold text-[#004D40] mb-3">About:</h2>
    <p className="text-gray-700 text-sm mb-4">{description}</p>
    <img
      src="https://via.placeholder.com/400x200?text=Map"
      alt="Map"
      className="w-full h-48 object-cover rounded-md"
    />
  </div>
);

export default DestinationAbout;

import React from "react";

const AdventureBookingImages = ({ images }) => {
  return (
    <div className="flex gap-4 mb-4 h-64">
      {/* Big main image on the left */}
      <div className="flex-1">
        <img
          src={images[0]}
          alt="Main Adventure"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* 4 small images on the right in 2x2 grid */}
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex gap-2 flex-1">
          <img src={images[1]} alt="Small 1" className="w-1/2 h-full object-cover rounded-lg" />
          <img src={images[2]} alt="Small 2" className="w-1/2 h-full object-cover rounded-lg" />
        </div>
        <div className="flex gap-2 flex-1">
          <img src={images[3]} alt="Small 3" className="w-1/2 h-full object-cover rounded-lg" />
          <img src={images[4]} alt="Small 4" className="w-1/2 h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default AdventureBookingImages;

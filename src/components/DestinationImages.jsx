import React from "react";

const DestinationImages = ({ images }) => (
  <div>
    <h2 className="text-xl font-semibold text-[#004D40] mb-3">Images:</h2>
    <div className="grid grid-cols-3 gap-3">
      {(images || []).map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`img-${i}`}
          className="w-full h-24 object-cover rounded-md"
        />
      ))}
    </div>
  </div>
);

export default DestinationImages;

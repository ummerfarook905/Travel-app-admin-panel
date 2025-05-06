import React from "react";
import AdventureBookingImages from "../components/AdventureBookingImages";
import { FaStar } from "react-icons/fa";

const AdventureBookingInfo = ({ title, location, description, images, checkIn, checkOut, rating = 4 }) => {
  const totalStars = 5;

  return (
    <div className="w-3/5 space-y-4">
      {/* Title and Description */}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-700">{location}</p>

      {/* Star Rating */}
      <div className="flex items-center gap-1 text-yellow-400">
        {[...Array(totalStars)].map((_, i) => (
          <FaStar key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
        ))}
        <span className="text-xs text-gray-600 ml-2">({rating}.0)</span>
      </div>

      {/* Image Grid */}
      <AdventureBookingImages images={images} />

      {/* Check-in/out Times */}
      <div className="flex gap-8 text-sm">
        <div>
          Check-out Time: <strong>{checkOut}</strong>
        </div>
        <div>
          Check-in Time: <strong>{checkIn}</strong>
        </div>
      </div>
    </div>
  );
};

export default AdventureBookingInfo;

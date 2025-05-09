import React from "react";
import { Flag } from "lucide-react"; // optional: for a flag icon, or use an image/icon

const DestinationReviews = ({ rating, reviews }) => (
  <div className="px-6 pb-8">
    <h2 className="text-xl font-bold text-black mb-2">Reviews</h2>
    <div className="flex items-baseline gap-3 mb-6">
      <p className="text-5xl font-extrabold text-black leading-none">{rating}</p>
      <span className="text-sm text-gray-500">{reviews.length} reviews Found</span>
    </div>
    <ul className="space-y-6">
      {reviews.map((review, index) => (
        <li
          key={index}
          className="flex items-start justify-between border-b pb-5"
        >
          <div className="flex gap-4">
            <img
              src={review.avatar || "/default-avatar.png"}
              alt={review.user}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm text-black">
                5.0 Amazing <span className="font-normal text-gray-800">| {review.user}</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
            </div>
          </div>
          <div className="pt-2 pr-2">
            <Flag size={16} className="text-gray-400" />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default DestinationReviews;

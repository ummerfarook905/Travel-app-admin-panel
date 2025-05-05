import React from "react";
import { FlagIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  { name: "Omar Siphron", rating: 5, title: "Amazing", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2025-04-20" },
  { name: "Cristofer Ekstrom Bothman", rating: 5, title: "Amazing", comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", date: "2025-04-18" },
  { name: "Kaiya Lubin", rating: 5, title: "Amazing", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "2025-04-16" },
  { name: "Erin Septimus", rating: 5, title: "Amazing", comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", date: "2025-04-14" },
  { name: "Terry George", rating: 5, title: "Amazing", comment: "At vero eos et accusamus et iusto odio dignissimos ducimus.", date: "2025-04-10" },
];

const ReviewList = () => {
  return (
    <div className="mt-6 px-4">
      {/* Header */}
      <h3 className="text-2xl font-bold text-black">Reviews</h3>
      <div className="flex items-center gap-2 text-lg font-semibold mt-2">
        <span className="text-3xl text-black">4.2</span>
        <span className="text-gray-600">371 reviews Found</span>
      </div>

      {/* Review List */}
      <div className="mt-4 divide-y divide-gray-200">
        {reviews.map((review, index) => (
          <div key={index} className="py-4 flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                {/* {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))} */}
                <span className="font-semibold text-sm text-black">{review.rating}.0 {review.title}</span>
                <span className="text-sm text-gray-600">| {review.name}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <FlagIcon className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;

import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const HotelHeader = ({ name, rating, location }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#003f2f] flex items-center">
        {name}
        <span className="ml-2 flex">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-red-500 ml-1" />
          ))}
        </span>
      </h2>
      <p className="text-gray-600 flex items-center mt-1">
        <FaMapMarkerAlt className="mr-2 text-blue-500" />
        {location}
      </p>
    </div>
  );
};

export default HotelHeader;
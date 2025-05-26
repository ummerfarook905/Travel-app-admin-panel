import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const HotelHeader = ({ name, rating, location }) => {
  return (
    <div className="pl-8">
      <h2 className="text-2xl font-bold  flex items-center">
        {name}
      <span className="ml-2 flex">
          {[...Array(rating)].map((_, i) => (
            <FaStar
              key={i}
              className="ml-1 text-sm"
              style={{ color: i < rating ? '#FF8682' : '#9CA3AF' }} // #FF8682 = custom orange, #9CA3AF = gray-400
              size={14}
            />   
          ))}
      </span>
      </h2>
          <p className="text-sm text-gray-600 flex items-center mt-1 mb-5">
             <FaMapMarkerAlt className="mr-2 text-black" size={14} />
                 {location}
          </p>
    </div>
  );
};

export default HotelHeader;
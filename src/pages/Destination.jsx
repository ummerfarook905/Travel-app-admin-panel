

import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import DestinationCard from "../components/DestinationCard";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { fetchDestinations } from "../redux/destinationThunks";


import munnar from "../assets/Images/Destination/Munnar.jpg";
import beach from "../assets/Images/Destination/Beach.jpg";
import goa from "../assets/Images/Destination/Goa.jpg";
import madayipara from "../assets/Images/Destination/madayipara.jpeg";
import vypin from "../assets/Images/Destination/vypin.jpg";


const DESTINATION_IMAGES = {
  munnar,
  beach,
  goa,
  madayipara,
  vypin,
};

const Destination = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const filteredDestinations = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return destinations.filter(dest =>
      dest.name.toLowerCase().includes(q)
    );
  }, [destinations, searchQuery]);

  return (
    <div className="p-6 bg-[#f6f8fc] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <SearchInput onSearch={setSearchQuery} placeholder="Search adventures..." />
        <button
          onClick={() => navigate('/destination/new')}
          className="bg-[#004d40] text-white px-5 py-2 rounded-full hover:bg-[#00332c] transition cursor-pointer"
        >
          <FaPlus className="inline mr-2" /> New Destination
        </button>
      </div>

      {filteredDestinations.length === 0 ? (
        <p className="text-gray-500 text-center">No destinations found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => {
            const imageKey = dest.image?.toLowerCase();

            return (
              <DestinationCard
                key={dest.id}
                name={dest.name}
                image={DESTINATION_IMAGES[imageKey]}
                onClick={() => navigate(`/destination/${dest.id}`)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Destination;

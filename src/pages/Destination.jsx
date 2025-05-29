import { useReducer, useState, useMemo } from "react";
import { destinationReducer,initialDestinations } from "../redux/destinationReducer"
import { FaPlus } from "react-icons/fa";
import DestinationCard from "../components/DestinationCard";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";



const Destionation =()=>{
  const [destinations]= useReducer(destinationReducer,initialDestinations);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

    const filteredDestinations = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return destinations.filter(dest =>
      dest.name.toLowerCase().includes(q)
    );
  }, [destinations, searchQuery]);
  return(
    <div className ="p-6 bg-[#f6f8fc] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <SearchBar onSearch={setSearchQuery} />
        <button 
          onClick={() => navigate('/destination/new')}
          className="bg-[#004d40] text-white px-5 py-2 rounded-full hover:bg-[#00332c] transition"
        >
          <FaPlus className="inline mr-2" /> New Destination
        </button>
      </div>


       {filteredDestinations.length === 0 ? (
        <p className="text-gray-500 text-center">No destinations found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredDestinations.map((dest, index) => (
            <DestinationCard
              key={index}
              name={dest.name}
              image={dest.image}
              onClick={() => navigate(`/destination/${dest.id}`)}
            />
          ))}
        </div>
      )}

    </div>
  )
}
export default  Destionation;

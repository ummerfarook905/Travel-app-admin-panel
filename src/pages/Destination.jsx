import { useReducer } from "react"
import { destinationReducer,initialDestinations } from "../redux/destinationReducer"
import { FaPlus } from "react-icons/fa";
import DestinationCard from "../components/DestinationCard";



const Destionation =()=>{
  const [destinations]= useReducer(destinationReducer,initialDestinations);

  return(
    <div className ="p-6 bg-[#f6f8fc] min-h-screen">
      <div className ="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Destinations</h1>
        <button className="bg-[#004d40] text-white px-5 py-2 rounded-full hover:bg-[#00332c] transition">
        <FaPlus className="inline mr-2" /> New Destination

        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {destinations.map((dest,index)=>(
          <DestinationCard key={index} name={dest.name} image={dest.image}/>
        ))}

      </div>
    </div>
  )
}
export default  Destionation;
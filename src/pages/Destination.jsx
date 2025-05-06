import DestinationGrid from "../components/DestinationGrid"
import { DestinationsProvider } from "../context/DestinationsContext";
const Destination =()=>{
    return(
        <div className="flex flex-col w-full">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Destinations</h1>
        <input
          type="text"
          placeholder="Search here..."
          className="border p-2 rounded-md w-60"
        />
        <button className="bg-green-700 text-white px-4 py-2 rounded-md">
          + New Destination
        </button>
      </div>
      <DestinationsProvider>
      <DestinationGrid />
      </DestinationsProvider>
   
    </div>
    )
}
export default Destination;

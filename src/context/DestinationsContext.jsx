import React, { createContext, useContext, useState } from "react";
import munnarImg from "../assets/Images/Destination/Munnar.jpg"
// import goaImg from "../assets/images/destination/goa.jpg";
// import cheraiImg from "../assets/images/destination/cherai.jpg";
// import kumarakomImg from "../assets/images/destinations/umarakom.jpg";

// import neyyrImg from "../assets/images/destination/neyyar.jpg";
// import vypinImg from "../assets/images/destination/vypin.jpg";
// import madayiparaImg from "../assets/images/destination/madayipara.jpg";


// Mock destination data
const mockDestinations = [
  { id: 1, name: "Munnar", image: munnarImg },
   
//   { id: 2, name: "Goa", image: goaImg },
//   { id: 3, name: "Cherai Beach", image: cheraiImg },
//   { id: 4, name: "Kumarakom", image: kumarakomImg },
//   { id: 5, name: "Neyyar Reservoir", image: neyyrImg },
//   { id: 6, name: "Vypin Island", image: vypinImg },
//   { id: 7, name: "Madayipara", image: madayiparaImg },
];

// Create the context
const DestinationsContext = createContext();

// Custom hook to use the context
export const useDestinations = () => useContext(DestinationsContext);

// Context provider component
export const DestinationsProvider = ({ Children})=> {
  const [destinations, setDestinations] = useState(mockDestinations);

  const addDestination = (newDest) => {
    setDestinations((prev) => [...prev, newDest]);
  };

  const value = { destinations, addDestination };

  return (
    <DestinationsContext.Provider value={value}>
      {Children}
    </DestinationsContext.Provider>
  );
};

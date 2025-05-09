import { createContext } from "react";
import { destinationReducer, initialDestinations } from "../redux/destinationReducer";
import { Children } from "react";
import { use } from "react";

const DestinationContext =createContext();

export const DestinationProvider = ({ children})=>{

const[Destinations,dispatch]=useReducer(destinationReducer,initialDestinations)

return(
    <DestinationContext.Provider value ={{ Destinations, dispatch}}>
        {Children}

    </DestinationContext.Provider>
)
}

export const useDestinations = ()=>useContext(DestinationContext);
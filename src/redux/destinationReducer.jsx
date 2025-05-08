import munnar from "../assets/Images/Destination/Munnar.jpg"
import beach from "../assets/Images/Destination/Beach.jpg"
import goa from "../assets/Images/Destination/Goa.jpg"
import madayipara from "../assets/Images/Destination/madayipara.jpeg"
import vypin from "../assets/Images/Destination/vypin.jpg"


export const initialDestinations =[
  {name:"Munnar",image:munnar},
  {name:" Cherai Beach",image:beach},
  {name:"Goa",image:goa},
  {name:"Madayipara",image:madayipara},
  {name:"Vypin Beach",image:vypin}
]
export const destinationReducer =(state,action)=>{
    switch(action.type){
        case "ADD_DESTINATION":
            return[...state,action.payload]; 
        case "REMOVE_DESTINATION":
            
    return state.filter((_,idx )=>idx !==action.payload);
    case "SET_DESTINATIONS":
        return action.payload;
        default:
            return state;


    }
}
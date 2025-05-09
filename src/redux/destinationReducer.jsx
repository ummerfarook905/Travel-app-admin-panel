import munnar from "../assets/Images/Destination/Munnar.jpg"
import beach from "../assets/Images/Destination/Beach.jpg"
import goa from "../assets/Images/Destination/Goa.jpg"
import madayipara from "../assets/Images/Destination/madayipara.jpeg"
import vypin from "../assets/Images/Destination/vypin.jpg"
// import neyyar from "../assets/Images/Destination/Neyyar.jpeg"


export const initialDestinations = [
    {
        id: "1",
        name: "Munnar",
        image: munnar,
        location: "Idukki, Kerala",
        description: "Munnar is a hill station famous for its tea gardens and picturesque landscapes.",
        mapImage: "/assets/Images/Destination/map.jpg",
        images: [
        //   "/assets/Images/Destination/munnar1.jpg",
        //   "/assets/Images/Destination/munnar2.jpg",
        //   "/assets/Images/Destination/munnar3.jpg",
        ],
        reviews: [
          {
            user: "Anjali Kumar",
            comment: "A peaceful place to relax and enjoy nature.",
            rating: 4.8,
          },
        ],
      },
      {
        id: "2",
        name: "Cherai Beach",
        image: beach ,
        location: "Cherai, Kochi, Kerala",
        description: "Cherai Beach is known for its beautiful golden sand and serene waters.",
        mapImage: "/assets/Images/Destination/map.jpg",
        images: [
          "/assets/Images/Destination/cherai1.jpg",
          "/assets/Images/Destination/cherai2.jpg",
          "/assets/Images/Destination/cherai3.jpg",
        ],
        reviews: [
          {
            user: "Ravi Singh",
            comment: "Ideal place for a peaceful beach vacation.",
            rating: 4.5,
          },
        ],
      },
      {
        id: "3",
        name: "Goa",
        image: goa,
        location: "Goa, India",
        description: "Goa is famous for its vibrant beaches, Portuguese culture, and amazing nightlife.",
        mapImage: "/assets/Images/Destination/map.jpg",
        images: [
          "/assets/Images/Destination/goa1.jpg",
          "/assets/Images/Destination/goa2.jpg",
          "/assets/Images/Destination/goa3.jpg",
        ],
        reviews: [
          {
            user: "Priya Verma",
            comment: "Goa is perfect for both relaxation and adventure!",
            rating: 4.7,
          },
        ],
      },
      {
        id: "4",
        name: "Madayipara",
        image: madayipara,
        location: "Idukki, Kerala",
        description: "Madayipara is a hilltop offering breathtaking views of the surrounding valleys and lakes.",
        mapImage: "/assets/Images/Destination/map.jpg",
        images: [
          "/assets/Images/Destination/madayipara1.jpg",
          "/assets/Images/Destination/madayipara2.jpg",
        ],
        reviews: [
          {
            user: "Suresh Nair",
            comment: "A hidden gem, perfect for trekking and nature lovers.",
            rating: 4.6,
          },
        ],
      },
      {
        id: "5",
        name: "Vypin Beach",
        image: vypin,
        location: "Vypin Island, Kochi, Kerala",
        description: "Vypin Beach is a quiet and lesser-known beach with clean sand and beautiful sunsets.",
        mapImage: "/assets/Images/Destination/map.jpg",
        images: [
          "/assets/Images/Destination/vypin1.jpg",
          "/assets/Images/Destination/vypin2.jpg",
        ],
        reviews: [
          {
            user: "Alok Rathi",
            comment: "A serene place to relax by the sea.",
            rating: 4.2,
          },
        ],
      },
    //   {
    //     id: "6",
    //     name: "Neyyar Reservoir",
    //     image: neyyar,
    //     location: "Vazhichal, Trivandrum, Kerala",
    //     description: "Neyyar Reservoir is a scenic spot known for boating and wildlife.",
    //     mapImage: "/assets/Images/Destination/map.jpg",
    //     images: [
    //       "/assets/Images/Destination/neyyar1.jpg",
    //       "/assets/Images/Destination/neyyar2.jpg",
    //       "/assets/Images/Destination/neyyar3.jpg",
    //       "/assets/Images/Destination/neyyar4.jpg",
    //     ],
    //     reviews: [
    //       {
    //         user: "Sri Ananaya",
    //         comment: "Beautiful and serene place!",
    //         rating: 4.5,
    //       },
    //     ],
      
    // },
    // Add more destinations if needed
  ];
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
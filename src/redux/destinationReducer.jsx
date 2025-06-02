import { DESTINATION_IMAGES } from "../Constants/images";

export const initialDestinations = [
  {
    id: "1",
    name: "Munnar",
    image: DESTINATION_IMAGES.munnar,
    location: "Idukki, Kerala",
    coordinates: [10.0889, 77.0595],
    description: "Munnar is a hill station famous for its tea gardens and picturesque landscapes.",
    coverImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [DESTINATION_IMAGES.munnar,DESTINATION_IMAGES.munnar,DESTINATION_IMAGES.munnar,DESTINATION_IMAGES.munnar,DESTINATION_IMAGES.munnar],
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
    image: DESTINATION_IMAGES.beach,
    location: "Cherai, Kochi, Kerala",
    coordinates: [10.1592, 76.1801],
    description: "Cherai Beach is known for its beautiful golden sand and serene waters.",
    coverImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    images: [DESTINATION_IMAGES.beach,DESTINATION_IMAGES.beach,DESTINATION_IMAGES.beach,DESTINATION_IMAGES.beach,DESTINATION_IMAGES.beach],
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
    image: DESTINATION_IMAGES.goa,
    location: "Goa, India",
    coordinates: [15.2993, 74.1240],
    description: "Goa is famous for its vibrant beaches, Portuguese culture, and amazing nightlife.",
    images: [DESTINATION_IMAGES.goa],
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
    image: DESTINATION_IMAGES.madayipara,
    location: "Idukki, Kerala",
    coordinates: [12.0805, 75.2775],
    description: "Madayipara is a hilltop offering breathtaking views of the surrounding valleys and lakes.",
    images: [DESTINATION_IMAGES.madayipara],
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
    image: DESTINATION_IMAGES.vypin,
    location: "Vypin Island, Kochi, Kerala",
    description: "Vypin Beach is a quiet and lesser-known beach with clean sand and beautiful sunsets.",
    images: [DESTINATION_IMAGES.vypin,DESTINATION_IMAGES.vypin,DESTINATION_IMAGES.vypin,DESTINATION_IMAGES.vypin,DESTINATION_IMAGES.vypin],
    reviews: [
      {
        user: "Alok Rathi",
        comment: "A serene place to relax by the sea.",
        rating: 4.2,
      },
    ],
  },
];

export const destinationReducer = (state, action) => {
  switch(action.type) {
    case "ADD_DESTINATION":
      return [...state, action.payload];
    case "REMOVE_DESTINATION":
      return state.filter((_, idx) => idx !== action.payload);
    case "SET_DESTINATIONS":
      return action.payload;
    default:
      return state;
  }
};
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pending: [
    {
        name: 'Kayaking',
        id: '#ADV12345',
        joined: 'March 25, 2021',
        updated: 'March 28, 2021',
        location: 'Lake Tahoe, California',
        phone: '+1 234 567 890',
        email: 'kayaking@example.com',
        username: 'kayakPro',
        description: `Explore the crystal-clear waters of Lake Tahoe with expert kayaking guides.
    Experience the serene beauty of the surrounding mountains while paddling in calm waters.
    Perfect for both beginners and seasoned adventurers seeking outdoor thrills.`,
        price: '45',
        coverImage: "https://images.unsplash.com/photo-1501785888041-af3e28568cce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        
        // mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Lake+Tahoe,CA&zoom=12&size=600x400&maptype=terrain&markers=color:red%7CLake+Tahoe,CA&key=YOUR_API_KEY",
        images: [
           "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
           "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
         "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
         "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
           "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        ]
      },
      {
        name: 'Paragliding',
        id: '#ADV67890',
        joined: 'April 10, 2021',
        updated: 'April 15, 2021',
        location: 'Varkala, Kerala',
        phone: '+91 98765 43210',
        email: 'paraglide@adventure.com',
        username: 'skyRider',
        description: `Fly high above the coast of Varkala and enjoy an adrenaline rush like no other!
    Capture stunning aerial views of the Arabian Sea as you glide over scenic cliffs.
    Our certified instructors ensure a safe and thrilling paragliding experience.`,
        price: '60',
        coverImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Varkala,Kerala&zoom=12&size=600x400&maptype=terrain&markers=color:red%7CVarkala,Kerala&key=YOUR_API_KEY",
        images: [
          "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1505228395891-9a51e5e8bf86?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1504609773096-104ff2c73ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
        ]
      },
      {
        name: 'Mountain Hiking',
        id: '#ADV24680',
        joined: 'May 5, 2021',
        updated: 'May 10, 2021',
        location: 'Swiss Alps, Switzerland',
        phone: '+41 123 456 789',
        email: 'hiking@alps.com',
        username: 'alpineExplorer',
        description: `Challenging hikes through breathtaking alpine landscapes with experienced guides.
    Discover hidden trails, glacial valleys, and panoramic mountain views along the way.
    An unforgettable journey for nature lovers and adventure seekers alike.`,
        price: '75',
        coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Swiss+Alps&zoom=8&size=600x400&maptype=terrain&markers=color:red%7CSwiss+Alps&key=YOUR_API_KEY",
        images: [
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
        ]
      },{
        name: 'Desert Safari Adventure',
        id: '#ADV13579',
        joined: 'March 12, 2022',
        updated: 'March 18, 2022',
        location: 'Dubai Desert, UAE',
        phone: '+971 50 123 4567',
        email: 'safari@desertadventures.ae',
        username: 'duneRider',
        description: `Experience the thrill of a desert safari with dune bashing, camel rides, and traditional Bedouin hospitality.
      Enjoy cultural performances and stargazing in the vast desert under a clear night sky.`,
        price: '90',
        coverImage: "https://images.unsplash.com/photo-1549887534-ec58fdd6d8d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Dubai+Desert&zoom=8&size=600x400&maptype=terrain&markers=color:red%7CDubai+Desert&key=YOUR_API_KEY",
        images: [
          "https://images.unsplash.com/photo-1581320543617-6480df1b6971?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1602774947641-5e40e719d76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1577621459711-6b0d0dc34b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
        ]
      },
      {
        name: 'Rainforest Expedition',
        id: '#ADV35791',
        joined: 'August 8, 2023',
        updated: 'August 15, 2023',
        location: 'Amazon Rainforest, Brazil',
        phone: '+55 21 98765 4321',
        email: 'expedition@amazonexplore.com',
        username: 'jungleTrekker',
        description: `Immerse yourself in the heart of the Amazon rainforest.
      Explore vibrant flora and fauna, cruise along rivers, and engage with local tribes while learning about their sustainable ways of life.`,
        price: '120',
        coverImage: "https://images.unsplash.com/photo-1591221798654-d41d3be9789b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Amazon+Rainforest&zoom=6&size=600x400&maptype=terrain&markers=color:red%7CAmazon+Rainforest&key=YOUR_API_KEY",
        images: [
          "https://images.unsplash.com/photo-1591221798654-d41d3be9789b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1559582794-97a2c6c9c1d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
        ]
      }
      
      
    // ... other pending adventures
  ],
  verified: [
    {
      name: 'Northern Lights Tour',
      id: '#ADV86420',
      joined: 'December 1, 2021',
      updated: 'December 10, 2021',
      location: 'Tromsø, Norway',
      phone: '+47 923 456 789',
      email: 'lights@auroratours.no',
      username: 'auroraChaser',
      description: `Witness the magical aurora borealis in the Arctic sky.
        Join expert-led tours to the best viewing spots, complete with warm gear, hot drinks, and unforgettable photography opportunities.`,
      price: '110',
      coverImage: "https://images.unsplash.com/photo-1505483531331-82f6d93f0f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Tromsø,Norway&zoom=8&size=600x400&maptype=terrain&markers=color:red%7CTromsø&key=YOUR_API_KEY",
      images: [
        "https://images.unsplash.com/photo-1505483531331-82f6d93f0f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1601831954250-b93ac0c2b7ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1505483531331-82f6d93f0f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1601831954250-b93ac0c2b7ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      ]
    }
  ],
  bookings: [
    {
      id: 'book#1',
      adventureId: '#ADV12345',
      adventureName: 'Kayaking',
      userName: 'Alex Johnson',
      userEmail: 'alex@example.com',
      checkIn: '2023-06-15',
      checkOut: '2023-06-17',
      price: 135,
      status: 'confirmed',
      guests: 2
    },
    {
      id: 'book#2',
      adventureId: '#ADV12346',
      adventureName: 'Mountain Hiking',
      userName: 'Sarah Lee',
      userEmail: 'sarah@example.com',
      checkIn: '2023-07-10',
      checkOut: '2023-07-12',
      price: 200,
      status: 'pending',
      guests: 4
    },
    {
      id: 'book#3',
      adventureId: '#ADV12347',
      adventureName: 'Scuba Diving',
      userName: 'John Smith',
      userEmail: 'john@example.com',
      checkIn: '2023-08-05',
      checkOut: '2023-08-07',
      price: 250,
      status: 'confirmed',
      guests: 1
    },
    {
      id: 'book#4',
      adventureId: '#ADV12348',
      adventureName: 'Safari Tour',
      userName: 'Emily Davis',
      userEmail: 'emily@example.com',
      checkIn: '2023-09-20',
      checkOut: '2023-09-22',
      price: 300,
      status: 'cancelled',
      guests: 3
    }
    // ... other initial bookings (same as your context)
  ]
};

const adventuresSlice = createSlice({
  name: 'adventures',
  initialState,
  reducers: {
    approveAdventure: (state, action) => {
      const adventure = state.pending.find(a => a.id === action.payload.id);
      if (adventure) {
        state.pending = state.pending.filter(a => a.id !== action.payload.id);
        state.verified.push({ ...adventure, status: 'Active' });
      }
    },
    rejectAdventure: (state, action) => {
      state.pending = state.pending.filter(a => a.id !== action.payload.id);
    },
    deactivateAdventure: (state, action) => {
      const adventure = state.verified.find(a => a.id === action.payload.id);
      if (adventure) {
        adventure.status = 'Inactive';
      }
    },
    activateAdventure: (state, action) => {
      const adventure = state.verified.find(a => a.id === action.payload.id);
      if (adventure) {
        adventure.status = 'Active';
      }
    },
    deleteAdventure: (state, action) => {
      state.verified = state.verified.filter(a => a.id !== action.payload.id);
    },
    cancelBooking: (state, action) => {
      const booking = state.bookings.find(b => b.id === action.payload.id);
      if (booking) {
        booking.status = 'cancelled';
      }
    },
    confirmBooking: (state, action) => {
      const booking = state.bookings.find(b => b.id === action.payload.id);
      if (booking) {
        booking.status = 'confirmed';
      }
    },
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(b => b.id !== action.payload.id);
    }
  }
});

export const {
  approveAdventure,
  rejectAdventure,
  deactivateAdventure,
  activateAdventure,
  deleteAdventure,
  cancelBooking,
  confirmBooking,
  deleteBooking
} = adventuresSlice.actions;

export default adventuresSlice.reducer;
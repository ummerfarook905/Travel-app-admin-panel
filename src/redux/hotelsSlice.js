// Updated hotelsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pending: [
    {
      name: 'Grand Paradise Resort',
      id: '#HTL12345',
      joined: 'January 15, 2021',
      updated: 'January 20, 2021',
      location: 'Maldives',
      phone: '+960 123 4567',
      email: 'info@grandparadise.com',
      username: 'paradiseAdmin',
      description: `Luxury overwater bungalows with private pools and direct ocean access. 
      Experience world-class service, gourmet dining, and pristine white sand beaches. 
      Perfect for honeymoons and romantic getaways.`,
      price: '450',
      rating: 4.8,
      amenities: ['Pool', 'Spa', 'Beachfront', 'Restaurant', 'Free WiFi'],
      rooms: 120,
      coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Maldives&zoom=10&size=600x400&maptype=terrain&markers=color:red%7CMaldives&key=YOUR_API_KEY",
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      ]
    },
    {
      name: 'Mountain Peak Lodge',
      id: '#HTL67890',
      joined: 'February 5, 2021',
      updated: 'February 10, 2021',
      location: 'Swiss Alps, Switzerland',
      phone: '+41 123 456 789',
      email: 'stay@mountainpeak.com',
      username: 'alpineHost',
      description: `Charming alpine lodge with panoramic mountain views. 
      Cozy fireplaces, ski-in/ski-out access, and gourmet Swiss cuisine. 
      Ideal for winter sports enthusiasts and nature lovers.`,
      price: '320',
      rating: 4.6,
      amenities: ['Ski Access', 'Spa', 'Restaurant', 'Free WiFi', 'Fireplace'],
      rooms: 45,
      coverImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Swiss+Alps&zoom=8&size=600x400&maptype=terrain&markers=color:red%7CSwiss+Alps&key=YOUR_API_KEY",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      ]
    }
  ],
  verified: [
    {
      name: 'Urban Oasis Hotel',
      id: '#HTL24680',
      joined: 'March 1, 2021',
      updated: 'March 5, 2021',
      location: 'New York, USA',
      phone: '+1 212 555 1234',
      email: 'reservations@urbanoasis.com',
      username: 'oasisManager',
      description: `Modern luxury in the heart of Manhattan. 
      Rooftop pool with city views, gourmet dining, and spacious suites. 
      Steps away from Broadway, Central Park, and top attractions.`,
      price: '380',
      rating: 4.7,
      amenities: ['Rooftop Pool', 'Fitness Center', 'Restaurant', 'Bar', 'Free WiFi'],
      rooms: 200,
      coverImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=12&size=600x400&maptype=terrain&markers=color:red%7CNew+York&key=YOUR_API_KEY",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
      ]
    }
  ],
  
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    approveHotel: (state, action) => {
      const hotel = state.pending.find(h => h.id === action.payload.id);
      if (hotel) {
        state.pending = state.pending.filter(h => h.id !== action.payload.id);
        state.verified.push(hotel);
      }
    },
    rejectHotel: (state, action) => {
      state.pending = state.pending.filter(h => h.id !== action.payload.id);
    },
    deleteHotel: (state, action) => {
      state.verified = state.verified.filter(h => h.id !== action.payload.id);
    },

    addRoom: (state, action) => {
      const hotel = state.verified.find(h => h.id === action.payload.hotelId);
      if (hotel) {
        hotel.rooms += action.payload.quantity;
      }
    },
    updateHotelInfo: (state, action) => {
      const hotel = state.verified.find(h => h.id === action.payload.id);
      if (hotel) {
        Object.assign(hotel, action.payload.updates);
        hotel.updated = new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
    }
  }
});

export const {
  approveHotel,
  rejectHotel,
  deleteHotel,
  cancelBooking,
  confirmBooking,
  deleteBooking,
  addRoom,
  updateHotelInfo
} = hotelsSlice.actions;

export default hotelsSlice.reducer;
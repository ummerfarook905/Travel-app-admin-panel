// // Updated hotelsSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// import { HOTEL_IMAGES } from '../Constants/images';
// import { createAsyncThunk } from '@reduxjs/toolkit';


// // ✅ ADDED: Async thunk for deleting a hotel
// export const deleteHotelAsync = createAsyncThunk(
//   'hotels/deleteHotelAsync',
//   async ({ id }, thunkAPI) => {
//     try {
//       const response = await fetch(`/api/hotels/${id.replace('#', '')}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete hotel');
//       }

//       return { id }; // ✅ Used in extraReducers to update Redux state
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// const initialState = {
//   pending: [
//     {
//       name: 'Grand Paradise Resort',
//       id: '#HTL12345',
//       joined: 'January 15, 2021',
//       updated: 'January 20, 2021',
//       location: 'Maldives',
//       phone: '+960 123 4567',
//       email: 'info@grandparadise.com',
//       username: 'paradiseAdmin',
//       description: `Luxury overwater bungalows with private pools and direct ocean access. 
//       Experience world-class service, gourmet dining, and pristine white sand beaches. 
//       Perfect for honeymoons and romantic getaways.`,
//       price: '450',
//       rating: 4.8,
//       amenities: ['Pool', 'Spa', 'Beachfront', 'Restaurant', 'Free WiFi'],
//       rooms: 120,
//       coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Maldives&zoom=10&size=600x400&maptype=terrain&markers=color:red%7CMaldives&key=YOUR_API_KEY",
//       images: [
//         HOTEL_IMAGES.hotel,
//         HOTEL_IMAGES.hotel2,
      
//       ]
//     },
//     {
//       name: 'Mountain Peak Lodge',
//       id: '#HTL67890',
//       joined: 'February 5, 2021',
//       updated: 'February 10, 2021',
//       location: 'Swiss Alps, Switzerland',
//       phone: '+41 123 456 789',
//       email: 'stay@mountainpeak.com',
//       username: 'alpineHost',
//       description: `Charming alpine lodge with panoramic mountain views. 
//       Cozy fireplaces, ski-in/ski-out access, and gourmet Swiss cuisine. 
//       Ideal for winter sports enthusiasts and nature lovers.`,
//       price: '320',
//       rating: 4.6,
//       amenities: ['Ski Access', 'Spa', 'Restaurant', 'Free WiFi', 'Fireplace'],
//       rooms: 45,
//       coverImage: HOTEL_IMAGES.hotel,
//       mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=Swiss+Alps&zoom=8&size=600x400&maptype=terrain&markers=color:red%7CSwiss+Alps&key=YOUR_API_KEY",
//       images: [
       
//         HOTEL_IMAGES.hotel,
//         HOTEL_IMAGES.hotel2,
//       ]
//     }
//   ],
//   verified: [
//     {
//       name: 'Urban Oasis Hotel',
//       id: '#HTL24680',
//       joined: 'March 1, 2021',
//       updated: 'March 5, 2021',
//       location: 'New York, USA',
//       phone: '+1 212 555 1234',
//       email: 'reservations@urbanoasis.com',
//       username: 'oasisManager',
//       description: `Modern luxury in the heart of Manhattan. 
//       Rooftop pool with city views, gourmet dining, and spacious suites. 
//       Steps away from Broadway, Central Park, and top attractions.`,
//       price: '380',
//       rating: 4.7,
//       amenities: ['Rooftop Pool', 'Fitness Center', 'Restaurant', 'Bar', 'Free WiFi'],
//       rooms: 200,
//       coverImage: HOTEL_IMAGES.hotel2,
//       // mapImage: "https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=12&size=600x400&maptype=terrain&markers=color:red%7CNew+York&key=YOUR_API_KEY",
//       images: [
//         HOTEL_IMAGES.hotel,
//         HOTEL_IMAGES.hotel2,
//       ]
//     }
//   ],
  
// };

// const hotelsSlice = createSlice({
//   name: 'hotels',
//   initialState,
//   reducers: {
//     approveHotel: (state, action) => {
//       const hotel = state.pending.find(h => h.id === action.payload.id);
//       if (hotel) {
//         state.pending = state.pending.filter(h => h.id !== action.payload.id);
//         state.verified.push(hotel);
//       }
//     },
//     rejectHotel: (state, action) => {
//       state.pending = state.pending.filter(h => h.id !== action.payload.id);
//     },
//     deleteHotel: (state, action) => {
//       state.verified = state.verified.filter(h => h.id !== action.payload.id);
//     },

//     addRoom: (state, action) => {
//       const hotel = state.verified.find(h => h.id === action.payload.hotelId);
//       if (hotel) {
//         hotel.rooms += action.payload.quantity;
//       }
//     },
//     updateHotelInfo: (state, action) => {
//       const hotel = state.verified.find(h => h.id === action.payload.id);
//       if (hotel) {
//         Object.assign(hotel, action.payload.updates);
//         hotel.updated = new Date().toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         });
//       }
//     },
//             updateHotel: (state, action) => {
//       const { id, updatedData } = action.payload;
//       // Update in pending adventures
//       const pendingIndex = state.pending.findIndex(a => a.id === id);
//       if (pendingIndex !== -1) {
//         state.pending[pendingIndex] = { 
//           ...state.pending[pendingIndex], 
//           ...updatedData 
//         };
//       }
//       // Update in verified adventures
//       const verifiedIndex = state.verified.findIndex(a => a.id === id);
//       if (verifiedIndex !== -1) {
//         state.verified[verifiedIndex] = { 
//           ...state.verified[verifiedIndex], 
//           ...updatedData 
//         };
//       }
//     },
//   }
// });
//  // ✅ ADDED: Handle async thunk result
//   extraReducers: (builder) => {
//     builder.addCase(deleteHotelAsync.fulfilled, (state, action) => {
//       state.verified = state.verified.filter(h => h.id !== action.payload.id);
//     });
//   }


// export const {
//   approveHotel,
//   rejectHotel,
//   deleteHotel,
//   cancelBooking,
//   confirmBooking,
//   deleteBooking,
//   addRoom,
//   updateHotel,
//   updateHotelInfo
// } = hotelsSlice.actions;

// export default hotelsSlice.reducer;




import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "https://759842bf-625b-4075-a472-726abeeab20e.mock.pstmn.io/hotels";

// ✅ ADDED: Async thunk for deleting a hotel
export const fetchHotelsAsync = createAsyncThunk(
  'hotels/fetchHotelsAsync',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch hotels');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHotelAsync = createAsyncThunk(
  'hotels/deleteHotelAsync',
  async ({ id }, thunkAPI) => {
    try {
      const response = await fetch(`/api/hotels/${id.replace('#', '')}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete hotel');
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
  pending: [],
  verified: [],
  status: 'idle',
  error: null,
  },
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
    },
      updateHotel: (state, action) => {
      const { id, updatedData } = action.payload;
      // Update in pending hotels
      const pendingIndex = state.pending.findIndex(h => h.id === id);
      if (pendingIndex !== -1) {
        state.pending[pendingIndex] = { 
          ...state.pending[pendingIndex], 
          ...updatedData 
        };
      }
      // Update in verified hotels
      const verifiedIndex = state.verified.findIndex(h => h.id === id);
      if (verifiedIndex !== -1) {
        state.verified[verifiedIndex] = { 
          ...state.verified[verifiedIndex], 
          ...updatedData 
        };
      }
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(deleteHotelAsync.fulfilled, (state, action) => {
      state.verified = state.verified.filter(h => h.id !== action.payload.id);
    })
    .addCase(fetchHotelsAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchHotelsAsync.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.pending = action.payload.pending || [];
      state.verified = action.payload.verified || [];
    })
    .addCase(fetchHotelsAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
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
  updateHotel,
  updateHotelInfo
} = hotelsSlice.actions;

export default hotelsSlice.reducer;





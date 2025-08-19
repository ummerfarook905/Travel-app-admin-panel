

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ADVENTURE_IMAGES } from '../Constants/images';

// ✅ Fetch pending adventures from Postman mock server
export const fetchPendingAdventures = createAsyncThunk(
  'adventures/fetchPendingAdventures',
  async () => {
    const response = await fetch('https://cea5f969-06fa-48ac-a3b5-3d3fc06c84e4.mock.pstmn.io/pending-adventures');
    const data = await response.json();
    console.log(data);
    
    return data.map(item => ({
      ...item,
      coverImage: ADVENTURE_IMAGES[item.imageKey] || item.coverImage,
      images: item.imageKeys?.map(key => ADVENTURE_IMAGES[key]) || []
    }));
  }
);

// ✅ Fetch verified adventures from Postman mock server
export const fetchVerifiedAdventures = createAsyncThunk(
  'adventures/fetchVerifiedAdventures',
  async () => {
    const response = await fetch('https://cea5f969-06fa-48ac-a3b5-3d3fc06c84e4.mock.pstmn.io/verified-adventures');
    const data = await response.json();
    return data.map(item => ({
      ...item,
      coverImage: ADVENTURE_IMAGES[item.imageKey] || item.coverImage,
      images: item.imageKeys?.map(key => ADVENTURE_IMAGES[key]) || []
    }));
  }
);



export const fetchAdventureBookings = createAsyncThunk(
  'adventures/fetchAdventureBookings',
  async () => {
    console.log("FETCHING ADVENTURE BOOKINGS…");
    const response = await fetch('https://cea5f969-06fa-48ac-a3b5-3d3fc06c84e4.mock.pstmn.io/advenutres-booking');
    const data = await response.json();

    
    console.log("API Response:", data);
    
    return data.map(item => ({  
      ...item,
      type: "adventure" // ✅ Add this so filtering works
    }));
  }
);




// ✅ Initial state
const initialState = {
  pending: [],
  verified: [],
  bookings: [],
  loading: false,
  error: null
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
      const adv = state.verified.find(a => a.id === action.payload.id);
      if (adv) adv.status = 'Inactive';
    },
    activateAdventure: (state, action) => {
      const adv = state.verified.find(a => a.id === action.payload.id);
      if (adv) adv.status = 'Active';
    },
    deleteAdventure: (state, action) => {
      state.verified = state.verified.filter(a => a.id !== action.payload.id);
    },
    cancelBooking: (state, action) => {
      const booking = state.bookings.find(b => b.bookingId === action.payload.id);
      if (booking) booking.status = 'cancelled';
    },
    confirmBooking: (state, action) => {
      const booking = state.bookings.find(b => b.bookingId === action.payload.id);
      if (booking) booking.status = 'confirmed';
    },
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(b => b.bookingId !== action.payload.id);
    },
    updateAdventure: (state, action) => {
      const { id, updatedData } = action.payload;
      const update = (list) => {
        const index = list.findIndex(a => a.id === id);
        if (index !== -1) {
          list[index] = { ...list[index], ...updatedData };
        }
      };
      update(state.pending);
      update(state.verified);
    }
  },
  extraReducers: (builder) => {
    builder
      // Pending
      .addCase(fetchPendingAdventures.fulfilled, (state, action) => {
        state.pending = action.payload;
      })

      // Verified
      .addCase(fetchVerifiedAdventures.fulfilled, (state, action) => {
        state.verified = action.payload;
      })

      // Bookings
      .addCase(fetchAdventureBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdventureBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.loading = false;
      })
      .addCase(fetchAdventureBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// ✅ Export actions
export const {
  approveAdventure,
  rejectAdventure,
  deactivateAdventure,
  activateAdventure,
  deleteAdventure,
  cancelBooking,
  confirmBooking,
  deleteBooking,
  updateAdventure
} = adventuresSlice.actions;

// ✅ Export reducer
export default adventuresSlice.reducer;

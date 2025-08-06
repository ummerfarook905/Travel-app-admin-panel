import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const destinationSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    addDestination: (state, action) => {
      state.push(action.payload);
    },
    removeDestination: (state, action) => {
      return state.filter(dest => dest.id !== action.payload);
    },
    setDestinations: (state, action) => {
      return action.payload;
    },
    updateDestination: (state, action) => {
      const index = state.findIndex(dest => dest.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    }
  }
});

// 🟢 Export actions
export const {
  addDestination,
  removeDestination,
  setDestinations,
  updateDestination
} = destinationSlice.actions;

// 🔵 Export reducer
export default destinationSlice.reducer;

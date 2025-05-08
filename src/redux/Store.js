import { configureStore } from '@reduxjs/toolkit';
import adventuresReducer from './adventuresSlice';
import hotelsReducer from './hotelsSlice';
import bookingReducer from "./bookingsSlice"; // Add this

export const store = configureStore({
  reducer: {
    adventures: adventuresReducer,
    hotels : hotelsReducer,
    booking : bookingReducer,

  }
});
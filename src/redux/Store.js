import { configureStore } from '@reduxjs/toolkit';
import adventuresReducer from './adventuresSlice';
import hotelsReducer from './hotelsSlice';
import bookingReducer from "./bookingsSlice"; 
import usersReducer from './userSlice'; 
export const store = configureStore({
  reducer: {
    adventures: adventuresReducer,
    hotels : hotelsReducer,
    booking : bookingReducer,
    users:usersReducer, // Ensure you have usersReducer imported

  }
});
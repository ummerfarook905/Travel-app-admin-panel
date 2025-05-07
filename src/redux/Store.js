import { configureStore } from '@reduxjs/toolkit';
import adventuresReducer from './adventuresSlice';
import hotelsReducer from './hotelsSlice';
export const store = configureStore({
  reducer: {
    adventures: adventuresReducer,
    hotels : hotelsReducer
  }
});
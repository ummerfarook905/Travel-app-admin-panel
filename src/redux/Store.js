import { configureStore } from '@reduxjs/toolkit';
import adventuresReducer from './adventuresSlice';

export const store = configureStore({
  reducer: {
    adventures: adventuresReducer
  }
});
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setDestinations } from './destinationSlice';

// Replace with your actual Postman mock server URL
const DESTINATION_URL = "https://759842bf-625b-4075-a472-726abeeab20e.mock.pstmn.io/api/places";

// Thunk to fetch destinations
export const fetchDestinations = createAsyncThunk(
  'destinations/fetchFromMock',
  async (_, { dispatch }) => {
    const response = await fetch(DESTINATION_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch destinations from mock server');
    }
    const data = await response.json();
    dispatch(setDestinations(data));
    return data;
  }
);

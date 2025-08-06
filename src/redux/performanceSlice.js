import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const API_URL = 'https://759842bf-625b-4075-a472-726abeeab20e.mock.pstmn.io/app-performance';

export const fetchPerformance = createAsyncThunk('performance/fetchPerformance', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const performanceSlice = createSlice({
  name: 'performance',
  initialState: {
    thisWeek: [],
    lastWeek: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerformance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPerformance.fulfilled, (state, action) => {
        state.loading = false;
        state.thisWeek = action.payload.thisWeek;
        state.lastWeek = action.payload.lastWeek;
      })
      .addCase(fetchPerformance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default performanceSlice.reducer;

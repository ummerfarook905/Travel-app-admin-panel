
// import { createSlice } from "@reduxjs/toolkit";
// import { FiUsers, FiMapPin } from "react-icons/fi";
// import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";



// const initialState = {
//   stats: [
//     { title: "Users", value: "932", iconKey: "FiUsers" },
//     { title: "Destinations", value: "754", iconKey: "FiMapPin" },
//     { title: "Hotels", value: "40", iconKey: "FaHotel" },
//     { title: "Adventures", value: "32K", iconKey: "FaUmbrellaBeach" },
//   ],
// };



// const statsSlice = createSlice({
//   name: "stats",
//   initialState, 
//   reducers: {
//     setStats: (state, action) => {
//       state.stats = action.payload;
//     },
//   },
// });

// export const { setStats } = statsSlice.actions;
// export default statsSlice.reducer;






import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk
export const fetchStats = createAsyncThunk('stats/fetchStats', async () => {
  const response = await axios.get('https://a8b00789-ccd3-439b-848d-85c4a830e824.mock.pstmn.io/api/admin/dashboard-stats');
  return response.data.stats;
});

const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    stats: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stats = action.payload;
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default statsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch reviews
export const fetchReviewsAsync = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    const response = await axios.get("https://4e7b561a-4243-4720-ba07-9e9485fa6bd1.mock.pstmn.io/api/admin/reviews");
    return response.data;
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    items: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviewsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchReviewsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default reviewsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    showRightSidebar: false,
    recentData: {
    users: [],
    hotels: [],
    adventures: []
  },
  loading: false
};

const dashboardSlice = createSlice ({
    name: 'dashboard',
    initialState,
    reducers: {
        openRightSidebar: (state) => {
            state.showRightSidebar = true;
        },
        closeRightSidebar: (state) => {
            state.showRightSidebar = false;
        },
        toggleRightSidebar: (state) => {
            state.showRightSidebar = !state.showRightSidebar;
        },
        setRecentData: (state, action) => {
            state.recentData = action.payload;
        },
        setLoading: (state, action) => {
        state.loading = action.payload;
        }
    },
});

export const {openRightSidebar, closeRightSidebar, toggleRightSidebar,setRecentData,
  setLoading} = dashboardSlice.actions;
export default dashboardSlice.reducer;
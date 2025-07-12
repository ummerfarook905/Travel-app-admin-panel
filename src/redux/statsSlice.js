
import { createSlice } from "@reduxjs/toolkit";
import { FiUsers, FiMapPin } from "react-icons/fi";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";

const initialState = {
  stats: [
    { title: "Users", value: "932", icon: FiUsers },
    { title: "Destinations", value: "754", icon: FiMapPin },
    { title: "Hotels", value: "40", icon: FaHotel },
    { title: "Adventures", value: "32K", icon: FaUmbrellaBeach },
  ],
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { setStats } = statsSlice.actions;
export default statsSlice.reducer;

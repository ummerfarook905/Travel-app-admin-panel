
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [
    { id: 1, message: "New booking received", time: "10 mins ago", read: false },
    { id: 2, message: "System update available", time: "1 hour ago", read: false },
  ],
  showNotifications: false,
  showProfileDropdown: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleNotifications: (state) => {
      state.showNotifications = !state.showNotifications;
      state.showProfileDropdown = false;
    },
    toggleProfileDropdown: (state) => {
      state.showProfileDropdown = !state.showProfileDropdown;
      state.showNotifications = false;
    },
    closeAllDropdowns: (state) => {
      state.showNotifications = false;
      state.showProfileDropdown = false;
    },
    markAllAsRead: (state) => {
      state.notifications = state.notifications.map((n) => ({ ...n, read: true }));
      state.showNotifications = false;
    },
  },
});

export const {
  toggleNotifications,
  toggleProfileDropdown,
  closeAllDropdowns,
  markAllAsRead,
} = headerSlice.actions;

export default headerSlice.reducer;

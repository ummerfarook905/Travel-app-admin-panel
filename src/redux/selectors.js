// src/redux/selectors.js
import { createSelector } from "reselect";

const selectBookings = (state) => state.booking.bookings || [];

export const selectConfirmedBookings = createSelector(
  [selectBookings],
  (bookings) => bookings.filter((b) => b.type === 'hotel' && b.status === 'confirmed')
);

export const selectAdventureBookings = createSelector(
  [selectBookings],
  (bookings) => bookings.filter((b) => b.type === 'adventure')
);

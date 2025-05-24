// src/redux/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";


  const initialState = {
    bookings: [
      {
        bookingId: "#12345",
        name: "The Orchid Hotel",
        username : "Maya",
        location: "City Center, Connaught Rd, Pune",
        rating: 5,
        images: [
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          
        ],
        checkIn: "2025-11-12",
        checkOut: "2025-11-14",
        bookedOn: "2025-11-09",
        roomNo: "On Arrival",
        price: 2500,
        guestCount: 1,
        roomCount: 1,
        owner: {
          name: "Owner Name",
          phone: "+91 9867328921",
          photo: "https://i.pravatar.cc/150?u=jenna",
        },
        customer: {
         name: "Leonard",
          email: "leonard@gmail.com",
          phone: "+91 7983529799",
          photo: "https://i.pravatar.cc/150?u=leonard",
        },
      },
      // Add more bookings if needed
    ],
  };


const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    confirmBooking: (state, action) => {
      const booking = state.bookings.find(b => b.bookingId === action.payload.id);
      if (booking) {
        booking.status = "confirmed";
      }
    },
    cancelBooking: (state, action) => {
      const booking = state.bookings.find(b => b.bookingId === action.payload.id);
      if (booking) {
        booking.status = "cancelled";
      }
    },
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    }
  }
});

export const { confirmBooking, cancelBooking, addBooking } = bookingSlice.actions;

export default bookingSlice.reducer;

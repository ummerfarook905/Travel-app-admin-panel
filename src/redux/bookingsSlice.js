// // src/redux/bookingSlice.js
// import { createSlice } from "@reduxjs/toolkit";


//   const initialState = {
//     bookings: [
//       {
//         bookingId: "#12345",
//         type: "hotel",
//         name: "The Orchid Hotel",
//         username : "Maya",
//         location: "City Center, Connaught Rd, Pune",
//         rating: 5,
//         images: [
//           "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
          
//         ],
//         checkIn: "2025-11-12",
//         checkOut: "2025-11-14",
//         bookedOn: "2025-11-09",
//         roomNo: "On Arrival",
//         price: 2500,
//         guestCount: 1,
//         roomCount: 1,
//         owner: {
//           name: "Owner The Orchid Hotel",
//           phone: "+91 9867328921",
//           photo: "https://i.pravatar.cc/150?u=jenna",
//         },
//         customer: {
//          name: "Leonard",
//           email: "leonard@gmail.com",
//           phone: "+91 7983529799",
//           photo: "https://i.pravatar.cc/150?u=leonard",
//         },
//       },{
//           bookingId: "#54321",
//           type: "hotel",
//           name: "Lakeview Resort",
//           username: "Anjali",
//           location: "Nainital Lake, Uttarakhand",
//           rating: 4,
//           images: [
//             "https://images.unsplash.com/photo-1501117716987-c8e7b13e6c8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//             "https://images.unsplash.com/photo-1551776235-dde6d482980f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//             "https://images.unsplash.com/photo-1582719478124-e1c1b8cd5f9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//             "https://images.unsplash.com/photo-1551918120-9739cb43076d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//             "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
//           ],
//           checkIn: "2025-12-20",
//           checkOut: "2025-12-22",
//           bookedOn: "2025-12-15",
//           roomNo: "On Arrival",
//           price: 3200,
//           guestCount: 2,
//           roomCount: 1,
//           owner: {
//             name: "Vikram Singh",
//             phone: "+91 9123456780",
//             photo: "https://i.pravatar.cc/150?u=vikram"
//           },
//           customer: {
//             name: "Anjali Mehra",
//             email: "anjali.mehra@gmail.com",
//             phone: "+91 9087654321",
//             photo: "https://i.pravatar.cc/150?u=anjali"
//           }
//         },{
//           bookingId: "#55432",
//           type: "hotel",
//           name: "Palm Paradise Inn",
//           username: "Rahul",
//           location: "Calangute Beach, Goa",
//           rating: 5,
//           images: [
//             "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//             "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//             "https://images.unsplash.com/photo-1576678927486-df1e06efb3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//             "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//             "https://images.unsplash.com/photo-1604101466608-b9bb0e3b5dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
//           ],
//           checkIn: "2025-12-25",
//           checkOut: "2025-12-28",
//           bookedOn: "2025-12-10",
//           roomNo: "B203",
//           price: 4500,
//           guestCount: 2,
//           roomCount: 1,
//           owner: {
//             name: "Manoj Patil",
//             phone: "+91 9876543200",
//             photo: "https://i.pravatar.cc/150?u=manoj"
//           },
//           customer: {
//             name: "Rahul Verma",
//             email: "rahulv@gmail.com",
//             phone: "+91 9000000001",
//             photo: "https://i.pravatar.cc/150?u=rahul"
//           }
//         }
//         ,

//       {
//       bookingId: "#67890",
//       type: "adventure", // hotel or adventure
//       name: "River Rafting in Rishikesh",
//       username: "Aarav",
//       location: "Rishikesh, Uttarakhand",
//       rating: 4,
//       images: [
//         "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//         "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//         "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//         "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//         "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//       ],
//       checkIn: "2025-12-05",
//       checkOut: "2025-12-05",
//       bookedOn: "2025-11-29",
//       roomNo: null, // not applicable
//       price: 1800,
//       guestCount: 2,
//       roomCount: null, // not applicable
//       status: "pending",
//       owner: {
//         name: "Adventure Host",
//         phone: "+91 9876543210",
//         photo: "https://i.pravatar.cc/150?u=host",
//       },
//       customer: {
//         name: "Ishaan",
//         email: "ishaan@gmail.com",
//         phone: "+91 9911223344",
//         photo: "https://i.pravatar.cc/150?u=ishaan",
//       },
//     },{
//         bookingId: "#67891",
//         type: "adventure",
//         name: "Bungee Jumping at Lonavala",
//         username: "Kabir",
//         location: "Lonavala, Maharashtra",
//         rating: 4,
//         images: [
//           "https://images.unsplash.com/photo-1566576912321-f876d8f05251?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1622396636133-26c8c132f6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1603366615917-29f97e1fefc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1618826419337-761f9604a55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1609908904903-93d3d2c7b70e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
//         ],
//         checkIn: "2025-12-15",
//         checkOut: "2025-12-15",
//         bookedOn: "2025-12-01",
//         roomNo: null,
//         price: 3000,
//         guestCount: 1,
//         roomCount: null,
//         status: "confirmed",
//         owner: {
//           name: "AdventureX Team",
//           phone: "+91 9876543000",
//           photo: "https://i.pravatar.cc/150?u=advx"
//         },
//         customer: {
//           name: "Kabir Roy",
//           email: "kabir.roy@gmail.com",
//           phone: "+91 9898989898",
//           photo: "https://i.pravatar.cc/150?u=kabir"
//         }
//       }
//       ,{
//         bookingId: "#67892",
//         type: "adventure",
//         name: "Desert Safari in Jaisalmer",
//         username: "Simran",
//         location: "Jaisalmer, Rajasthan",
//         rating: 5,
//         images: [
//           "https://images.unsplash.com/photo-1598327105564-179d8b28d3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1580422333401-6f51f5b4e88f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1559767940-0f0e2ac1b2d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1549887534-7a940eb13791?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
//           "https://images.unsplash.com/photo-1589805766625-95111c9e014b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
//         ],
//         checkIn: "2026-01-05",
//         checkOut: "2026-01-05",
//         bookedOn: "2025-12-25",
//         roomNo: null,
//         price: 2700,
//         guestCount: 2,
//         roomCount: null,
//         status: "confirmed",
//         owner: {
//           name: "Desert Riders",
//           phone: "+91 9111111111",
//           photo: "https://i.pravatar.cc/150?u=desert"
//         },
//         customer: {
//           name: "Simran Kaur",
//           email: "simran.k@gmail.com",
//           phone: "+91 9000000002",
//           photo: "https://i.pravatar.cc/150?u=simran"
//         }
//       }
//       ,
//       // Add more bookings if needed
//     ],
//   };


// const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     confirmBooking: (state, action) => {
//       const booking = state.bookings.find(b => b.bookingId === action.payload.id);
//       if (booking) {
//         booking.status = "confirmed";
//       }
//     },
//     cancelBooking: (state, action) => {
//       const booking = state.bookings.find(b => b.bookingId === action.payload.id);
//       if (booking) {
//         booking.status = "cancelled";
//       }
//     },
//     addBooking: (state, action) => {
//       state.bookings.push(action.payload);
//     }
//   }
// });

// export const { confirmBooking, cancelBooking, addBooking } = bookingSlice.actions;

// export default bookingSlice.reducer;










// redux/bookingSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Update with your Postman/mock server base URL
const API_URL = "https://a8b00789-ccd3-439b-848d-85c4a830e824.mock.pstmn.io/api/hotel-bookings"; 

// ✅ Async thunk to fetch bookings
export const fetchBookings = createAsyncThunk(
  "booking/fetchBookings",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch bookings");
    }
  }
);

const initialState = {
  bookings: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    confirmBooking: (state, action) => {
      const booking = state.bookings.find(
        (b) => b.bookingId === action.payload.id
      );
      if (booking) booking.status = "confirmed";
    },
    cancelBooking: (state, action) => {
      const booking = state.bookings.find(
        (b) => b.bookingId === action.payload.id
      );
      if (booking) booking.status = "cancelled";
    },
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = action.payload.bookings || [];
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { confirmBooking, cancelBooking, addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;

import Login from "../pages/login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

// Protected Pages
import Dashboard from "../pages/DashBoard";
import Users from "../pages/Users";
import Pending_Adventures from "../pages/Pending_Adventures";
import DetailedPending_Adventures from "../pages/DetailedPending_Adventures";
import Verified_Adventures from "../pages/Verified_Adventures";
import DetailedVerified_Adventures from "../pages/DetailedVerified_Adventures";
import EditAdventure from "../pages/EditAdventure";
import AdventuresBooking from "../pages/AdventuresBooking";
import Detailed_advantures from "../pages/Detailed_Advantures_Booking";
import Destination from "../pages/Destination";
import DestinationDetail from "../pages/Detailed_Destination";
import DestinationForm from "../components/DestinationForm";
import EditDestination from "../pages/EditDestination";
import Pending_Hotels from "../pages/Pending_Hotels";
import DetailedPending_Hotels from "../pages/DetailedPending_Hotels";
import Verified_Hotels from "../pages/Verified_Hotels";
import DetailedVerified_Hotels from "../pages/DetailedVerified_Hotels";
import EditHotel from "../pages/EditHotel";
import HotelBookings from "../pages/HotelBookings";
import DetailedHotelBookings from "../pages/DetailedHotelBooking";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import UserForm from "../components/UserForm";

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
];

export const protectedRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/users", element: <Users /> },
  { path: "/users/new", element: <UserForm /> },
  { path: "/users/edit/:id", element: <UserForm /> },

  // Adventures
  { path: "/pending-adventures", element: <Pending_Adventures /> },
  { path: "/pending-adventures/:id", element: <DetailedPending_Adventures /> },
  { path: "/verified-adventures", element: <Verified_Adventures /> },
  { path: "/verified-adventures/:id", element: <DetailedVerified_Adventures /> },
  { path: "/edit-adventure/:id", element: <EditAdventure /> },
  { path: "/adventure-bookings", element: <AdventuresBooking /> },
  { path: "/adventure-bookings/:type/:id", element: <Detailed_advantures /> },

  // Destinations
  { path: "/destination", element: <Destination /> },
  { path: "/destination/new", element: <DestinationForm /> },
  { path: "/destination/edit/:id", element: <EditDestination /> },
  { path: "/destination/:id", element: <DestinationDetail /> },

  // Hotels
  { path: "/pending-hotels", element: <Pending_Hotels /> },
  { path: "/pending-hotels/:id", element: <DetailedPending_Hotels /> },
  { path: "/verified-hotels", element: <Verified_Hotels /> },
  { path: "/verified-hotels/:id", element: <DetailedVerified_Hotels /> },
  { path: "/edit-hotel/:id", element: <EditHotel /> },
  { path: "/hotel-bookings", element: <HotelBookings /> },
  { path: "/hotel-bookings/:type/:id", element: <DetailedHotelBookings /> },

  // Settings & Profile
  { path: "/settings", element: <Settings /> },
  { path: "/profile", element: <Profile /> },
];

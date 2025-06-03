import { lazy } from "react";

// Public Pages
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

// Protected Pages
const Dashboard = lazy(() => import("../pages/DashBoard"));
const Users = lazy(() => import("../pages/Users"));
const UserForm = lazy(() => import("../components/UserForm"));

const Pending_Adventures = lazy(() => import("../pages/Pending_Adventures"));
const DetailedPending_Adventures = lazy(() => import("../pages/DetailedPending_Adventures"));
const Verified_Adventures = lazy(() => import("../pages/Verified_Adventures"));
const DetailedVerified_Adventures = lazy(() => import("../pages/DetailedVerified_Adventures"));
const EditAdventure = lazy(() => import("../pages/EditAdventure"));
const AdventuresBooking = lazy(() => import("../pages/AdventuresBooking"));
const Detailed_advantures = lazy(() => import("../pages/Detailed_Advantures_Booking"));

const Destination = lazy(() => import("../pages/Destination"));
const DestinationForm = lazy(() => import("../components/DestinationForm"));
const EditDestination = lazy(() => import("../pages/EditDestination"));
const DestinationDetail = lazy(() => import("../pages/Detailed_Destination"));

const Pending_Hotels = lazy(() => import("../pages/Pending_Hotels"));
const DetailedPending_Hotels = lazy(() => import("../pages/DetailedPending_Hotels"));
const Verified_Hotels = lazy(() => import("../pages/Verified_Hotels"));
const DetailedVerified_Hotels = lazy(() =>
  import("../pages/DetailedVerified_Hotels")
);
const EditHotel = lazy(() => import("../pages/EditHotel"));
const HotelBookings = lazy(() => import("../pages/HotelBookings"));
const DetailedHotelBookings = lazy(() => import("../pages/DetailedHotelBooking"));

const Settings = lazy(() => import("../pages/Settings"));
const Profile = lazy(() => import("../pages/Profile"));

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

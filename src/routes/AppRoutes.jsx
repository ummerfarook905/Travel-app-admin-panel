import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// Public Pages
import Login from "../pages/login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

// Protected Pages
import Dashboard from "../pages/DashBoard";
import Users from "../pages/Users";
import Pending_Adventures from "../pages/Pending_Adventures";
import DetailedPending_Adventures from "../pages/DetailedPending_Adventures";
import Varified_Adventures from "../pages/Varified_Adventures";
import DetailedVarified_Adventures from "../pages/DetailedVarified_Adventures";
import EditAdventure from "../pages/EditAdventure";
import AdventuresBooking from "../pages/AdventuresBooking";
import Detailed_advantures from "../pages/Detailed_Advantures_Booking";
import Destination from "../pages/Destination";
import DestinationDetail from "../pages/Detailed_Destination";
import DestinationForm from "../components/DestinationForm";
import EditDestination from "../pages/EditDestination";
import Pending_Hotels from "../pages/Pending_Hotels";
import DetailedPending_Hotels from "../pages/DetailedPending_Hotels";
import Varified_Hotels from "../pages/Varified_Hotels";
import DetailedVarified_Hotels from "../pages/DetailedVarified_Hotels";
import EditHotel from "../pages/EditHotel";
import HotelBookings from "../pages/HotelBookings";
import DetailedHotelBookings from "../pages/DetailedHotelBooking";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";

// Layout and Route Guards
import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";
import DashboardLayout from "../Layouts/DashboardLayout";

// Protected layout wrapper
const ProtectedLayout = () => (

  <ProtectedRoute>
    <RoleBasedRoute allowedRoles={["admin"]}>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </RoleBasedRoute>
  </ProtectedRoute>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />

        {/* Adventures */}
        <Route path="/pending-adventures" element={<Pending_Adventures />} />
        <Route path="/pending-adventures/:id" element={<DetailedPending_Adventures />} />
        <Route path="/verified-adventures" element={<Varified_Adventures />} />
        <Route path="/verified-adventures/:id" element={<DetailedVarified_Adventures />} />
        <Route path="/edit-adventure/:id" element={<EditAdventure />} />
        <Route path="/adventure-bookings" element={<AdventuresBooking />} />
        <Route path="/adventure-bookings/:id" element={<Detailed_advantures />} />

        {/* Destinations */}
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/new" element={<DestinationForm />} />
        <Route path="/destination/edit/:id" element={<EditDestination />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />

        {/* Hotels */}
        <Route path="/pending-hotels" element={<Pending_Hotels />} />
        <Route path="/pending-hotels/:id" element={<DetailedPending_Hotels />} />
        <Route path="/verified-hotels" element={<Varified_Hotels />} />
        <Route path="/verified-hotels/:id" element={<DetailedVarified_Hotels />} />
        <Route path="/edit-hotel/:id" element={<EditHotel />} />
        <Route path="/hotel-bookings" element={<HotelBookings />} />
        <Route path="/hotel-bookings/:id" element={<DetailedHotelBookings />} />

        {/* Profile & Settings */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Catch-All Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

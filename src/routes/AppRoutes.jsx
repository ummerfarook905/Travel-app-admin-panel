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

// Layout and Route Guards
import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Logout from "../pages/Logout";

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
      <Route path="/logout" element={<Logout />} />

      {/* Protected Routes */}
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/new" element={<UserForm />} />
        <Route path="/users/edit/:id" element={<UserForm />} />
        {/* Adventures */}
        <Route path="/pending-adventures" element={<Pending_Adventures />} />
        <Route
          path="/pending-adventures/:id"
          element={<DetailedPending_Adventures />}
        />
        <Route path="/verified-adventures" element={<Verified_Adventures />} />
        <Route
          path="/verified-adventures/:id"
          element={<DetailedVerified_Adventures />}
        />
        <Route path="/edit-adventure/:id" element={<EditAdventure />} />
        <Route path="/adventure-bookings" element={<AdventuresBooking />} />
        <Route
          path="/adventure-bookings/:type/:id"
          element={<Detailed_advantures />}
        />
        /adventure-bookings/adventure/:id
        {/* Destinations */}
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/new" element={<DestinationForm />} />
        <Route path="/destination/edit/:id" element={<EditDestination />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        {/* Hotels */}
        <Route path="/pending-hotels" element={<Pending_Hotels />} />
        <Route
          path="/pending-hotels/:id"
          element={<DetailedPending_Hotels />}
        />
        <Route path="/verified-hotels" element={<Verified_Hotels />} />
        <Route
          path="/verified-hotels/:id"
          element={<DetailedVerified_Hotels />}
        />
        <Route path="/edit-hotel/:id" element={<EditHotel />} />
        <Route path="/hotel-bookings" element={<HotelBookings />} />
        <Route
          path="/hotel-bookings/:type/:id"
          element={<DetailedHotelBookings />}
        />
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

import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/DashBoard";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Pending_Adventures from "../pages/Pending_Adventures";
import DetailedPending_Adventures from "../pages/DetailedPending_Adventures";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Varified_Adventures from "../pages/Varified_Adventures";
import DetailedVarified_Adventures from "../pages/DetailedVarified_Adventures";
import AdventuresBooking from "../pages/AdventuresBooking";
import EditAdventure from "../pages/EditAdventure";
import Pending_Hotels from "../pages/Pending_Hotels";
import Varified_Hotels from "../pages/Varified_Hotels";
import DetailedPending_Hotels from "../pages/DetailedPending_Hotels";
import DetailedVarified_Hotels from "../pages/DetailedVarified_Hotels";
// import Destinations from "../pages/Destinations";
// import HotelBookings from "../pages/HotelBookings";


// Protected Layout Wrapper
const ProtectedLayout = () => (
  <ProtectedRoute>
    <RoleBasedRoute allowedRoles={["admin"]}>
      <DashboardLayout>
        <Outlet /> {/* This renders the nested routes */}
      </DashboardLayout>
    </RoleBasedRoute>
  </ProtectedRoute>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root path to /login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* PUBLIC ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* PROTECTED ROUTES */}
      <Route element={<ProtectedLayout />}>
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* User Management */}
        <Route path="/users" element={<Users />} />
        
        {/* Adventures */}
        <Route path="/pending-adventures" element={<Pending_Adventures />} />
        <Route path="/pending-adventures/:id" element={<DetailedPending_Adventures />} />
        <Route path="/verified-adventures" element={<Varified_Adventures/>} />
        <Route path="/verified-adventures/:id" element={<DetailedVarified_Adventures/>} />
        <Route path="/edit-adventure/:id" element={<EditAdventure/>} />

        {/* Destinations */}
        {/* <Route path="/destinations" element={<Destinations />} /> */}
        
        {/* Hotels */}
        <Route path="/pending-hotels" element={<Pending_Hotels/>} />
        <Route path="/pending-hotels/:id" element={<DetailedPending_Hotels/>} />
        <Route path="/verified-hotels" element={<Varified_Hotels/>} />
        <Route path="/verified-hotels/:id" element={<DetailedVarified_Hotels/>} />

        
        {/* Bookings */}
        {/* <Route path="/hotel-bookings" element={<HotelBookings />} /> */}
         <Route path="/adventure-bookings" element={<AdventuresBooking/>} /> 
        
        {/* Settings & Profile */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* 404 PAGE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
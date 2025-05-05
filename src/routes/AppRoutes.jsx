import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/DashBoard";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserForm from "../components/UserForm";
import Pending_Adventures from "../pages/Pending_Adventures";
import DetailedPending_Adventures from "../pages/DetailedPending_Adventures";
// import Destinations from "../pages/Destinations";
// import PendingHotels from "../pages/PendingHotels";
// import VerifiedHotels from "../pages/VerifiedHotels";
// import HotelBookings from "../pages/HotelBookings";
// import AdventureBookings from "../pages/AdventureBookings";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Varified_Adventures from "../pages/Varified_Adventures";

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
        <Route path="/users/new" element={<UserForm/> }/>
        <Route path="/users/edit/:id" element={<UserForm />} />
        <Route path="/pending_adventures" element={<Pending_Adventures/>} />
        <Route path="/pending-adventures" element={<Pending_Adventures />} />
        <Route path="/pending-adventures/:id" element={<DetailedPending_Adventures />} />
        <Route path="/verified-adventures" element={<Varified_Adventures/>} />
        
        {/* Destinations */}
        {/* <Route path="/destinations" element={<Destinations />} /> */}
        
        {/* Hotels */}
        {/* <Route path="/pending-hotels" element={<PendingHotels />} /> */}
        {/* <Route path="/verified-hotels" element={<VerifiedHotels />} /> */}
        
        {/* Bookings */}
        {/* <Route path="/hotel-bookings" element={<HotelBookings />} /> */}
        {/* <Route path="/adventure-bookings" element={<AdventureBookings />} /> */}
        
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
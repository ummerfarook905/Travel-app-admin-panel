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
import Detailed_advantures from "../pages/Detailed_Advantures_Booking";

import Destination from "../pages/Destination";
// import PendingHotels from "../pages/PendingHotels";
// import VerifiedHotels from "../pages/VerifiedHotels";
// import HotelBookings from "../pages/HotelBookings";


import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Varified_Adventures from "../pages/Varified_Adventures";
import DetailedVarified_Adventures from "../pages/DetailedVarified_Adventures";
import AdventuresBooking from "../pages/AdventuresBooking";
import EditAdventure from "../pages/EditAdventure";
import DestinationDetail from "../pages/Detailed_Destination";
import DestinationForm from "../components/DestinationForm";
import EditDestination from "../pages/EditDestination"
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
        <Route path="/verified-adventures/:id" element={<DetailedVarified_Adventures/>} />
        <Route path="/edit-adventure/:id" element={<EditAdventure/>} />

        {/* Destinations */}
        <Route path="/destination" element={<Destination/>} />
        <Route path="/destination/:id" element={<DestinationDetail/>} />
        <Route path="/destination/new" element={<DestinationForm/> } />
        <Route path="/destination/edit/:id" element={<EditDestination/>} />
        
        {/* Hotels */}
        {/* <Route path="/pending-hotels" element={<PendingHotels />} /> */}
        {/* <Route path="/verified-hotels" element={<VerifiedHotels />} /> */}
        
        {/* Bookings */}
        {/* <Route path="/hotel-bookings" element={<HotelBookings />} /> */}
         <Route path="/adventure-bookings" element={<AdventuresBooking/>} /> 
         <Route path="/adventure-bookings/:id" element={<Detailed_advantures/>} /> 
        
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
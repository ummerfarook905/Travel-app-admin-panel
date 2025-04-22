// AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";
import NotFound from "../pages/NotFound";
import Unauthorized from "../pages/Unauthorized";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
  <Route path="/login" element={<Login />} />
  <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["admin"]}>
              <Dashboard />
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      />

      {/* Redirects */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
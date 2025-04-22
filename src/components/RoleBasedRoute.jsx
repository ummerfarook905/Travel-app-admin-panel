// RoleBasedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return allowedRoles.includes(user?.role) ? children : <Navigate to="/unauthorized" replace />;
};

export default RoleBasedRoute;
// RoleBasedRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { user, isInitialized } = useSelector((state) => state.auth);

  if (!isInitialized) return <LoadingSpinner />;

  return allowedRoles.includes(user?.role)
    ? children
    : <Navigate to="/unauthorized" replace />;
};

export default RoleBasedRoute;
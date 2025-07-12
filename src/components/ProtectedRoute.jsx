import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { user, isInitialized } = useSelector((state) => state.auth);

  if (!isInitialized) return <LoadingSpinner />;
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";
import DashboardLayout from "../Layouts/DashboardLayout";

import { publicRoutes, protectedRoutes } from "./routesConfig";

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
      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/login" />} />


      {/* Public Routes */}
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}


      {/* Protected Routes under ProtectedLayout */}
      <Route element={<ProtectedLayout />}>
        {protectedRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>


      {/* 404 */}
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
};

export default AppRoutes;

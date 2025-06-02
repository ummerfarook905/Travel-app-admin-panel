import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import RoleBasedRoute from "../components/RoleBasedRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import { Suspense } from "react";
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
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-900"></div>
          <p className="ml-4 text-gray-700 text-lg">Loading, please wait...</p>
        </div>
      }
    >
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
    </Suspense>
  );
};

export default AppRoutes;

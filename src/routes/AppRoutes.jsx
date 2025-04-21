import { Routes ,Route} from "react-router-dom"
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

 import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";  
import RoleBasedRoute from "../components/RoleBasedRoute";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {
    return(
        <Routes>

             {/* Redirect root path to /login */}
      <Route path="/" element={<Navigate to="/login" />} />

            {/* PUBLIC ROUTE */}
            <Route path="/login" element={<Login/>} />



            {/* PROTECTED ROUTE */}
            <Route path="/dashboard" element={
               <ProtectedRoute>
               <RoleBasedRoute allowedRoles={["admin"]}>
                 <Dashboard />
               </RoleBasedRoute>
             </ProtectedRoute>
            } />

          
            {/* 404 PAGE */}
            <Route path="*" element={<NotFound />} />


          
          
            


        </Routes>
    )
}
export default AppRoutes
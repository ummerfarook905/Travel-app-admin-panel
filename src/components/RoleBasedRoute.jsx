import { isAuthenticated } from "../utils/auth"
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/auth"; // Import the function to get user role


const RoleBasedRoute = ({ children, allowedRoles }) => {

   
    

    if(!isAuthenticated()){

        return<Navigate to="/login" replace/>
    }

    // Get the current user's role (e.g., 'admin', 'user')
    const userRole = getUserRole(); 
    
// Check if the user's role is allowed to access this route
    if (!allowedRoles.includes(userRole)){
        return <Navigate to="/unauthorized" replace />; // Redirect to unauthorized page if role is not allowed
    }
    return children; // If authenticated and role is allowed, show the content
}
export default RoleBasedRoute;

import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Functional component for Admin Login
const Login = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        const dummyUser = {
          email: "admin@example.com",
          role: "admin", // change to "user" for testing user role
        };
    
        // Save user to localStorage
        localStorage.setItem("user", JSON.stringify(dummyUser));
    
        // Navigate to dashboard
        navigate("/dashboard");
      };

    
    return(
        <div className="flex items-center justify-center h-screen" style={{ backgroundColor: '#00493E' }}>
  <div className="w-full max-w-xs">
    <form className="
     rounded px-8 pt-6 pb-8 mb-4" style={{ backgroundColor: '#00493E' }}>
      {/* Email Field */}
      <div className="mb-4 flex items-center 
       py-2">
        <FaUserAlt className="mr-2 text-gray-500" />
        <input
          className="appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="email"
          placeholder="EMAIL ADRESS"
          aria-label="Email"
        />
      </div>

      {/* Password Field */}
      <div className="mb-6 flex items-center py-2">
        <FaLock className="mr-2 text-gray-500" />
        <input
          className="appearance-none bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="password"
          placeholder="PASSWORD"
          aria-label="Password"
        />
      </div>

      {/* Login Button */}
      <div className="flex items-center justify-center">
      <button
              className="appearance-none bg-white border-none w-full text-gray-700 py-1 px-2 leading-tight hover:bg-gray-100 focus:outline-none"
              type="button"
              onClick={handleLogin}
            >
          LOGIN
        </button>
      </div>
    </form>
  </div>
</div>


    )
}
export default Login;
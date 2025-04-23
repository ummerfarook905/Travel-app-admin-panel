import { useLocation } from "react-router-dom";
import { FiSearch, FiSettings, FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const pageTitles = {
  "/dashboard": "Dashboard Overview",
  "/users": "User Management",
  "/settings": "System Settings"
};

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const title = pageTitles[currentPath] || "Admin Panel";

  return (
    <header className="bg-white shadow-sm p-4 flex items-center justify-between">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-[#00493E]">{title}</h1>
      
      {/* Search and Profile Section */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Settings Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiSettings className="text-gray-600 text-xl" />
          </button>
          
          {/* Notification Bell */}
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <FiBell className="text-gray-600 text-xl" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          {/* Profile Dropdown */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <FaUserCircle className="text-gray-600 text-2xl" />
            </div>
            <span className="text-gray-700 font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
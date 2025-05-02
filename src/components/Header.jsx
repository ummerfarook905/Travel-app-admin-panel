import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiSettings } from "react-icons/fi";
import SearchBar from "./SearchBar";
import NotificationIcon from "./NotificationIcon";
import NotificationDropdown from "./NotificationDropdown";
import ProfileIcon from "./ProfileIcon";
import ProfileDropdown from "./ProfileDropdown";

const pageTitles = {
  "/dashboard": "Dashboard Overview",
  "/users": "User Management",
  "/pending-adventures": "Pending Adventures",
  "/profile": "My Profile",
  "/settings": "Settings",


};

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const title = pageTitles[currentPath] || "Admin Panel";
  
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New booking received", time: "10 mins ago", read: false },
    { id: 2, message: "System update available", time: "1 hour ago", read: false },
  ]);
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleNotifications = (e) => {
    e.stopPropagation();
    setShowNotifications(!showNotifications);
    setShowProfileDropdown(false);
  };
  
  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotifications(false);
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    setShowNotifications(false);
  };
  
  const closeAllDropdowns = () => {
    setShowNotifications(false);
    setShowProfileDropdown(false);
  };
  
  useEffect(() => {
    const handleClickOutside = () => closeAllDropdowns();
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
<header className="bg-white shadow-sm p-4 flex items-center justify-between relative">
{/* Left Section */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-full hover:bg-gray-100"
        >
          <FiMenu className="text-gray-600 text-xl" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-[#00493E]">{title}</h1>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-2 md:space-x-6">
      <SearchBar />
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={() => window.location.href = "/settings"}
            className="hidden md:block p-2 rounded-full hover:bg-gray-100"
          >
            <FiSettings className="text-gray-600 text-xl" />
          </button>
          
          <div className="relative">
            <NotificationIcon 
              count={unreadCount} 
              onClick={toggleNotifications} 
            />
            {showNotifications && (
              <NotificationDropdown 
                notifications={notifications} 
                onClose={closeAllDropdowns}
                onMarkAllAsRead={markAllAsRead}
              />
            )}
          </div>
          
          <div className="relative">
            <ProfileIcon 
              onClick={toggleProfileDropdown} 
              showName={true}
            />
            {showProfileDropdown && (
              <ProfileDropdown onClose={closeAllDropdowns} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleNotifications,
  toggleProfileDropdown,
  closeAllDropdowns,
  markAllAsRead,
} from "../redux/headerSlice";
import { FiMenu, FiSettings, FiSearch } from "react-icons/fi";
import NotificationIcon from "./NotificationIcon";
import NotificationDropdown from "./NotificationDropdown";
import ProfileIcon from "./ProfileIcon";
import ProfileDropdown from "./ProfileDropdown";
// import SearchBar from "./SearchBar";

const pageTitles = {
  "/dashboard": "Dashboard Overview",
  "/users": "User Management",
  "/pending-adventures": "Pending Adventures",
  "/pending-adventures/:id": "Pending Adventures",
  "/verified-adventures": "Verified Adventures",
  "/verified-adventures/:id": "Verified Adventures",
  "/pending-hotels": "Pending Hotels",
  "/pending-hotels/:id": "Pending Hotels",
  "/verified-hotels": "Verified Hotels",
  "/verified-hotels/:id": "Verified Hotels",
  "/hotel-bookings": "Hotel Bookings",
  "/hotel-bookings/hotel/:id": "Hotel Bookings",
  "/profile": "My Profile",
  "/settings": "Settings",
  "/adventure-bookings": "Adventure Bookings",
  "/adventure-bookings/adventure/:id": "Adventure Bookings",
  "/destination": "Destinations",
  "/destination/:id": "View Destination",
  "/destination/new": "Add New Destination",
};

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();

  const notifications = useSelector((state) => state.header.notifications);
  const showNotifications = useSelector((state) => state.header.showNotifications);
  const showProfileDropdown = useSelector((state) => state.header.showProfileDropdown);

  const getTitle = (path) => {
    if (path.startsWith("/pending-adventures/")) return "Pending Adventures";
    if (path.startsWith("/verified-adventures/")) return "Verified Adventures";
    if (path.startsWith("/adventure-bookings/")) return "Adventure Bookings";
    if (path.startsWith("/verified-hotels/")) return "Verified Hotels";
    if (path.startsWith("/hotel-bookings/")) return "Hotel Bookings";
    if (path.startsWith("/destination/")) return "Destination";
    if (path.startsWith("/users/")) return "User Management";

    return pageTitles[path] || "Admin Panel";
  };

  const title = getTitle(currentPath);
  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    const handleClickOutside = () => dispatch(closeAllDropdowns());
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dispatch]);

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
        <h1 className="text-xl md:text-2xl pl-3 font-bold text-[#00493E]">{title}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2 md:space-x-6">
        {/* Search Bar - Hidden on small screens */}
        {/* <div className="hidden md:block relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
          />
        </div> */}
        {/* <SearchBar/> */}

        {/* Profile Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={() => (window.location.href = "/settings")}
            className="hidden md:block p-2 rounded-full hover:bg-gray-100"
          >
            <FiSettings className="text-gray-600 text-xl cursor-pointer" />
          </button>

          <div className="relative cursor-pointer">
            <NotificationIcon count={unreadCount} onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleNotifications());
            }} />
            {showNotifications && (
              <NotificationDropdown
                notifications={notifications}
                onClose={() => dispatch(closeAllDropdowns())}
                onMarkAllAsRead={() => dispatch(markAllAsRead())}
              />
            )}
          </div>

          <div className="relative">
            <ProfileIcon
              onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleProfileDropdown());
              }}
              showName={true}
            />
            {showProfileDropdown && (
              <ProfileDropdown onClose={() => dispatch(closeAllDropdowns())} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

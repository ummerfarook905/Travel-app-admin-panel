import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  FiUsers, 
  FiClock, 
  FiCheckCircle, 
  FiMapPin, 
  FiStar,
  FiBookmark,
  FiX,
  FiMenu
} from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { FaHotel, FaUmbrellaBeach } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: "/dashboard", icon: <BiHomeAlt className="mr-3 text-lg" />, text: "Dashboard" },
    { to: "/users", icon: <FiUsers className="mr-3 text-lg" />, text: "Users" },
    { to: "/pending-adventures", icon: <FiClock className="mr-3 text-lg" />, text: "Pending Adventures" },
    { to: "/verified-adventures", icon: <FiCheckCircle className="mr-3 text-lg" />, text: "Verified Adventures" },
    { to: "/destination", icon: <FiMapPin className="mr-3 text-lg" />, text: "Destinations" },
    { to: "/pending-hotels", icon: <FaHotel className="mr-3 text-lg" />, text: "Pending Hotels" },
    { to: "/verified-hotels", icon: <FiStar className="mr-3 text-lg" />, text: "Verified Hotels" },
    { to: "/hotel-bookings", icon: <FiBookmark className="mr-3 text-lg" />, text: "Hotel Bookings" },
    { to: "/adventure-bookings", icon: <FaUmbrellaBeach className="mr-3 text-lg" />, text: "Adventures Bookings" }
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#00493E] text-white p-2 rounded-md"
      >
        <FiMenu size={20} />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-[#00493E] text-white w-64 min-h-screen p-4 fixed md:relative z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close button inside sidebar */}
        <button
          onClick={closeSidebar}
          className="md:hidden absolute top-2 right-2 text-white hover:text-gray-200 border-2 border-white rounded-full p-1"
        >
          <FiX size={20} />
        </button>

        <h1 className="text-2xl font-bold mb-8 mt-2 text-center">A Travel App</h1>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mb-2">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded transition-colors duration-200 ${
                    isActive
                      ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                      : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
                  }`
                }
                onClick={closeSidebar}
              >
                {item.icon}
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
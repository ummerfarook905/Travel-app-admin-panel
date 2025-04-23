import { NavLink } from "react-router-dom";
import { 
  FiUsers, 
  FiClock, 
  FiCheckCircle, 
  FiMapPin, 
  FiStar,
  FiBookmark,
  FiCalendar
} from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { FaHotel, FaUmbrellaBeach } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-[#00493E] text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">A Travel App</h1>
      <ul>
        <li className="mb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <BiHomeAlt className="mr-3 text-lg" />
            Dashboard
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <FiUsers className="mr-3 text-lg" />
            Users
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/pending-adventures"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <FiClock className="mr-3 text-lg" />
            Pending Adventures
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/verified-adventures"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <FiCheckCircle className="mr-3 text-lg" />
            Verified Adventures
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <FiMapPin className="mr-3 text-lg" />
            Destinations
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/pending-hotels"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <FaHotel className="mr-3 text-lg" />
            Pending Hotels
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/verified-hotels"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <FiStar className="mr-3 text-lg" />
            Verified Hotels
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/hotel-bookings"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <FiBookmark className="mr-3 text-lg" />
            Hotel Bookings
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/adventure-bookings"
            className={({ isActive }) =>
              `flex items-center p-2 rounded transition-colors duration-200 ${
                isActive
                  ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
                  : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            <FaUmbrellaBeach className="mr-3 text-lg" />
            Adventures Bookings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
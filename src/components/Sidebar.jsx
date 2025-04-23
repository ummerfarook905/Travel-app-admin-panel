import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-[#00493E] text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">A Travel App</h1>
      <ul>
        <li className="mb-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            
            Users
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="*"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
           Pending Adventures
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="*"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            Verified Adventures
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="*"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
           Destinations
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="*"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
            Pending Hotels
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="*"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
          Verified Hotels
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="*"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
           Hotel Bookings
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="*"
            className={({ isActive }) =>
              `block p-2 rounded transition-colors duration-200 ${
                isActive
           ? 'bg-white text-[#00493E] font-medium rounded-tl-2xl rounded-bl-2xl'
           : 'hover:bg-white hover:text-[#00493E] rounded-tl-2xl hover:rounded-bl-2xl'
              }`
            }
          >
           Adventures Bookings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
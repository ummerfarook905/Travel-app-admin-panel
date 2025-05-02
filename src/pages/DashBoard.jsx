import { useState } from 'react';
import StatsCard from "../components/StatsCard";
import { FiUsers, FiMapPin, FiSidebar } from "react-icons/fi";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";
import RightSidebar from "../components/RightSidebar";

export default function Dashboard() {
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const stats = [
    { title: "Users", value: "932", icon: <FiUsers className="text-2xl" /> },
    { title: "Destinations", value: "754", icon: <FiMapPin className="text-2xl" /> },
    { title: "Hotels", value: "40", icon: <FaHotel className="text-2xl" /> },
    { title: "Adventures", value: "32K", icon: <FaUmbrellaBeach className="text-2xl" /> },
  ];

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-end mb-6"> {/* Changed to justify-end */}
            {/* Show Sidebar Button - Only on mobile */}
            <button 
              onClick={() => setShowRightSidebar(true)}
              className="md:hidden flex items-center gap-2 bg-[#00493E] text-white px-3 py-2 rounded-lg"
            >
              <FiSidebar />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
      
      <RightSidebar 
        isOpen={showRightSidebar} 
        onClose={() => setShowRightSidebar(false)}
      />
    </div>
  );
}
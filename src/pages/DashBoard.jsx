import StatsCard from "../components/StatsCard";
import { FiUsers, FiMapPin } from "react-icons/fi";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";
import RightSidebar from "../components/RightSidebar";

export default function Dashboard() {
  const stats = [
    { title: "Users", value: "932", icon: <FiUsers className="text-2xl" /> },
    { title: "Destinations", value: "754", icon: <FiMapPin className="text-2xl" /> },
    { title: "Hotels", value: "40", icon: <FaHotel className="text-2xl" /> },
    { title: "Adventures", value: "32K", icon: <FaUmbrellaBeach className="text-2xl" /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Main Content - takes remaining space */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
      
      {/* Right Sidebar - fixed width, no gap */}
      <RightSidebar />
    </div>
  );
}

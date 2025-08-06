
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StatsCard from "../components/StatsCard";
import { FiUsers, FiMapPin } from "react-icons/fi";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";
import RightSidebar from "../components/RightSidebar";
import PendingHotelRequests from '../components/PendingHotelRequests';
import PendingAdventureRequests from '../components/PendingAdventureRequests';
import AppPerformanceChart from '../components/AppPerformanceChart';
import { fetchStats } from '../redux/statsSlice';
import { fetchPendingAdventures } from '../redux/adventuresSlice'; // ✅ Import the thunk
import { fetchHotelsAsync } from '../redux/hotelsSlice';

// ✅ icon mapping
const iconMap = {
  FiUsers,
  FiMapPin,
  FaHotel,
  FaUmbrellaBeach,
};

export default function Dashboard() {
  const dispatch = useDispatch();

  // ✅ Fetch all needed data on mount
  useEffect(() => {
    dispatch(fetchStats());
    dispatch(fetchPendingAdventures()); // ✅ Fetch from mock API
     dispatch(fetchHotelsAsync());
  }, [dispatch]);

  const showRightSidebar = useSelector((state) => state.dashboard.showRightSidebar);
  const stats = useSelector((state) => state.stats.stats);

  return (
    <div className="flex h-full bg-[#F3F4FF]">
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-6 bg-white rounded-xl p-4">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={iconMap[stat.iconKey]} // ✅ Map string to icon
              />
            ))}
          </div>

          {/* App Performance Chart */}
          <div className="mb-8">
            <AppPerformanceChart />
          </div>

          {/* Pending Requests Sections */}
          <div className="space-y-8">
            <PendingAdventureRequests />
            <PendingHotelRequests />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar 
        isOpen={showRightSidebar} 
        onClose={() => dispatch(showRightSidebar())}
      />
    </div>
  );
}

import { useState } from 'react';
import useStats from '../hooks/useStats'; 
import StatsCard from "../components/StatsCard";
import { FiSidebar } from "react-icons/fi";
import RightSidebar from "../components/RightSidebar";
import PendingHotelRequests from '../components/PendingHotelRequests';
import PendingAdventureRequests from '../components/PendingAdventureRequests';
import AppPerformanceChart from '../components/AppPerformanceChart';
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
  const dispatch = useDispatch();
  const showRightSidebar = useSelector((state) => state.dashboard.showRightSidebar);
  const stats = useSelector((state) => state.stats.stats); 

  return (
    <div className="flex h-full bg-[#F3F4FF]">
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-6 bg-white rounded-xl p-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Added spacing below the chart */}
          <div className="mb-8">
            <AppPerformanceChart />
          </div>

          <div className="space-y-8">
            <PendingAdventureRequests />
            <PendingHotelRequests />
          </div>
        </div>
      </div>

      <RightSidebar 
        isOpen={showRightSidebar} 
        onClose={() => dispatch(showRightSidebar())}
      />
    </div>
  );
}

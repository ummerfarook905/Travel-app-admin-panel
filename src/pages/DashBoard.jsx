import { useState } from 'react';
import useStats from '../hooks/useStats'; 
import StatsCard from "../components/StatsCard";
import { FiSidebar } from "react-icons/fi";
import RightSidebar from "../components/RightSidebar";
import PendingHotelRequests from '../components/PendingHotelRequests';
import PendingAdventureRequests from '../components/PendingAdventureRequests';

export default function Dashboard() {
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const stats = useStats();

  return (
    <div className="flex h-full bg-[#F3F4FF]">
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-end mb-6">
            <button 
              onClick={() => setShowRightSidebar(true)}
              className="md:hidden flex items-center gap-2 bg-[#00493E] text-white px-3 py-2 rounded-lg"
            >
              <FiSidebar />
            </button>
          </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-white rounded-xl p-4">
  {stats.map((stat, index) => (
    <StatsCard key={index} {...stat} />
  ))}
</div>

          <div className="space-y-8">
             <PendingAdventureRequests />
             <PendingHotelRequests />
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

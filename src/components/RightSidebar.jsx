import { useState, useEffect } from 'react';
import { FiPlus, FiX } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function RightSidebar({ isOpen, onClose }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [recentData, setRecentData] = useState({
    users: [],
    hotels: [],
    adventures: []
  });

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        setLoading(true);
        
        // SIMULATED API CALLS - REPLACE WITH ACTUAL API CALLS
        setTimeout(() => {
          setRecentData({
            users: [
              { name: "John Doe", email: "john@example.com" },
              { name: "Jane Smith", email: "jane@example.com" }
            ],
            hotels: [
              { name: "Royal Stay", info: "New York" },
              { name: "Sea Breeze", info: "Miami" }
            ],
            adventures: [
              { name: "Mountain Trek", info: "Hiking" },
              { name: "Desert Safari", info: "Adventure" }
            ]
          });
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchRecentData();
  }, []);
  
  const handleViewMoreUsers = () => navigate("/users");
  const handleViewMoredefault = () => navigate("/dashboard");

  return (
    <div className={`
      bg-white text-[#00493E] w-64 h-[calc(100vh-64px)] p-4 pb-5 border-l border-gray-200 flex flex-col
      fixed top-17 right-0 z-20 transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0 shadow-xl' : 'translate-x-full'}
      md:relative md:translate-x-0 md:top-0 md:h-auto
    `}>
      {/* Close Button (Mobile Only) - Positioned top-left */}
      <button 
        onClick={onClose}
        className="md:hidden absolute top-2 left-2 p-1 text-gray-600 hover:text-gray-800 cursor-pointer"
      >
        <FiX size={24} />
      </button>

      {loading ? (
        <div className="flex flex-col items-center justify-center h-full">
          <FaSpinner className="animate-spin text-2xl mb-2 text-[#00493E]" />
          <p className="text-sm text-gray-500">Loading data...</p>
        </div>
      ) : (
        <>
          <div className="mb-4 mt-6 md:mt-0">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Recent Users</h2>
              <button className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm">
                <FiPlus className="text-sm  cursor-pointer" />
              </button>
            </div>
            <ul className="mb-2 space-y-1">
              {recentData.users.map((user, index) => (
                <li key={index} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                  {user.name}
                  <p className="text-gray-500 text-xs">{user.email}</p>
                </li>
              ))}
            </ul>
            <button onClick={handleViewMoreUsers}
             className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3 rounded-full hover:bg-[#00382E] transition-colors duration-200 cursor-pointer">
              View More
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Recent Hotels</h2>
              <button className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm">
                <FiPlus className="text-sm  cursor-pointer" />
              </button>
            </div>
            <ul className="mb-2 space-y-1">
              {recentData.hotels.map((hotel, index) => (
                <li key={index} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                  {hotel.name}
                  <p className="text-gray-500 text-xs">{hotel.info}</p>
                </li>
              ))}
            </ul>
            <button onClick={handleViewMoredefault} className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3 rounded-full hover:bg-[#00382E] transition-colors duration-200 cursor-pointer">
              View More
            </button>
          </div>

          <div className="mb-4 pb-5"> {/* Added pb-5 (20px padding bottom) here */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Recent Adventures</h2>
              <button className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm">
                <FiPlus className="text-sm  cursor-pointer" />
              </button>
            </div>
            <ul className="mb-2 space-y-1">
              {recentData.adventures.map((adventure, index) => (
                <li key={index} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                  {adventure.name}
                  <p className="text-gray-500 text-xs">{adventure.info}</p>
                </li>
              ))}
            </ul>
            <button onClick={handleViewMoredefault} className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3 rounded-full hover:bg-[#00382E] transition-colors duration-200 cursor-pointer">
              View More
            </button>
          </div>
        </>
      )}
    </div>
  );
}
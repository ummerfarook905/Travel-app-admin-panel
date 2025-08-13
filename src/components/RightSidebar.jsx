
import { useEffect } from 'react';
import { FiPlus, FiX } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setRecentData, setLoading } from '../redux/dashboardSlice';

export default function RightSidebar({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(state => state.dashboard.loading);
  const recentData = useSelector(state => state.dashboard.recentData);

  useEffect(() => {
    const fetchRecentData = async () => {
      dispatch(setLoading(true));
      try {
        const [usersRes, hotelsRes, adventuresRes] = await Promise.all([
          fetch('https://a8b00789-ccd3-439b-848d-85c4a830e824.mock.pstmn.io/api/admin/users'),
          fetch('https://a8b00789-ccd3-439b-848d-85c4a830e824.mock.pstmn.io/api/hotels'),
          fetch('https://a8b00789-ccd3-439b-848d-85c4a830e824.mock.pstmn.io/verified')
        ]);

        const usersData = await usersRes.json();
        const hotelsData = await hotelsRes.json();
        const adventuresData = await adventuresRes.json();

        dispatch(setRecentData({
          users: usersData?.slice(0, 2) || [],
          hotels: hotelsData?.verified?.slice(0, 2) || [],
          adventures: adventuresData?.slice(0, 2).map(item => ({
            name: item.name,
            info: item.category || item.location || "Adventure"
          })) || []
        }));
      } catch (error) {
        console.error('Error fetching recent data:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchRecentData();
  }, [dispatch]);

  const handleViewMoreUsers = () => navigate("/users");
  const handleViewMoreHotels = () => navigate("/verified-hotels");
  const handleViewMoreAdventures = () => navigate("/verified-adventures");

  return (
    <div className={`
      bg-white text-[#00493E] w-64 h-[calc(100vh-64px)] p-4 pb-5 border-l border-gray-200 flex flex-col
      fixed top-17 right-0 z-20 transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0 shadow-xl' : 'translate-x-full'}
      md:relative md:translate-x-0 md:top-0 md:h-auto
    `}>
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
          {/* Users */}
          <div className="mb-4 mt-6 md:mt-0">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Recent Users</h2>
              <button onClick={handleViewMoreUsers} className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm">
                <FiPlus className="text-sm" />
              </button>
            </div>
            <ul className="mb-2 space-y-1">
              {recentData.users.map((user, index) => (
                <li key={index} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                  {user.name}
                  <p className="text-gray-500 text-xs">{user.contact?.email || user.email}</p>
                </li>
              ))}
            </ul>
            <button onClick={handleViewMoreUsers} className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3 rounded-full hover:bg-[#00382E] transition-colors duration-200">
              View More
            </button>
          </div>

          {/* Hotels */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Recent Hotels</h2>
              <button onClick={handleViewMoreHotels} className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm">
                <FiPlus className="text-sm" />
              </button>
            </div>
            <ul className="mb-2 space-y-1">
              {recentData.hotels.map((hotel, index) => (
                <li key={index} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                  {hotel.name}
                  <p className="text-gray-500 text-xs">{hotel.location || hotel.info}</p>
                </li>
              ))}
            </ul>
            <button onClick={handleViewMoreHotels} className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3 rounded-full hover:bg-[#00382E] transition-colors duration-200">
              View More
            </button>
          </div>

          {/* Adventures */}
          <div className="mb-4 pb-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Recent Adventures</h2>
              <button onClick={handleViewMoreAdventures} className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm">
                <FiPlus className="text-sm" />
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
            <button onClick={handleViewMoreAdventures} className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3 rounded-full hover:bg-[#00382E] transition-colors duration-200">
              View More
            </button>
          </div>
        </>
      )}
    </div>
  );
}

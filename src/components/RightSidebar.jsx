import { FiUser, FiPlus } from "react-icons/fi";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";

export default function RightSidebar() {
  return (
    <div className="bg-white text-[#00493E] w-64 min-h-screen p-4 border-l border-gray-200 flex flex-col">
      {/* Recent Users */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold flex items-center">
            {/* <FiUser className="mr-2 text-[#00493E]" /> */}
            <span>Recent Users</span>
          </h2>
          <button className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm cursor-pointer">
            <FiPlus className="text-sm" />
          </button>
        </div>
        <ul className="mb-2 space-y-1">
          <li className="px-3 py-2 rounded-lg text-sm font-medium ">
            John Doe
            <p className="text-gray-500 text-xs">email</p>
          </li>
          <li className="px-3 py-2 rounded-lg text-sm font-medium ">
            Jane Smith
            <p className="text-gray-500 text-xs">email</p>
          </li>
        </ul>
        <button className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3  rounded-full hover:bg-[#00382E] transition-colors duration-200 text-center cursor-pointer">
          View More
        </button>
      </div>

      {/* Recent Hotels */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold flex items-center">
            {/* <FaHotel className="mr-2 text-[#00493E]" /> */}
            <span>Recent Hotels</span>
          </h2>
          <button className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm cursor-pointer">
            <FiPlus className="text-sm" />
          </button>
        </div>
        <ul className="mb-2 space-y-1">
          <li className="px-3 py-2 rounded-lg text-sm font-medium ">
            Royal Stay
            <p className="text-gray-500 text-xs">xxxx</p>
          </li>
          <li className="px-3 py-2 rounded-lg text-sm font-medium ">
            Sea Breeze
            <p className="text-gray-500 text-xs">xxxx</p>
          </li>
        </ul>
        <button className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3  rounded-full hover:bg-[#00382E] transition-colors duration-200 text-center cursor-pointer">
          View More
        </button>
      </div>

      {/* Recent Adventures */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold flex items-center">
            {/* <FaUmbrellaBeach className="mr-2 text-[#00493E]" /> */}
            <span>Recent Adventures</span>
          </h2>
          <button className="w-7 h-7 rounded-full bg-[#00493E] text-white flex items-center justify-center hover:bg-[#00382E] transition-colors shadow-sm cursor-pointer">
            <FiPlus className="text-sm" />
          </button>
        </div>
        <ul className="mb-2 space-y-1">
          <li className="px-3 py-2 rounded-lg text-sm font-medium ">
            Mountain Trek
            <p className="text-gray-500 text-xs">xxxx</p>
          </li>
          <li className="px-3 py-2 rounded-lg text-sm font-medium ">
            Desert Safari
            <p className="text-gray-500 text-xs">xxxx</p>
          </li>
        </ul>
        <button className="w-full bg-[#00493E] text-white text-sm font-semibold py-2 px-3  rounded-full hover:bg-[#00382E] transition-colors duration-200 text-center cursor-pointer">
          View More
        </button>
      </div>
    </div>
  );
}

import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const SearchBar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Always visible search icon - triggers popup on <1080px */}
      <button 
        className="lg:hidden p-2 rounded-full hover:bg-gray-100"
        onClick={() => setSearchOpen(true)}
      >
        <FiSearch className="text-gray-600 text-xl" />
      </button>

      {/* Full search bar - visible on screens >1080px */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent w-full lg:w-64"
        />
      </div>

      {/* Search popup overlay - appears when icon is clicked on <1080px */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-[#00493E] bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-10 py-4 border-0 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-green-900 w-full"
                autoFocus
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setSearchOpen(false)}
              >
                ✕
              </button>
            </div>
            {/* Optional search results container */}
            <div className="border-t border-gray-200 p-2 max-h-60 overflow-y-auto">
              {/* Search results would go here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
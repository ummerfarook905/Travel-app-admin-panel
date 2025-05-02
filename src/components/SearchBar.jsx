import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="hidden md:block relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent w-full md:w-64"
      />
    </div>
  );
};

export default SearchBar;
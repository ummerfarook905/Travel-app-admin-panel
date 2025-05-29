import { FiSearch, FiX } from 'react-icons/fi';
import { useState, useRef } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearch) onSearch(val);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
    searchInputRef.current?.focus();
  };

  return (
    <div className="relative w-full" style={{ maxWidth: '300px' }}>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
      <input
        ref={searchInputRef}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="pl-10 pr-8 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent w-full transition-all"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 inset-y-0 text-gray-400 hover:text-gray-600"
          aria-label="Clear search"
        >
          <FiX size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
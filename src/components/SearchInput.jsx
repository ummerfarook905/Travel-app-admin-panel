import { FiSearch, FiX } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

const SearchInput = ({ onSearch, placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const searchInputRef = useRef(null);

  // Debounce logic
  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms debounce

    return () => clearTimeout(delay);
  }, [query]);

  // Trigger search only after debounce
  useEffect(() => {
    if (onSearch) onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleChange = (e) => setQuery(e.target.value);

  const handleClear = () => {
    setQuery('');
    setDebouncedQuery('');
    if (onSearch) onSearch('');
    searchInputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-[300px]">
      {/* Search icon */}
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>

      {/* Input field */}
      <input
        ref={searchInputRef}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="pl-10 pr-8 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent w-full transition-all"
      />

      {/* Clear button */}
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

export default SearchInput;

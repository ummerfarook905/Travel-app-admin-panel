import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = ({ 
  headers,
  rows,
  actions = [],
  idColor = "text-[#00493E]",
  nameAsLink = false,
  onNameClick
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const tableRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (rowIndex, e) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === rowIndex ? null : rowIndex);
  };

  const handleNameClick = (row, e) => {
    e.preventDefault();
    if (onNameClick) {
      onNameClick(row);
    } else {
      navigate(`/adventures/${row.id}`);
    }
  };

  const handleActionClick = (action, row, e) => {
    e.stopPropagation();
    action.handler?.(row);
    setActiveMenu(null);
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm" ref={tableRef}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header.label || header}
              </th>
            ))}
            {actions.length > 0 && (
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 relative">
              {headers.map((header, colIndex) => {
                const cellData = row[header.key || colIndex];
                const cellContent = header.render 
                  ? header.render(cellData, row) 
                  : cellData;

                return (
                  <td 
                    key={colIndex}
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      header.key === 'id' ? idColor : 'text-gray-900'
                    }`}
                  >
                    {nameAsLink && header.key === 'name' ? (
                      <button
                        onClick={(e) => handleNameClick(row, e)}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {cellContent}
                      </button>
                    ) : cellContent}
                  </td>
                );
              })}
              
              {actions.length > 0 && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="relative flex justify-end">
                    <button
                      onClick={(e) => toggleMenu(rowIndex, e)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                      aria-expanded={activeMenu === rowIndex}
                      aria-haspopup="true"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                    {activeMenu === rowIndex && (
                      <div className="origin-top-right fixed right-8 mt-6 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1">
                          {actions.map((action, index) => (
                            <button
                              key={index}
                              onClick={(e) => handleActionClick(action, row, e)}
                              className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${
                                action.variant === 'danger' 
                                  ? 'text-red-600' 
                                  : action.variant === 'success'
                                    ? 'text-green-600'
                                    : 'text-gray-700'
                              }`}
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
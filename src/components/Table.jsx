import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = ({
  headers,
  rows,
  actions = [],
  idColor = "text-[#00493E] font-semibold",
  nameAsLink = false,
  onNameClick
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();
  const tableRef = useRef(null);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle dropdown menu
  const toggleMenu = (rowIndex, e) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === rowIndex ? null : rowIndex);
  };

  // Handle name click for link or default redirect
  const handleNameClick = (row, e) => {
    e.preventDefault();
    if (onNameClick) onNameClick(row);
    else navigate(`/adventures/${row.id}`);
  };

  // Handle action button click
  const handleActionClick = (action, row, e) => {
    e.stopPropagation();
    action.handler?.(row);
    setActiveMenu(null);
  };

  // Handle row checkbox selection
  const handleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // Select/Deselect all rows
  const handleSelectAll = () => {
    if (selectedRows.length === rows.length) setSelectedRows([]);
    else setSelectedRows(rows.map((_, index) => index));
  };

  // Checkbox accent color
  const greenCheckboxStyle = {
    accentColor: '#00493E',
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <div className="bg-white rounded-lg">
        <table className="min-w-full divide-y divide-gray-200" ref={tableRef}>
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-[#00493E]  tracking-wider">
                <input
                  type="checkbox"
                  checked={selectedRows.length === rows.length}
                  onChange={handleSelectAll}
                  style={greenCheckboxStyle}
                  className="cursor-pointer"

                />
              </th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-sm font-semibold text-[#00493E]  tracking-wider"
                >
                  {header.label || header}
                </th>
              ))}
              {actions.length > 0 && (
                <th className="px-6 py-3 text-right text-sm font-semibold text-[#00493E]  tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 relative">
                {/* Selection checkbox */}
                <td className="relative px-4 py-4 whitespace-nowrap text-sm">
                  {selectedRows.includes(rowIndex) && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: '4px',
                        backgroundColor: '#00493E',
                      }}
                    />
                  )}
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(rowIndex)}
                    onChange={() => handleSelectRow(rowIndex)}
                    style={greenCheckboxStyle}
                    className="[&:hover]:opacity-100 cursor-pointer"
                  />
                </td>

                {/* Table body cells */}
                {headers.map((header, colIndex) => {
                  const cellData = row[header.key || colIndex];
                  const cellContent = header.render
                    ? header.render(cellData, row)
                    : cellData;

                  return (
                    <td
                      key={colIndex}
                      className={`px-6 py-4 whitespace-nowrap text-sm ${
                        header.key === 'id' ? idColor : 'text-gray-400'
                      }`}
                    >
                      {nameAsLink &&
                      (header.key === 'name' || header.key === 'adventureName') ? (
                        <button
                          onClick={(e) => handleNameClick(row, e)}
                          className="flex items-center space-x-2 text-[#303972]  "
                        >
                          {/* Profile picture circle */}
                          <div className="w-8 h-8 rounded-full bg-[#00493E] flex items-center justify-center overflow-hidden">
                            <img
                              src={row.profilePicture || '/default-profile.png'}
                              alt={`${cellContent} profile`}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          </div>
                          <span className="font-semibold">{cellContent}</span>
                        </button>
                      ) : (
                        cellContent
                      )}
                    </td>
                  );
                })}

                {/* Actions dropdown */}
                {actions.length > 0 && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative flex justify-end">
                      <button
                        onClick={(e) => toggleMenu(rowIndex, e)}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                        aria-expanded={activeMenu === rowIndex}
                        aria-haspopup="true"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <circle cx="5" cy="10" r="1.5" />
                          <circle cx="10" cy="10" r="1.5" />
                          <circle cx="15" cy="10" r="1.5" />
                        </svg>

                      </button>

                     {activeMenu === rowIndex && (
                        <div
                          className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50
                                    transition duration-200 ease-in-out transform scale-95 origin-top-right animate-scaleIn"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                        <div className="py-1">
                          {actions.map((action, index) => (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                            <button
                              key={index}
                              onClick={(e) => handleActionClick(action, row, e)}
                              className={`flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                                action.variant === 'danger'
                                  ? 'text-red-600'
                                  : action.variant === 'success'
                                  ? 'text-[#00493E]'
                                  : 'text-gray-700'
                              }`}
                              role="menuitem"
                              tabIndex="-1"
                            >
                              {/* Optional icon for better UX */}
                              {action.icon && (
                                <span className="mr-2 text-lg text-gray-400">
                                  {action.icon}
                                </span>
                              )}
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
    </div>
  );
};

export default Table;

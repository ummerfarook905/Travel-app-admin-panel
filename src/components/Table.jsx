import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = ({ 
  headers, 
  rows, 
  onEdit, 
  onDelete,
  idColor = "text-[#00493E]",
  nameAsLink = false,
  onNameClick // Add this new prop
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (rowIndex, e) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === rowIndex ? null : rowIndex);
  };

  const handleNameClick = (row, e) => {
    e.preventDefault();
    if (onNameClick) {
      onNameClick(row);
    } else {
      // Default behavior if no onNameClick provided
      navigate(`/adventures/${row.id}`);
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
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
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
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
              
              {headers.some(h => h.key === 'action') && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="relative">
                    <button
                      onClick={(e) => toggleMenu(rowIndex, e)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                    {activeMenu === rowIndex && (
                      <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1">
                          <button
                            onClick={() => onEdit(row)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => onDelete(row)}
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                          >
                            Delete
                          </button>
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
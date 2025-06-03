import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from './Toast';
import ConfirmationDialog from './ConfirmationDialog';
import useConfirmDialog from '../hooks/useConfirmDialog';

const Table = ({
  headers,
  rows,
  actions = [],
  idColor = "text-[#00493E] font-semibold",
  nameAsLink = false,
  onNameClick,
  showProfilePicture = true,
}) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const navigate = useNavigate();
  const tableRef = useRef(null);

  const {
    isOpen: isConfirmOpen,
    openDialog,
    confirm,
    closeDialog,
    payload,
  } = useConfirmDialog();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = (rowIndex, e) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === rowIndex ? null : rowIndex);
  };

  const handleNameClick = (row, e) => {
    e.preventDefault();
    onNameClick ? onNameClick(row) : navigate(`/adventures/${row.id}`);
  };

  const showSuccessToast = (message) => {
    setToastMessage(message);
    setToastType('success'); // 🔁 UPDATED
    setShowToast(true);
  };

  const showErrorToast = (message) => {
    setToastMessage(message);
    setToastType('error'); // 🔁 UPDATED
    setShowToast(true);
  };

  const handleActionClick = (action, row, e) => {
    e.stopPropagation();
    setActiveMenu(null);

    if (action.requireConfirmation) {
      openDialog(() => {
        action.handler?.(row);
        // Toast now shown in confirm, not here
      }, {
        row,
        action,
        confirmationMessage: action.confirmationMessage || `Are you sure you want to ${action.label.toLowerCase()}?`
      });
    } else {
      action.handler?.(row);
      showSuccessToast(`${action.label} action completed`);
    }
  };

  // 🔁 UPDATED: show toast after confirmed action
  useEffect(() => {
    if (isConfirmOpen || !payload?.action || !payload?.row) return;
    const handleConfirmed = async () => {
      try {
        await payload.action.handler?.(payload.row);
        showSuccessToast(`${payload.action.label} action completed`);
      } catch (error) {
        showErrorToast(`${payload.action.label} failed`);
      }
    };
    confirm(handleConfirmed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfirmOpen]);

  const handleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSelectAll = () => {
    setSelectedRows(selectedRows.length === rows.length ? [] : rows.map((_, index) => index));
  };

  const greenCheckboxStyle = {
    accentColor: '#00493E',
  };

  return (
    <div className="relative pt-4">
      {/* 🔁 UPDATED: Toast type is dynamic now */}
      {showToast && (
        <Toast
          message={toastMessage}
          onclose={() => setShowToast(false)}
          type={toastType}
        />
      )}

      <div className="hidden md:block overflow-x-auto rounded-lg shadow-sm">
        <div className="bg-white rounded-lg">
          <table className="min-w-full divide-y divide-gray-200" ref={tableRef}>
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[#00493E] tracking-wider">
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
                    className="px-6 py-3 text-left text-sm font-semibold text-[#00493E] tracking-wider "
                  >
                    {header.label || header}
                  </th>
                ))}
                {actions.length > 0 && (
                  <th className="px-6 py-3 text-right text-sm font-semibold text-[#00493E] tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50 relative">
                  <td className="relative px-4 py-4 whitespace-nowrap text-sm">
                    {selectedRows.includes(rowIndex) && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-[#00493E]" />
                    )}
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(rowIndex)}
                      onChange={() => handleSelectRow(rowIndex)}
                      style={greenCheckboxStyle}
                      className="cursor-pointer"
                    />
                  </td>

                  {headers.map((header, colIndex) => {
                    const cellData = row[header.key || colIndex];
                    const cellContent = header.render ? header.render(cellData, row) : cellData;

                    return (
                      <td
                        key={colIndex}
                        className={`px-6 py-4 whitespace-nowrap text-sm  ${
                          header.key === 'id' ? idColor : 'text-gray-700'
                        }`}
                      >
                        {nameAsLink && (header.key === 'name' || header.key === 'adventureName') ? (
                          <button
                            onClick={(e) => handleNameClick(row, e)}
                            className="flex items-center space-x-2 text-[#303972]"
                          >
                            {showProfilePicture && (
                              <div className="w-8 h-8 rounded-full bg-[#00493E] flex items-center justify-center overflow-hidden">
                                <img
                                  src={row.profilePicture || '/default-profile.png'}
                                  alt={`${cellContent} profile`}
                                  className="w-6 h-6 rounded-full object-cover"
                                />
                              </div>
                            )}
                            <span className="font-semibold cursor-pointer">{cellContent}</span>
                          </button>
                        ) : (
                          cellContent
                        )}
                      </td>
                    );
                  })}

                  {actions.length > 0 && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="relative flex justify-end ">
                        <button
                          onClick={(e) => toggleMenu(rowIndex, e)}
                          className="text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="5" cy="10" r="1.5" />
                            <circle cx="10" cy="10" r="1.5" />
                            <circle cx="15" cy="10" r="1.5" />
                          </svg>
                        </button>

                        {activeMenu === rowIndex && (
                          <div
                            className="absolute bottom right-5 transform -translate-y-1/2 mb-16 w-48 bg-white rounded-lg shadow-lg ring-1 z-50 animate-scaleIn"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                          >
                            <div className="py-1">
                              {actions.map((action, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => handleActionClick(action, row, e)}
                                  className={`flex items-center px-4 py-2 text-sm w-full text-left hover:bg-gray-100 focus:outline-none cursor-pointer ${
                                    action.variant === 'danger'
                                      ? 'text-red-600'
                                      : action.variant === 'success'
                                      ? 'text-green-600'
                                      : 'text-gray-700'
                                  }`}
                                  role="menuitem"
                                >
                                  {action.icon && (
                                    <span className="mr-2 text-lg text-gray-400">{action.icon}</span>
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
      {/* Mobile card layout */}
          <div className="block md:hidden  grid grid-cols-1 gap-4 mt-4">
  {rows.map((row, rowIndex) => (
    <div key={rowIndex} className="bg-white rounded-lg shadow-md p-4">
      {headers.map((header, colIndex) => {
        const cellData = row[header.key || colIndex];
        const cellContent = header.render ? header.render(cellData, row) : cellData;
        return (
          <div key={colIndex} className="mb-2">
            <span className="block text-sm font-medium text-gray-500">{header.label || header}</span>
            <span className={`block text-sm ${header.key === 'id' ? idColor : 'text-gray-800'}`}>
              {nameAsLink && (header.key === 'name' || header.key === 'adventureName') ? (
                <button
                  onClick={(e) => handleNameClick(row, e)}
                  className="text-[#303972] font-semibold"
                >
                  {cellContent}
                </button>
              ) : (
                cellContent
              )}
            </span>
          </div>
        );
      })}
      {actions.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={(e) => handleActionClick(action, row, e)}
              className={`px-3 py-1 rounded text-sm font-medium focus:outline-none ${
                action.variant === 'danger'
                  ? 'bg-red-100 text-red-600 hover:bg-red-200'
                  : action.variant === 'success'
                  ? 'bg-green-100 text-green-600 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
              </div>
            ))}
          </div>
      {/* 🔁 UPDATED */}
      {isConfirmOpen && (
        <ConfirmationDialog
          message={payload?.confirmationMessage}
          onCancel={closeDialog}
          onConfirm={() => confirm()} // we handle toast in effect
          variant={payload?.action?.confirmationVariant || 'danger'}
        />
      )}
    </div>
  );
};

export default Table;

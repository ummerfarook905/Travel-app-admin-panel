import React from 'react';
import { FiPhone, FiMail, FiMoreVertical, FiCheck, FiEdit, FiTrash2 } from 'react-icons/fi';

/**
 * UserTable Component - Responsive user data display component
 * Shows table on medium+ screens (≥768px) and cards on small screens (<768px)
 * Handles user selection, actions, and contact information display
 */
const UserTable = ({
  // ==== Component Props ====
  filteredUsers,        // Filtered list of users to display
  selectedUsers,        // Set of selected user IDs
  isAllSelected,        // Boolean if all users are selected
  activeActionMenu,     // ID of user with active action menu
  toggleSelection,      // Toggle individual user selection
  toggleAllSelection,   // Toggle all users selection
  handleActionClick,    // Handle action menu click
  handleUpdate,         // Initiate user update
  handleDelete          // Initiate user deletion
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* ==== Desktop/Tablet Table View (≥768px) ==== */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              {/* Select All Checkbox */}
              <th className="w-12 px-4 py-4">
                <div 
                  onClick={toggleAllSelection}
                  className={`
                    w-5 h-5 border-2 rounded-sm cursor-pointer mx-auto
                    ${isAllSelected ? 
                      'bg-green-600 border-green-600' : 
                      'border-gray-300 hover:border-green-400'}
                  `}
                >
                  {isAllSelected && <FiCheck className="w-4 h-4 text-white mx-auto"/>}
                </div>
              </th>
              
              {/* Column Headers */}
              <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">ID</th>
              <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">Joined On</th>
              <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">Updated On</th>
              <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">Contact</th>
              <th className="px-4 md:px-6 py-4 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">
            {filteredUsers.map((user) => {
              const isSelected = selectedUsers.has(user.id);
              return (
                <tr 
                  key={user.id}
                  className={`
                    transition-all duration-100
                    ${isSelected ? 'bg-green-50' : 'hover:bg-gray-50 hover:shadow-sm'}
                    ${isSelected ? 'border-l-4 border-green-600' : ''}
                  `}
                >
                  {/* Selection Checkbox */}
                  <td className="px-4 py-4">
                    <div 
                      onClick={() => toggleSelection(user.id)}
                      className={`
                        w-5 h-5 border-2 rounded-sm cursor-pointer
                        ${isSelected ? 
                          'bg-green-600 border-green-600' : 
                          'border-gray-300 hover:border-green-400'}
                      `}
                    >
                      {isSelected && <FiCheck className="w-4 h-4 text-white mx-auto"/>}
                    </div>
                  </td>

                  {/* User Data */}
                  <td className="px-4 md:px-6 py-4 font-medium text-gray-900">{user.name}</td>
                  <td className="px-4 md:px-6 py-4 text-gray-500">{user.id}</td>
                  <td className="px-4 md:px-6 py-4 text-gray-500">{user.joinedOn}</td>
                  <td className="px-4 md:px-6 py-4 text-gray-500">{user.updatedOn}</td>

                  {/* Contact Information */}
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center space-x-4">
                      <div className="group relative">
                        <FiPhone className="text-green-500 hover:text-green-600 cursor-pointer"/>
                        <span className="hidden group-hover:block absolute left-0 -top-8 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
                          {user.contact.phone}
                        </span>
                      </div>
                      <div className="group relative">
                        <FiMail className="text-green-500 hover:text-green-600 cursor-pointer"/>
                        <span className="hidden group-hover:block absolute left-0 -top-8 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
                          {user.contact.email}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Action Menu */}
                  <td className="px-4 md:px-6 py-4 relative">
                    <div className="flex justify-start">
                      <button 
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleActionClick(user.id);
                        }}
                      >
                        <FiMoreVertical className="w-5 h-5" />
                      </button>
                      
                      {activeActionMenu === user.id && (
                        <div className="absolute right-4 z-10 mt-8 w-32 bg-white rounded-md shadow-lg border border-gray-200">
                          <div className="py-1">
                            <button
                              onClick={() => handleUpdate(user.id)}
                              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                            >
                              <FiEdit className="mr-2" /> Edit
                            </button>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                            >
                              <FiTrash2 className="mr-2" /> Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* ==== Mobile Card View (<768px) ==== */}
      <div className="md:hidden p-4 space-y-4">
        {filteredUsers.map((user) => {
          const isSelected = selectedUsers.has(user.id);
          return (
            <div 
              key={user.id}
              className={`
                p-4 rounded-lg border
                ${isSelected ? 'border-green-600 bg-green-50' : 'border-gray-200'}
                relative
              `}
            >
              {/* Selection Checkbox */}
              <div 
                onClick={() => toggleSelection(user.id)}
                className={`
                  absolute top-4 right-4
                  w-5 h-5 border-2 rounded-sm cursor-pointer
                  ${isSelected ? 
                    'bg-green-600 border-green-600' : 
                    'border-gray-300 hover:border-green-400'}
                `}
              >
                {isSelected && <FiCheck className="w-4 h-4 text-white mx-auto"/>}
              </div>

              {/* User Information */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{user.name}</h3>
                </div>
                <p className="text-sm text-gray-500">{user.id}</p>
                <div className="text-sm text-gray-500">
                  <p>Joined: {user.joinedOn}</p>
                  <p>Updated: {user.updatedOn}</p>
                </div>

                {/* Contact Information */}
                <div className="flex items-center space-x-4 pt-2">
                  <div className="group relative">
                    <FiPhone className="text-green-500 hover:text-green-600 cursor-pointer"/>
                    <span className="hidden group-hover:block absolute left-0 -top-8 px-2 py-1 bg-gray-800 text-white text-xs rounded-md">
                      {user.contact.phone}
                    </span>
                  </div>
                  <div className="group relative">
                    <FiMail className="text-green-500 hover:text-green-600 cursor-pointer"/>
                    <span className="hidden group-hover:block absolute left-0 -top-8 px-2 py-1 bg-gray-800 text-white text-xs rounded-md">
                      {user.contact.email}
                    </span>
                  </div>
                </div>

                {/* Action Menu */}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <button 
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleActionClick(user.id);
                    }}
                  >
                    <FiMoreVertical className="w-5 h-5" />
                  </button>
                  
                  {activeActionMenu === user.id && (
                    <div className="absolute right-4 z-10 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200">
                      <div className="py-1">
                        <button
                          onClick={() => handleUpdate(user.id)}
                          className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                          <FiEdit className="mr-2" /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                        >
                          <FiTrash2 className="mr-2" /> Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserTable;
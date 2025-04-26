import React, { useState, useEffect, useCallback } from 'react';
import Button from '../components/Button';
import SearchInput from '../components/SearchInput';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserupdateForm';
import ConfirmationDialog from '../components/ConfirmationDialog';
import Toast from '../components/Toast';
import { debounce } from 'lodash';
import { FiPlus } from 'react-icons/fi';

const mockUsers = [ 
  {
    id: '#123456789',
    name: 'Somoruba William',
    joinedOn: 'March 26, 2021',
    updatedOn: 'March 28, 2022',
    contact: {
      phone: '+1 234 567 890',
      email: 'william@example.com'
    }
  },
  {
    id: '#123456781',
    name: 'Anjana George',
    joinedOn: 'April 26, 2023',
    updatedOn: 'March 28, 2025',
    contact: {
      phone: '+1 234 567 890',
      email: 'anjana@example.com'
    }
  },
  {
    id: '#123456782',
    name: 'Vinisha Vijayakumar',
    joinedOn: 'April26, 2024',
    updatedOn: 'April 28, 2025',
    contact: {
      phone: '+1 234 567 890',
      email: 'vinisha@example.com'
    }
  },
];

export default function Users() {
  // ====State Management Section====
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [activeActionMenu, setActiveActionMenu] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // ====Search and Filtering Logic===
  const debouncedSearch = useCallback(
    debounce((query) => {
      const filtered = mockUsers.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.id.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, 300),
    []
  );

  //==== Selection Handlers====
  const toggleSelection = (userId) => {
    setSelectedUsers(prev => {
      const next = new Set(prev);
      next.has(userId) ? next.delete(userId) : next.add(userId);
      return next;
    });
  };

  const toggleAllSelection = () => {
    const allSelected = selectedUsers.size === filteredUsers.length;
    if (allSelected) {
      setSelectedUsers(new Set());
    } else {
      const allIds = new Set(filteredUsers.map(user => user.id));
      setSelectedUsers(allIds);
    }
  };

  // Derived value for select-all checkbox state
  const isAllSelected = filteredUsers.length > 0 && 
    selectedUsers.size === filteredUsers.length;

  //==== User Actions Handlers====
  const handleActionClick = (userId) => {
    setActiveActionMenu(activeActionMenu === userId ? null : userId);
  };

  const handleDelete = (userId) => {
    setUserToDelete(userId);
    setShowConfirmDialog(true);
    setActiveActionMenu(null);
  };

  const confirmDelete = () => {
    const updatedUsers = filteredUsers.filter(user => user.id !== userToDelete);
    setFilteredUsers(updatedUsers);
    setShowConfirmDialog(false);
    setToastMessage('User deleted successfully');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdate = (userId) => {
    const userToEdit = filteredUsers.find(user => user.id === userId);
    setEditingUser(userToEdit);
    setShowUserForm(true);
  };

  const handleSave = (savedUser) => {
    if(editingUser) {
      setFilteredUsers(prevUsers => 
        prevUsers.map(user => user.id === savedUser.id ? savedUser : user)
      );
    } else {
      setFilteredUsers(prevUsers => [...prevUsers, savedUser]);
    }
    setEditingUser(null);
    setShowUserForm(false);
  };

  // Side Effects
  useEffect(() => {
    const handleClickOutside = () => setActiveActionMenu(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => debouncedSearch.cancel();
  }, [searchQuery, debouncedSearch]);

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Made responsive */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center mb-6">
          <div className="w-full md:flex-1 md:max-w-xl">
            <SearchInput
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg"
            />
          </div>
          <Button 
            variant="primary" 
            onClick={() => {
              setEditingUser(null);
              setShowUserForm(true);
            }}
            className="w-full md:w-auto text-white bg-[#00493E] border border-[#00493E] rounded-[50px] hover:bg-[#00493E]/150 transition-all px-6 py-2.5 shadow-sm flex justify-center md:justify-around items-center"
          >
            <FiPlus className="w-5 h-5 mr-2" />New User
          </Button>
        </div>

        {/* Main Content - User Table (Responsive by default) */}
        <UserTable
          filteredUsers={filteredUsers}
          selectedUsers={selectedUsers}
          isAllSelected={isAllSelected}
          activeActionMenu={activeActionMenu}
          toggleSelection={toggleSelection}
          toggleAllSelection={toggleAllSelection}
          handleActionClick={handleActionClick}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />

        {/* Modals and Overlays */}
        {showUserForm && (
          <UserForm
            user={editingUser}
            onSave={handleSave}
            onClose={() => {
              setShowUserForm(false);
              setEditingUser(null);
            }}
            isEditing={!!editingUser}
          />
        )}

        {showConfirmDialog && (
          <ConfirmationDialog
            message="Are you sure you want to delete this user?"
            onConfirm={confirmDelete}
            onCancel={() => setShowConfirmDialog(false)}
          />
        )}

        {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
      </div>
    </div>
  );
}
// contexts/UserContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';
import { debounce } from 'lodash';

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

const UserContext = createContext();

export function UserProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [activeActionMenu, setActiveActionMenu] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Search and Filtering Logic
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

  // Selection Handlers
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

  // User Actions Handlers
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

  const openUserForm = () => {
    setEditingUser(null);
    setShowUserForm(true);
  };

  const value = {
    searchQuery,
    setSearchQuery,
    filteredUsers,
    selectedUsers,
    activeActionMenu,
    editingUser,
    showUserForm,
    showConfirmDialog,
    userToDelete,
    toastMessage,
    debouncedSearch,
    toggleSelection,
    toggleAllSelection,
    isAllSelected: filteredUsers.length > 0 && selectedUsers.size === filteredUsers.length,
    handleActionClick,
    handleDelete,
    confirmDelete,
    handleUpdate,
    handleSave,
    openUserForm,
    setToastMessage,
    setShowConfirmDialog,
    setShowUserForm,
    setEditingUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUsers() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
}
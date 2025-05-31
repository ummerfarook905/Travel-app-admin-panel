import React, { createContext, useContext, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const [allUsers, setAllUsers] = useState([
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
  ]);

  const [filteredUsers, setFilteredUsers] = useState(allUsers);
  const [selectedUsers, setSelectedUsers] = useState(new Set());
  const [activeActionMenu, setActiveActionMenu] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Search and Filtering Logic
  const debouncedSearch = useCallback(
    debounce((query) => {
      const filtered = allUsers.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.id.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, 300),
    [allUsers]
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
    const updatedUsers = allUsers.filter(user => user.id !== userToDelete);
    setAllUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setShowConfirmDialog(false);
    // setToastMessage('User deleted successfully');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdate = (userId) => {
    const cleanId = userId.startsWith('#') ? userId.slice(1) : userId;
    const userToEdit = allUsers.find(user => user.id === userId);
    setEditingUser(userToEdit);
    navigate(`/users/edit/${cleanId}`);
  };

  const handleSave = (savedUser) => {
    if (editingUser) {
      setAllUsers(prev =>
        prev.map(user => user.id === savedUser.id ? savedUser : user)
      );
      setFilteredUsers(prev =>
        prev.map(user => user.id === savedUser.id ? savedUser : user)
      );
    } else {
      setAllUsers(prev => [...prev, savedUser]);
      setFilteredUsers(prev => [...prev, savedUser]);
    }
    setEditingUser(null);
    navigate('/users');
  };

  const openUserForm = (isEditing = false) => {
    if (!isEditing) {
      setEditingUser(null);
    }
    navigate('/users/new');
  };

  // Derived value
  const isAllSelected = filteredUsers.length > 0 &&
    selectedUsers.size === filteredUsers.length;

  const value = {
    searchQuery,
    setSearchQuery,
    filteredUsers,
    selectedUsers,
    activeActionMenu,
    setActiveActionMenu,
    editingUser,
    showConfirmDialog,
    userToDelete,
    toastMessage,
    debouncedSearch,
    toggleSelection,
    toggleAllSelection,
    isAllSelected,
    handleActionClick,
    handleDelete,
    confirmDelete,
    handleUpdate,
    handleSave,
    openUserForm,
    setToastMessage,
    setShowConfirmDialog,
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

import React, { useEffect } from 'react';
import Button from '../components/Button';
import SearchInput from '../components/SearchInput';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';
import ConfirmationDialog from '../components/ConfirmationDialog';
import Toast from '../components/Toast';
import { FiPlus } from 'react-icons/fi';
import { useUsers } from '../context/UserContext';

export default function Users() {
  const {
    searchQuery,
    setSearchQuery,
    filteredUsers,
    selectedUsers,
    activeActionMenu,
    editingUser,
    showUserForm,
    showConfirmDialog,
    toastMessage,
    debouncedSearch,
    toggleSelection,
    toggleAllSelection,
    isAllSelected,
    handleActionClick,
    handleDelete,
    handleUpdate,
    confirmDelete,
    handleSave,
    openUserForm,
    setToastMessage,
    setShowConfirmDialog,
    setShowUserForm,
    setEditingUser
  } = useUsers();

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
            onClick={openUserForm}
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
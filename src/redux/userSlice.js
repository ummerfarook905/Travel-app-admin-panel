import { createSlice } from '@reduxjs/toolkit';
import { debounce } from 'lodash';

const initialUsers = [
  {
    id: '#123456789',
    name: 'Somoruba William',
    image: 'https://via.placeholder.com/40',
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
    image: 'https://via.placeholder.com/40',
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
    image: 'https://via.placeholder.com/40',
    joinedOn: 'April 26, 2024',
    updatedOn: 'April 28, 2025',
    contact: {
      phone: '+1 234 567 890',
      email: 'vinisha@example.com'
    }
  },
];

const userSlice = createSlice({
  name: 'user',
  initialState: {
    allUsers: initialUsers,
    filteredUsers: initialUsers,
    selectedUsers: new Set(),
    activeActionMenu: null,
    editingUser: null,
    showConfirmDialog: false,
    userToDelete: null,
    toastMessage: null,
    searchQuery: ''
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    filterUsers(state, action) {
      const query = action.payload.toLowerCase();
      state.filteredUsers = state.allUsers.filter(
        user =>
          user.name.toLowerCase().includes(query) ||
          user.id.toLowerCase().includes(query)
      );
    },
    toggleSelection(state, action) {
      const userId = action.payload;
      if (state.selectedUsers.has(userId)) {
        state.selectedUsers.delete(userId);
      } else {
        state.selectedUsers.add(userId);
      }
    },
    toggleAllSelection(state) {
      const allSelected =
        state.selectedUsers.size === state.filteredUsers.length;
      if (allSelected) {
        state.selectedUsers = new Set();
      } else {
        state.selectedUsers = new Set(state.filteredUsers.map(u => u.id));
      }
    },
    setActiveActionMenu(state, action) {
      state.activeActionMenu =
        state.activeActionMenu === action.payload ? null : action.payload;
    },
    deleteUser(state, action) {
      const userId = action.payload;
      state.allUsers = state.allUsers.filter(user => user.id !== userId);
      state.filteredUsers = state.filteredUsers.filter(user => user.id !== userId);
      state.selectedUsers.delete(userId);
    },
    setEditingUser(state, action) {
      state.editingUser = action.payload;
    },
    saveUser(state, action) {
      const savedUser = action.payload;
      const index = state.allUsers.findIndex(user => user.id === savedUser.id);
      if (index !== -1) {
        state.allUsers[index] = savedUser;
      } else {
        state.allUsers.push(savedUser);
      }
      state.filteredUsers = state.allUsers;
    },
    setShowConfirmDialog(state, action) {
      state.showConfirmDialog = action.payload;
    },
    setUserToDelete(state, action) {
      state.userToDelete = action.payload;
    },
    setToastMessage(state, action) {
      state.toastMessage = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  filterUsers,
  toggleSelection,
  toggleAllSelection,
  setActiveActionMenu,
  deleteUser,
  setEditingUser,
  saveUser,
  setShowConfirmDialog,
  setUserToDelete,
  setToastMessage,
} = userSlice.actions;

export default userSlice.reducer;

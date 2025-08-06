// // src/redux/usersSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   users: [
//     {
//       id: '#123456789',
//       name: 'Somoruba William',
//       joinedOn: 'March 26, 2021',
//       updatedOn: 'March 28, 2022',
//       contact: {
//         phone: '+1 234 567 890',
//         email: 'william@example.com'
//       }
//     },
//     {
//       id: '#123456781',
//       name: 'Anjana George',
//       joinedOn: 'April 26, 2023',
//       updatedOn: 'March 28, 2025',
//       contact: {
//         phone: '+1 234 567 890',
//         email: 'anjana@example.com'
//       }
//     },
//     {
//       id: '#123456782',
//       name: 'Vinisha Vijayakumar',
//       joinedOn: 'April 26, 2024',
//       updatedOn: 'April 28, 2025',
//       contact: {
//         phone: '+1 234 567 890',
//         email: 'vinisha@example.com'
//       }
//     },
//   ],
// };

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     addUser: (state, action) => {
//       state.users.push(action.payload);
//     },
//     updateUser: (state, action) => {
//       const index = state.users.findIndex(user => user.id === action.payload.id);
//       if (index !== -1) state.users[index] = action.payload;
//     },
//     deleteUser: (state, action) => {
//       state.users = state.users.filter(user => user.id !== action.payload);
//     },
//   },
// });

// export const { addUser, updateUser, deleteUser } = usersSlice.actions;
// export default usersSlice.reducer;












import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://759842bf-625b-4075-a472-726abeeab20e.mock.pstmn.io/api/admin/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchQuery: '',
    filteredUsers: [],
    selectedUsers: [],
    activeActionMenu: null,
    editingUser: null,
    showConfirmDialog: false,
    userToDelete: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      const query = action.payload.toLowerCase();
      state.filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.id.toLowerCase().includes(query)
      );
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.filteredUsers.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
        state.filteredUsers[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.filteredUsers = state.filteredUsers.filter(user => user.id !== action.payload);
      state.selectedUsers = state.selectedUsers.filter(id => id !== action.payload);
    },
    setEditingUser: (state, action) => {
      state.editingUser = action.payload;
    },
    clearEditingUser: (state) => {
      state.editingUser = null;
    },
    toggleSelection: (state, action) => {
      const id = action.payload;
      if (state.selectedUsers.includes(id)) {
        state.selectedUsers = state.selectedUsers.filter(uid => uid !== id);
      } else {
        state.selectedUsers.push(id);
      }
    },
    toggleAllSelection: (state) => {
      if (
        state.selectedUsers.length === state.filteredUsers.length &&
        state.filteredUsers.length > 0
      ) {
        state.selectedUsers = [];
      } else {
        state.selectedUsers = state.filteredUsers.map(user => user.id);
      }
    },
    setActiveActionMenu: (state, action) => {
      state.activeActionMenu =
        state.activeActionMenu === action.payload ? null : action.payload;
    },
    showConfirmDialog: (state, action) => {
      state.showConfirmDialog = true;
      state.userToDelete = action.payload;
    },
    hideConfirmDialog: (state) => {
      state.showConfirmDialog = false;
      state.userToDelete = null;
    },
    confirmDelete: (state) => {
      state.users = state.users.filter(user => user.id !== state.userToDelete);
      state.filteredUsers = state.filteredUsers.filter(user => user.id !== state.userToDelete);
      state.selectedUsers = state.selectedUsers.filter(id => id !== state.userToDelete);
      state.userToDelete = null;
      state.showConfirmDialog = false;
    },
    initializeFilter: (state) => {
      state.filteredUsers = state.users;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {
  setSearchQuery,
  addUser,
  updateUser,
  deleteUser,
  setEditingUser,
  clearEditingUser,
  toggleSelection,
  toggleAllSelection,
  setActiveActionMenu,
  showConfirmDialog,
  hideConfirmDialog,
  confirmDelete,
  initializeFilter,
} = usersSlice.actions;

export default usersSlice.reducer;

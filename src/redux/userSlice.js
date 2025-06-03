// src/redux/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
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
      joinedOn: 'April 26, 2024',
      updatedOn: 'April 28, 2025',
      contact: {
        phone: '+1 234 567 890',
        email: 'vinisha@example.com'
      }
    },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) state.users[index] = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

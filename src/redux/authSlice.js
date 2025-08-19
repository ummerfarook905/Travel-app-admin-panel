// src/redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async login simulation
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (password === "error") {
      return rejectWithValue("Invalid credentials");
    }

    const dummyUser = { email, role: "admin" };

    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      sessionStorage.removeItem("user");
    } else {
      sessionStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.removeItem("user");
    }

    return dummyUser;
  }
);

// Proper async initializeAuth
export const initializeAuth = createAsyncThunk(
  "auth/initializeAuth",
  async () => {
    const localUser = localStorage.getItem("user");
    const sessionUser = sessionStorage.getItem("user");

    return localUser
      ? JSON.parse(localUser)
      : sessionUser
      ? JSON.parse(sessionUser)
      : null;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    isInitialized: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      //  initializeAuth handlers
      .addCase(initializeAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isInitialized = true;
      })
      .addCase(initializeAuth.rejected, (state) => {
        state.user = null;
        state.isInitialized = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;















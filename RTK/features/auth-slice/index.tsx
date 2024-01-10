import { AppAuth } from '@/lib/types';
import { createSlice } from '@reduxjs/toolkit';

const AuthInitialState: AppAuth = {
  isLoggedIn: false,
  user: null,
  registrationData: null,
  loginData: null,
  isActivated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    register: (state, action) => {
      state.registrationData = action.payload;
    },
    loginData: (state, action) => {
      state.loginData = action.payload;
    },
    activate: (state) => {
      state.isActivated = true;
    },
  },
});

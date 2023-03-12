import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  refreshUser,
  logOut,
  getUserInfo,
} from './userOperations';

const initialState = {
  user: { email: null, id: null },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshing: false,
  errorLoginMessage: null,
  errorRegisterMessage: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.userData;
        state.token = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.token = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.userData;
        state.token = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log(payload);
        state.errorLoginMessage = payload;
      })
      .addCase(register.rejected, (state, { payload }) => {
        console.log(payload);
        state.errorRegisterMessage = payload;
      })
      .addCase(getUserInfo.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      })
      .addCase(getUserInfo.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.errorLoginMessage = null;
        state.errorRegisterMessage = null;
      }),
});

export const userReducer = userSlice.reducer;

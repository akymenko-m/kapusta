import { createSlice } from '@reduxjs/toolkit';
import { register, login, refreshUser, logOut, getUserInfo } from './userOperations';

const initialState = {
  user: { email: null, id: null },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = payload.userData;
        console.log(payload.userData);
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
         console.log(payload);
        state.user = payload.userData;
        state.token = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.isLoggedIn = true;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
         console.log(payload);
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getUserInfo.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(getUserInfo.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const userReducer = userSlice.reducer;
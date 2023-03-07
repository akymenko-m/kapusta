import { instance } from '../operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  console.log(token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'user/register',
  async (credentials, thunkAPI) => {
    try {
       await instance.post('/auth/register', credentials);
        const {data} = await instance.post('/auth/login', credentials);
      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.post('/auth/login', credentials);
      setAuthHeader(res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserInfo = createAsyncThunk('user/getInfo', async (_, thunkAPI) => {
   try {
     const res = await instance.get('/user');

     setAuthHeader(res.data.accessToken);
     return res.data;
   } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
   }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    // const token = state.user.token;
    const refreshToken = state.user.refreshToken;
   

    if (refreshToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
 
    const sid = state.user.sid;

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(refreshToken);
      const res = await instance.post('/auth/refresh', { sid });
console.log(res.data.newAccessToken);
      setAuthHeader(res.data.newAccessToken);
      // thunkAPI.dispatch(getUserInfo());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
import { instance } from '../operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const balance = createAsyncThunk(
  'user/balance',
  async (credentials, thunkAPI) => {
    try {
      const res = await instance.patch('/user/balance', credentials);
      console.log(res);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

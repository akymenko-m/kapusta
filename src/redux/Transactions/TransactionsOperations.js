import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/operations';

export const getPeriodData = createAsyncThunk(
  'transaction/getTransactionData',
  async (periodData, thunkApi) => {
    try {
      const { data } = await instance.get(
        `/transaction/period-data?date=${periodData}`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

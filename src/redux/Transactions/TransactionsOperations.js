
import { instance } from 'redux/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addIncomeTransaction = createAsyncThunk(
  '/income/addIncome',
  async (income, thunkAPI) => {
    try {
      const res = await instance.post('transaction/income', income);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addExpenseTransaction = createAsyncThunk(
  '/expense/addExpense',
  async (expense, thunkAPI) => {
    try {
      const res = await instance.post('transaction/expense', expense);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



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


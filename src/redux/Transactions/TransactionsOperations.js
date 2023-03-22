import { instance } from '../operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const balance = createAsyncThunk(
  'user/balance',
  async (balance, thunkAPI) => {
    try {
      const { data } = await instance.patch('/user/balance', balance);
      // console.log('balance >>', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addIncomeTransaction = createAsyncThunk(
  '/income/addIncome',
  async (income, thunkAPI) => {
    try {
      const res = await instance.post('transaction/income', income);
      // console.log('addIncome >>', res.data);
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
      // console.log('addExpense >>', res.data);
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
        `transaction/period-data?date=${periodData}`
      );
      // console.log('getTransactionData >>', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTransactionIncome = createAsyncThunk(
  '/transaction/getIncome',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('transaction/income');
      console.log('getTransactionIncome >>', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getTransactionExpense = createAsyncThunk(
  '/transaction/getExpense',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('transaction/expense');
      console.log('getExpense >>', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransacton = createAsyncThunk(
  'transaction/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      const res = await instance.delete(`transaction/${transactionId}`);
      // console.log('deleteTransacton >>', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionIncomeMonthsStats = createAsyncThunk(
  '/transaction/getIncomeMonthsStats',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('transaction/income');
      // console.log('getTransactionIncomeMonthsStats >>', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getTransactionExpenseMonthsStats = createAsyncThunk(
  '/transaction/getExpenseMonthsStats',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('transaction/expense');
      // console.log('getExpenseMonthsStats >>', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { instance } from '../operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

<<<<<<< Updated upstream
=======
// const setAuthHeader = token => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
>>>>>>> Stashed changes
export const balance = createAsyncThunk(
  'user/balance',
  async (balance, thunkAPI) => {
    try {
<<<<<<< HEAD
<<<<<<< Updated upstream

      const {data} = await instance.patch('/user/balance', balance);
      console.log('balance >>', data);

     

=======
      const data = await instance.patch('/user/balance', balance);
>>>>>>> Stashed changes
=======
      const { data } = await instance.patch('/user/balance', balance);
      console.log(data);
>>>>>>> parent of bbd253d (Merge pull request #52 from YuliiaGagina/summary-6)
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
        `transaction/period-data?date=${periodData}`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
<<<<<<< Updated upstream

export const getTransactionIncome = createAsyncThunk(
  '/transaction/getIncome',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('transaction/income');
      console.log(res.data);
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
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
<<<<<<< HEAD

export const getTransactionIncomeMonthsStats = createAsyncThunk(
  '/transaction/getIncomeMonthsStats',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('transaction/income');
      console.log('getTransactionIncomeMonthsStats >>', res.data);
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
      console.log('getTransactionExpenseMonthsStats >>', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
=======
>>>>>>> Stashed changes
=======
>>>>>>> parent of bbd253d (Merge pull request #52 from YuliiaGagina/summary-6)

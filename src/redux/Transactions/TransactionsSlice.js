import { createSlice } from '@reduxjs/toolkit';
import {
  addIncomeTransaction,
  addExpenseTransaction,
} from './TransactionsOperations';

const initialState = {
  items: [],
  balance: null,
  expenses: [],
  income: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addIncomeTransaction.fulfilled, (state, { payload }) => {
        state.income = [...payload];
        // state.isLoading = false;
      })
      .addCase(addExpenseTransaction.fulfilled, (state, { payload }) => {
        state.expenses = [...payload];
        // state.isLoading = false;
      }),
});

export const transactionsReducer = transactionsSlice.reducer;

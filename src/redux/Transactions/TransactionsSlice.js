import { createSlice } from '@reduxjs/toolkit';
import { balance } from './TransactionsOperations';

const initialState = {
  items: [],
  balance: null,
  expenses: null,
  income: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder.addCase(balance.fulfilled, (state, { payload }) => {
      state.balance = payload;
    }),
});

export const transactionsReducer = transactionsSlice.reducer;

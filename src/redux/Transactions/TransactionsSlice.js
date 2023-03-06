import { createSlice } from '@reduxjs/toolkit';
import { getPeriodData } from './TransactionsOperations';

const initialState = {
  items: [],
  balance: null,
  expenses: null,
  income: null,
  transactionData: {},
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder =>
    builder.addCase(getPeriodData.fulfilled, (state, action) => {
      state.transactionData = action.payload;
    }),
});

export const transactionsReducer = transactionSlice.reducer;

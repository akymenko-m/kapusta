import { createSlice } from '@reduxjs/toolkit';

import { balance } from './TransactionsOperations';

import {
  addIncomeTransaction,
  addExpenseTransaction,
} from './TransactionsOperations';

import { getPeriodData } from './TransactionsOperations';

const initialState = {
  items: [],
  balance: null,

  transactionData: {},
  expenses: [],
  income: [],
  currentReport: 'Expenses',
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    changeReportType(state) {
      state.currentReport =
        state.currentReport === 'Expenses' ? 'Income' : 'Expenses';
    },
  },

  extraReducers: builder =>
    builder
      .addCase(balance.fulfilled, (state, { payload }) => {
        state.balance = payload;
      })
      .addCase(getPeriodData.fulfilled, (state, action) => {
        state.transactionData = action.payload;
      })
      .addCase(addIncomeTransaction.fulfilled, (state, { payload }) => {
        state.income = [...payload];
        // state.isLoading = false;
      })
      .addCase(addExpenseTransaction.fulfilled, (state, { payload }) => {
        state.expenses = [...payload];
        // state.isLoading = false;
      }),
});

export const { changeReportType } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;

// const iconObj = {
//   products: icon,
//   alcohol: icon,
// }
// iconObj['products']

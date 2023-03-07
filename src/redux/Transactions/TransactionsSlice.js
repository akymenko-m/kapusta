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

  reportsQuery: '',
  transactionData: {},
  expenses: [],
  income: [],
  currentReport: 'Expenses',
  error: null,
  isLoading: false,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    changeReportType(state) {
      state.currentReport =
        state.currentReport === 'Expenses' ? 'Income' : 'Expenses';
    },
    setReportsQuery(state, action) {
      state.reportsQuery = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(balance.fulfilled, (state, { payload }) => {
        state.balance = payload;
      })
      .addCase(getPeriodData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPeriodData.fulfilled, (state, action) => {
        state.transactionData = action.payload;
        state.isLoading = false;
      })
      .addCase(getPeriodData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
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

export const { changeReportType, setReportsQuery } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;

// const iconObj = {
//   products: icon,
//   alcohol: icon,
// }
// iconObj['products']

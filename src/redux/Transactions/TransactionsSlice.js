import { createSlice } from '@reduxjs/toolkit';

import {
  balance,
  deleteTransacton,
  getTransactionExpense,
  getTransactionIncome,
} from './TransactionsOperations';

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
        console.log(payload);
        state.income = [payload, ...state.income];
        // state.isLoading = false;
      })
      .addCase(addExpenseTransaction.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.expenses = [payload, ...state.expenses];
        // state.isLoading = false;
      })
      .addCase(getTransactionIncome.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
        // state.isLoading = false;
      })
      .addCase(getTransactionExpense.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
        // state.isLoading = false;
      })
      .addCase(deleteTransacton.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
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

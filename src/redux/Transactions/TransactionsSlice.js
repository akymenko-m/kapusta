<<<<<<< Updated upstream
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
=======
import { createSlice } from '@reduxjs/toolkit';

import { balance } from './TransactionsOperations';
>>>>>>> Stashed changes

import {
  balance,
  deleteTransacton,
  getTransactionExpense,
  getTransactionIncome,
  addIncomeTransaction,
  addExpenseTransaction,
  getPeriodData,
} from './TransactionsOperations';

<<<<<<< Updated upstream
const initialState = {
  items: [],
  newBalance: 0,
  reportsQuery: '',
  transactionData: {},
  expenses: [],
  income: [],
  currentReport: 'Expenses',
  error: null,
  isLoading: false,
  monthsStats: {},
=======
import { getPeriodData } from './TransactionsOperations';

const initialState = {
  items: [],
  newBalance: 0,
  transactionData: {},
  expenses: [],
  income: [],
>>>>>>> Stashed changes
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
<<<<<<< Updated upstream
  reducers: {
    changeReportType(state) {
      state.currentReport =
        state.currentReport === 'Expenses' ? 'Income' : 'Expenses';
    },
    setReportsQuery(state, action) {
      state.reportsQuery = action.payload;
    },
    deleteTransactionItem(state, action) {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
  },

=======
>>>>>>> Stashed changes
  extraReducers: builder =>
    builder
      .addCase(balance.fulfilled, (state, { payload }) => {
        state.newBalance = payload.newBalance;
      })
<<<<<<< Updated upstream
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
=======
      .addCase(getPeriodData.fulfilled, (state, action) => {
        state.transactionData = action.payload;
>>>>>>> Stashed changes
      })
      .addCase(addIncomeTransaction.fulfilled, (state, { payload }) => {
        state.items = [payload.transaction, ...state.items];
        state.isLoading = false;
      })
      .addCase(addExpenseTransaction.fulfilled, (state, { payload }) => {
<<<<<<< Updated upstream
        state.items = [payload.transaction, ...state.items];
        state.isLoading = false;
      })
      .addCase(getTransactionIncome.fulfilled, (state, { payload }) => {
        state.items = [...payload.incomes].reverse();
        state.monthsStats = payload.monthsStats;
        state.isLoading = false;
      })
      .addCase(getTransactionExpense.fulfilled, (state, { payload }) => {
        state.items = [...payload.expenses].reverse();
        state.monthsStats = payload.monthsStats;
        state.isLoading = false;
      })
      .addCase(deleteTransacton.fulfilled, (state, { payload }) => {
        state.newBalance = payload.newBalance;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          getTransactionIncome.rejected,
          getTransactionExpense.rejected,
          deleteTransacton.rejected,
          addIncomeTransaction.rejected,
          addExpenseTransaction.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          getTransactionIncome.pending,
          getTransactionExpense.pending,
          deleteTransacton.pending,
          addIncomeTransaction.pending,
          addExpenseTransaction.pending
        ),
        state => {
          state.isLoading = true;
        }
      ),
=======
        state.expenses = [...payload];
        // state.isLoading = false;
      }),
>>>>>>> Stashed changes
});

export const { deleteTransactionItem, changeReportType, setReportsQuery } =
  transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
<<<<<<< Updated upstream

// const iconObj = {
//   products: icon,
//   alcohol: icon,
// }
// iconObj['products']
=======
>>>>>>> Stashed changes

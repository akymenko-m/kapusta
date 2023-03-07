import { createSlice } from '@reduxjs/toolkit';

import { balance, deleteTransacton, getTransactionExpense, getTransactionIncome } from './TransactionsOperations';


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

};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>

    builder.addCase(balance.fulfilled, (state, { payload }) => {
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

export const transactionsReducer = transactionsSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';


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
    builder
      
});

export const transactionsReducer = transactionsSlice.reducer;

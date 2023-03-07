import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

export  const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global/',
  headers: {
    'Content-Type': 'application/json',
  },
});


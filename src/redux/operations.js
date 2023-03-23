import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://kapusta-backend.goit.global/',
  headers: {
    'Content-Type': 'application/json',
  },
});

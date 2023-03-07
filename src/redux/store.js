import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './user/userSlice';
import { transactionsReducer } from './Transactions/TransactionsSlice';
import storage from 'redux-persist/lib/storage';
import { transactionsReducer } from './Transactions/TransactionsSlice';

const persistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token', 'refreshToken', 'sid'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    transactions: transactionsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

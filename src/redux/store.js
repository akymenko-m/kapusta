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

const persistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token', 'refreshToken', 'sid', 'user'],
};
const persistConfigTransitions = {
  key: 'transactions',
  version: 1,
  storage,
  whitelist: ['newBalance'],
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedReducerTransitions = persistReducer(
  persistConfigTransitions,
  transactionsReducer
);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    transactions: persistedReducerTransitions,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

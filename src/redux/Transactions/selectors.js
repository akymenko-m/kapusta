export const selectBalance = state => state.transactions.newBalance;

export const selectCurrentReport = state => state.transactions.currentReport;
export const selectTransactionDataIncomes = state =>
  state.transactions.transactionData.incomes;

export const selectTransactionDataExpenses = state =>
  state.transactions.transactionData.expenses;

export const getIsloading = state => state.transactions.isLoading;

export const selectTransactions = state => state.transactions.items;

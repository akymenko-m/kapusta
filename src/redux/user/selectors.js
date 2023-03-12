export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectUser = state => state.user.user;

export const selectIsRefreshing = state => state.user.isRefreshing;

export const selectErrorLoginMessage = state => state.user.errorLoginMessage;

export const selectErrorRegisterMessage = state => state.user.errorRegisterMessage;

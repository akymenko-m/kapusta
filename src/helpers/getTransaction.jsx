// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import {
//   getTransactionIncome,
//   getTransactionExpense,
// } from 'redux/Transactions/TransactionsOperations';

// export function getTransaction() {
//   const { pathname } = useLocation();
//   const isIncomePage = pathname.includes('/income');
//   const isExpensePage = pathname.includes('/expense');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (isIncomePage) {
//       dispatch(getTransactionIncome());
//     }
//     if (isExpensePage) {
//       dispatch(getTransactionExpense());
//     }
//     return;
//   }, [dispatch, isExpensePage, isIncomePage]);
// }

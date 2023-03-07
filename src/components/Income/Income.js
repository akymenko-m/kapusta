
import { useDispatch } from 'react-redux';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { addIncomeTransaction } from 'redux/Transactions/TransactionsOperations';

export const Income = () => {
  const dispatch = useDispatch();

  const handlePostIncome = formData => {
    dispatch(addIncomeTransaction(formData));
  };
  return (
    <>
      <h4>incomes</h4>
      <TransactionForm onSubmit={handlePostIncome} />
      <TransactionsList />

    </>
  );
};

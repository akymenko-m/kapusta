import { useDispatch } from 'react-redux';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { addIncomeTransaction } from 'redux/Transactions/TransactionsOperations';
import { TransactionContainer } from 'components/Expenses/Expenses.styled';

export const Income = () => {
  const dispatch = useDispatch();

  const handlePostIncome = formData => {
    dispatch(addIncomeTransaction(formData));
  };
  return (
    <TransactionContainer>
      {/* <h4>incsomes</h4> */}
      <TransactionForm onSubmit={handlePostIncome} />
    </TransactionContainer>
  );
};

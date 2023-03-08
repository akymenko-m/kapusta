import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { useDispatch } from 'react-redux';
import { addExpenseTransaction } from 'redux/Transactions/TransactionsOperations';
import { Summary } from 'components/Summary/Summary';
import { TransactionContainer, Block } from './Expenses.styled';

export const Expenses = () => {
  const dispatch = useDispatch();

  const handlePostExpense = formData => {
    dispatch(addExpenseTransaction(formData));
  };
  return (
    <>
      <TransactionContainer>
        <TransactionForm onSubmit={handlePostExpense} isExpenseForm />
      </TransactionContainer>
      <Block>
        <TransactionsList />
        <Summary />
      </Block>
    </>
  );
};

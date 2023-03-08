import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { useDispatch } from 'react-redux';
import { addExpenseTransaction } from 'redux/Transactions/TransactionsOperations';
import { TransactionContainer, Block } from './Expenses.styled';
import { Summary } from './../Summary/Summary';

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

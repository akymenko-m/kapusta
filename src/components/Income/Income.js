import { useDispatch } from 'react-redux';
import { TransactionForm } from 'components/TransactionForm/TransactionForm';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { addIncomeTransaction } from 'redux/Transactions/TransactionsOperations';
import { TransactionContainer } from 'components/Expenses/Expenses.styled';
import { Summary } from 'components/Summary/Summary';
import { Block } from 'components/Expenses/Expenses.styled';
import Notiflix from 'notiflix';

export const Income = () => {
  const dispatch = useDispatch();

  const handlePostIncome = formData => {
    if (formData.category === 'DEFAULT') {
      Notiflix.Notify.warning('Please select a category');
      return;
    } else {
      dispatch(addIncomeTransaction(formData));
    }
  };
  return (
    <>
      <TransactionContainer>
        <TransactionForm onSubmit={handlePostIncome} />
      </TransactionContainer>
      <Block>
        <TransactionsList />
        <Summary />
      </Block>
    </>
  );
};

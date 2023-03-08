import { useSelector } from 'react-redux';
import {
  selectTransactionDataExpenses,
  selectTransactionDataIncomes,
} from 'redux/Transactions/selectors';
import {
  Container,
  Total,
  TotalData,
  Type,
} from './TotalTransactionsData.styled';

export const TotalTransactionsData = () => {
  const dataIncomes = useSelector(selectTransactionDataIncomes);
  const dataExpenses = useSelector(selectTransactionDataExpenses);

  return (
    <Container>
      <TotalData>
        <Type>Expenses:</Type>
        {/* <Total typeReport={'Expenses'}>- 18 000.00 UAH.</Total> */}

        <Total typeReport={'Expenses'}>
          {dataExpenses ? dataExpenses.expenseTotal : '0'}
        </Total>
      </TotalData>

      <TotalData>
        <Type>Income:</Type>
        {/* <Total typeReport={'Income'}>+ 45 000.00 UAH.</Total> */}

        <Total typeReport={'Income'}>
          {dataIncomes ? dataIncomes.incomeTotal : '0'}
        </Total>
      </TotalData>
    </Container>
  );
};

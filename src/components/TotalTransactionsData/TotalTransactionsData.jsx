// import { useSelector } from 'react-redux';
// import {
//   selectTransactionDataExpenses,
//   selectTransactionDataIncomes,
// } from 'redux/Transactions/selectors';
import {
  Container,
  Total,
  TotalData,
  Type,
} from './TotalTransactionsData.styled';

export const TotalTransactionsData = () => {
  // const dataIncomes = useSelector(selectTransactionDataIncomes);
  // const dataExpenses = useSelector(selectTransactionDataExpenses);
  // console.log(dataIncomes);
  // console.log(dataExpenses);

  return (
    <Container>
      <TotalData>
        <Type>Expenses:</Type>
        <Total typeReport={'Expenses'}>- 18 000.00 UAH.</Total>
        {/* <Total typeReport={'Expenses'}>{dataExpenses.expenseTotal}</Total> */}
      </TotalData>

      <TotalData>
        <Type>Income:</Type>
        <Total typeReport={'Income'}>+ 45 000.00 UAH.</Total>
        {/* <Total typeReport={'Income'}>{dataIncomes.incomeTotal}</Total> */}
      </TotalData>
    </Container>
  );
};

import {
  Container,
  Total,
  TotalData,
  Type,
} from './TotalTransactionsData.styled';

export const TotalTransactionsData = () => {
  return (
    <Container>
      <TotalData>
        <Type>Expenses:</Type>
        <Total typeReport={'Expenses'}>- 18 000.00 UAH.</Total>
      </TotalData>

      <TotalData>
        <Type>Income:</Type>
        <Total typeReport={'Income'}>+ 45 000.00 UAH.</Total>
      </TotalData>
    </Container>
  );
};

import {
  Container,
  ExpensesItem,
  Label,
  Total,
} from './ExpensesReportElement.styled';

export const ExpensesReportElement = ({
  label,
  total,
  url,
  handleClick,
  name,
}) => {
  const numberWithSpaces = num => {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <ExpensesItem>
      <Container>
        <Total>{numberWithSpaces(total)}</Total>
        <img src={url} alt={label} />
        <Label>{label}</Label>
      </Container>
    </ExpensesItem>
  );
};

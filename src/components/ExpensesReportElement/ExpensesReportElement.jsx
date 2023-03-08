import { ExpensesItem } from './ExpensesReportElement.styled';

export const ExpensesReportElement = ({ label, total, url }) => {
  return (
    <ExpensesItem>
      <p>{total}</p>
      <img src={url} alt={label} />
      <p>{label}</p>
    </ExpensesItem>
  );
};

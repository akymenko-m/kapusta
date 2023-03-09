import PropTypes from 'prop-types';
import {
  Container,
  ExpensesItem,
  Image,
  Label,
  Total,
} from './ExpensesReportElement.styled';

export const ExpensesReportElement = ({ label, total, url }) => {
  const numberWithSpaces = num => {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <ExpensesItem>
      <Container>
        <Total>{numberWithSpaces(total)}</Total>

        <Image src={url} alt={label} />
        <Label>{label}</Label>
      </Container>
    </ExpensesItem>
  );
};

ExpensesReportElement.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number,
  url: PropTypes.string.isRequired,
};

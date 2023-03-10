import PropTypes from 'prop-types';
import {
  Container,
  ExpensesItem,
  Image,
  Label,
  Total,
} from './ExpensesReportElement.styled';

export const ExpensesReportElement = ({
  label,
  total,
  url,
  handleClick,
  name,
  handleCurItem,
  currentActive,
  activeUrl,
}) => {
  const numberWithSpaces = num => {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <ExpensesItem
      onClick={() => {
        handleClick(name);
        handleCurItem(label);
      }}
    >
      <Container>
        <Total>{numberWithSpaces(total)}</Total>

        <Image src={currentActive === label ? activeUrl : url} alt={label} />
        <Label>{label}</Label>
      </Container>
    </ExpensesItem>
  );
};

ExpensesReportElement.propTypes = {
  label: PropTypes.string.isRequired,
  total: PropTypes.number,
  url: PropTypes.string.isRequired,

  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleCurItem: PropTypes.func.isRequired,
  currentActive: PropTypes.string.isRequired,
  activeUrl: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectTransactionDataExpensesData } from 'redux/Transactions/selectors';

import imgProducts from '../../images/expensesReport/Products.png';
import imgAlcohol from '../../images/expensesReport/Alcohol.png';
import imgEntertainment from '../../images/expensesReport/Entertainment.png';
import imgHealth from '../../images/expensesReport/Health.png';
import imgTransport from '../../images/expensesReport/Transport.png';
import imgHousing from '../../images/expensesReport/Housing.png';
import imgTechnique from '../../images/expensesReport/Technique.png';
import imgCommunal from '../../images/expensesReport/Communal_communication.png';
import imgSports from '../../images/expensesReport/Sports_hobbies.png';
import imgEducation from '../../images/expensesReport/Education.png';
import imgOther from '../../images/expensesReport/Other.png';
import { ExpensesReportElement } from 'components/ExpensesReportElement/ExpensesReportElement';
import { ExpensesList } from './ExpensesReport.styled';

export const ExpensesReport = ({
  sortEntries,
  setCurrentCategoryTransactions,
}) => {
  const expensesData = useSelector(selectTransactionDataExpensesData);

  const expensesDictionary = {
    Продукты: { label: 'Products', img: imgProducts },
    Алкоголь: { label: 'Alcohol', img: imgAlcohol },
    Развлечения: { label: 'Entertainment', img: imgEntertainment },
    Здоровье: { label: 'Health', img: imgHealth },
    Транспорт: { label: 'Transport', img: imgTransport },
    'Всё для дома': { label: 'Housing', img: imgHousing },
    Техника: { label: 'Technique', img: imgTechnique },
    'Коммуналка и связь': {
      label: 'Communal, communication',
      img: imgCommunal,
    },
    'Спорт и хобби': { label: 'Sports, hobbies', img: imgSports },
    Образование: { label: 'Education', img: imgEducation },
    Прочее: { label: 'Other', img: imgOther },
  };

  const handleClick = categoryName => {
    setCurrentCategoryTransactions(categoryName);
  };

  return (
    <div>
      {Boolean(expensesData) ? (
        <div>
          <ExpensesList>
            {sortEntries.map(el => {
              return (
                <ExpensesReportElement
                  key={expensesDictionary[el.name].label}
                  label={expensesDictionary[el.name].label}
                  total={el.total}
                  url={expensesDictionary[el.name].img}
                  handleClick={handleClick}
                  name={el.name}
                />
                // <ExpensesReportElement
                //   key={expensesDictionary[el.name].label}
                //   label={expensesDictionary[el.name].label}
                //   total={el.total}
                //   url={expensesDictionary[el.name].img}
                // >
                //   {expensesDictionary[el.name].img}
                // </ExpensesReportElement>
              );
            })}
          </ExpensesList>
        </div>
      ) : (
        <div>
          <p>No data</p>
        </div>
      )}
    </div>
  );
};

ExpensesReport.propTypes = {
  sortEntries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
  setCurrentCategoryTransactions: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectTransactionDataExpensesData } from 'redux/Transactions/selectors';

import imgProducts from '../../images/expensesReport/product.png';
import imgAlcohol from '../../images/expensesReport/alcohols.png';
import imgEntertainment from '../../images/expensesReport/entertainments.png';
import imgHealth from '../../images/expensesReport/healthe.png';
import imgTransport from '../../images/expensesReport/transports.png';
import imgHousing from '../../images/expensesReport/housings.png';
import imgTechnique from '../../images/expensesReport/techniques.png';
import imgCommunal from '../../images/expensesReport/communals.png';
import imgSports from '../../images/expensesReport/sports-hobbie.png';
import imgEducation from '../../images/expensesReport/educations.png';
import imgOther from '../../images/expensesReport/others.png';

import imgActiveProducts from '../../images/expensesReport/products-active.png';
import imgActiveAlcohol from '../../images/expensesReport/alcohol-active.png';
import imgActiveEntertainment from '../../images/expensesReport/entertainment-active.png';
import imgActiveHealth from '../../images/expensesReport/health-active.png';
import imgActiveTransport from '../../images/expensesReport/transport-active.png';
import imgActiveHousing from '../../images/expensesReport/housing-active.png';
import imgActiveTechnique from '../../images/expensesReport/technique-active.png';
import imgActiveCommunal from '../../images/expensesReport/communal-active.png';
import imgActiveSports from '../../images/expensesReport/sports-hobbies-active.png';
import imgActiveEducation from '../../images/expensesReport/education-active.png';
import imgActiveOther from '../../images/expensesReport/other-active.png';
import { Notify } from 'components/IncomesReport/IncomesReport.styled';
import { ExpensesReportElement } from 'components/ExpensesReportElement/ExpensesReportElement';
import { ExpensesList } from './ExpensesReport.styled';

export const ExpensesReport = ({
  sortEntries,
  setCurrentCategoryTransactions,
}) => {
  const expensesData = useSelector(selectTransactionDataExpensesData);

  const [currentActive, setCurrentActive] = useState('');

  const expensesDictionary = {
    Продукты: {
      label: 'Products',
      img: imgProducts,
      curImg: imgActiveProducts,
    },
    Алкоголь: { label: 'Alcohol', img: imgAlcohol, curImg: imgActiveAlcohol },
    Развлечения: {
      label: 'Entertainment',
      img: imgEntertainment,
      curImg: imgActiveEntertainment,
    },
    Здоровье: { label: 'Health', img: imgHealth, curImg: imgActiveHealth },
    Транспорт: {
      label: 'Transport',
      img: imgTransport,
      curImg: imgActiveTransport,
    },
    'Всё для дома': {
      label: 'Housing',
      img: imgHousing,
      curImg: imgActiveHousing,
    },
    Техника: {
      label: 'Technique',
      img: imgTechnique,
      curImg: imgActiveTechnique,
    },
    'Коммуналка и связь': {
      label: 'Communal, communication',
      img: imgCommunal,
      curImg: imgActiveCommunal,
    },
    'Спорт и хобби': {
      label: 'Sports, hobbies',
      img: imgSports,
      curImg: imgActiveSports,
    },
    Образование: {
      label: 'Education',
      img: imgEducation,
      curImg: imgActiveEducation,
    },
    Прочее: { label: 'Other', img: imgOther, curImg: imgActiveOther },
  };

  const handleClick = categoryName => {
    setCurrentCategoryTransactions(categoryName);
  };

  const handleCurItem = itemName => {
    setCurrentActive(itemName);
  };

  return (
    <div>
      {Boolean(expensesData) && (
        <div>
          {sortEntries.length > 0 ? (
            <ExpensesList>
              {sortEntries.map(el => {
                return (
                  <ExpensesReportElement
                    currentActive={currentActive}
                    handleCurItem={handleCurItem}
                    key={expensesDictionary[el.name].label}
                    label={expensesDictionary[el.name].label}
                    total={el.total}
                    url={expensesDictionary[el.name].img}
                    activeUrl={expensesDictionary[el.name].curImg}
                    handleClick={handleClick}
                    name={el.name}
                  />
                );
              })}
            </ExpensesList>
          ) : (
            <Notify>No data for this period</Notify>
          )}
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

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectTransactionDataExpensesData } from 'redux/Transactions/selectors';

import imgProducts from '../../images/expensesReport/products.png';
import imgAlcohol from '../../images/expensesReport/alcohol.png';
import imgEntertainment from '../../images/expensesReport/entertainment.png';
import imgHealth from '../../images/expensesReport/health.png';
import imgTransport from '../../images/expensesReport/transport.png';
import imgHousing from '../../images/expensesReport/housing.png';
import imgTechnique from '../../images/expensesReport/technique.png';
import imgCommunal from '../../images/expensesReport/communal.png';
import imgSports from '../../images/expensesReport/sports-hobbies.png';
import imgEducation from '../../images/expensesReport/education.png';
import imgOther from '../../images/expensesReport/other.png';

import { ExpensesReportElement } from 'components/ExpensesReportElement/ExpensesReportElement';
import { ExpensesList } from './ExpensesReport.styled';
// import ChartReport from 'components/ChartReport/ChartReport';

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

export const ExpensesReport = () => {
  // const [transactions, setTransactions] = useState({});
  const expensesData = useSelector(selectTransactionDataExpensesData);
  const entries = Object.entries(expensesData ?? {});
  const [currentActive, setCurrentActive] = useState('');

  const sortEntries = [...entries]
    .sort((firstEl, secondEl) => {
      return secondEl[1].total - firstEl[1].total;
    })
    .map(el => {
      return { name: el[0], total: el[1].total };
    });

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

  const handleCurItem = itemName => {
    setCurrentActive(itemName);
  };

  // const handleClick = categoryName => {
  //   setTransactions(expensesData[categoryName]);
  // };

  // const sortedCategoryTransactions = Object.entries(transactions)
  //   .filter(([key]) => key !== 'total')
  //   .map(([key, value]) => ({ name: key, total: value }))
  //   .sort((firstEl, secondEl) => secondEl.total - firstEl.total);

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
                    // handleClick={handleClick}
                  />
                );
              })}
            </ExpensesList>
          ) : (
            <Notify>No data for this period</Notify>
          )}
          {/* {sortEntries.length ? (
            <ChartReport
              sortEntries={
                sortedCategoryTransactions.length
                  ? sortedCategoryTransactions
                  : sortEntries
              }
            />
          ) : null} */}
        </div>
      )}
    </div>
  );
};

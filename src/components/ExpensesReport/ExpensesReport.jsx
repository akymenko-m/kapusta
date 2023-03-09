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

export const ExpensesReport = () => {
  const expensesData = useSelector(selectTransactionDataExpensesData);
  const entries = Object.entries(expensesData ?? {});

  const sortEntries = [...entries]
    .sort((firstEl, secondEl) => {
      return secondEl[1].total - firstEl[1].total;
    })
    .map(el => {
      return { name: el[0], total: el[1].total };
    });

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

  return (
    <div>
      {Boolean(expensesData) ? (
        <ExpensesList>
          {sortEntries.map(el => {
            return (
              <ExpensesReportElement
                key={expensesDictionary[el.name].label}
                label={expensesDictionary[el.name].label}
                total={el.total}
                url={expensesDictionary[el.name].img}
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
      ) : (
        <div>
          <p>No data</p>
        </div>
      )}
    </div>
  );
};

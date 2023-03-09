import { useSelector } from 'react-redux';
import { selectTransactionDataIncomesData } from 'redux/Transactions/selectors';

import imgSalary from '../../images/incomesReport/Salary.png';
import imgAddincome from '../../images/incomesReport/Add_income.png';
import { IncomesReportElement } from 'components/IncomesReportElement/IncomesReportElement';
import ChartReport from 'components/ChartReport/ChartReport';
import { useState } from 'react';

export const IncomesReport = () => {
  const [transactions, setTransactions] = useState({});
  const incomesData = useSelector(selectTransactionDataIncomesData);
  //   console.log('incomesData', incomesData);

  const entries = Object.entries(incomesData ?? {});
  //   console.log('entries', entries);

  const sortEntries = [...entries]
    .sort((firstEl, secondEl) => {
      return secondEl[1].total - firstEl[1].total;
    })
    .map(el => {
      return { name: el[0], total: el[1].total };
    });

  const incomesDictionary = {
    'З/П': { label: 'Salary', img: imgSalary },
    'Доп. доход': { label: 'Add. income', img: imgAddincome },
  };

  const handleClick = categoryName => {
    setTransactions(incomesData[categoryName]);
  };

  const sortedCategoryTransactions = Object.entries(transactions)
    .filter(([key]) => key !== 'total')
    .map(([key, value]) => ({ name: key, total: value }))
    .sort((firstEl, secondEl) => secondEl.total - firstEl.total);

  return (
    <div>
      {Boolean(incomesData) ? (
        <>
          <ul>
            {sortEntries.map(el => {
              return (
                <IncomesReportElement
                  key={incomesDictionary[el.name].label}
                  label={incomesDictionary[el.name].label}
                  total={el.total}
                  url={incomesDictionary[el.name].img}
                  name={el.name}
                  handleClick={handleClick}
                />
              );
            })}
          </ul>
          {sortEntries.length ? (
            <ChartReport
              sortEntries={
                sortedCategoryTransactions.length
                  ? sortedCategoryTransactions
                  : sortEntries
              }
            />
          ) : null}
        </>
      ) : (
        <div>
          <p>No data</p>
        </div>
      )}
    </div>
  );
};

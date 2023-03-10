import { useSelector } from 'react-redux';
import { selectTransactionDataIncomesData } from 'redux/Transactions/selectors';
import { useState } from 'react';

import imgSalary from '../../images/incomesReport/salary.png';
import imgAddincome from '../../images/incomesReport/add-income.png';
import imgActiveSalary from '../../images/incomesReport/salary-active.png';
import imgActiveAddincome from '../../images/incomesReport/add-income-active.png';
import { IncomesReportElement } from 'components/IncomesReportElement/IncomesReportElement';
import { IncomesContainer, IncomesList, Notify } from './IncomesReport.styled';
// import ChartReport from 'components/ChartReport/ChartReport';

export const IncomesReport = () => {
  const [currentActive, setCurrentActive] = useState('');

  // const [transactions, setTransactions] = useState({});
  const incomesData = useSelector(selectTransactionDataIncomesData);

  const entries = Object.entries(incomesData ?? {});

  const sortEntries = [...entries]
    .sort((firstEl, secondEl) => {
      return secondEl[1].total - firstEl[1].total;
    })
    .map(el => {
      return { name: el[0], total: el[1].total };
    });

  const incomesDictionary = {
    'З/П': { label: 'Salary', img: imgSalary, curImg: imgActiveSalary },
    'Доп. доход': {
      label: 'Add. income',
      img: imgAddincome,
      curImg: imgActiveAddincome,
    },
  };

  const handleCurItem = itemName => {
    setCurrentActive(itemName);
  };

  // const handleClick = categoryName => {
  //   setTransactions(incomesData[categoryName]);
  // };

  // const sortedCategoryTransactions = Object.entries(transactions)
  //   .filter(([key]) => key !== 'total')
  //   .map(([key, value]) => ({ name: key, total: value }))
  //   .sort((firstEl, secondEl) => secondEl.total - firstEl.total);

  return (
    <IncomesContainer>
      {Boolean(incomesData) && (
        <div>
          {sortEntries.length > 0 ? (
            <IncomesList>
              {sortEntries.map(el => {
                return (
                  <IncomesReportElement
                    currentActive={currentActive}
                    handleCurItem={handleCurItem}
                    key={incomesDictionary[el.name].label}
                    label={incomesDictionary[el.name].label}
                    total={el.total}
                    url={incomesDictionary[el.name].img}
                    activeUrl={incomesDictionary[el.name].curImg}
                    name={el.name}
                    // handleClick={handleClick}
                  />
                );
              })}
            </IncomesList>
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
    </IncomesContainer>
  );
};

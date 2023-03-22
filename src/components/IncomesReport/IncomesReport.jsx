import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectTransactionDataIncomesData } from 'redux/Transactions/selectors';

import { useState } from 'react';

import imgSalary from '../../images/incomesReport/salarys.png';
import imgAddincome from '../../images/incomesReport/add-incomes.png';
import imgActiveSalary from '../../images/incomesReport/salary-actives.png';
import imgActiveAddincome from '../../images/incomesReport/add-income-actives.png';
import { IncomesReportElement } from 'components/IncomesReportElement/IncomesReportElement';
import { IncomesContainer, IncomesList, Notify } from './IncomesReport.styled';

export const IncomesReport = ({
  sortEntries,
  setCurrentCategoryTransactions,
}) => {
  const [currentActive, setCurrentActive] = useState('');

  const incomesData = useSelector(selectTransactionDataIncomesData);


  const incomesDictionary = {
    'Salary': { label: 'Salary', img: imgSalary, curImg: imgActiveSalary },
    'Additional income': {
      label: 'Add. income',
      img: imgAddincome,
      curImg: imgActiveAddincome,
    },
  };

  const handleClick = categoryName => {
    setCurrentCategoryTransactions(categoryName);
  };

  const handleCurItem = itemName => {
    setCurrentActive(itemName);
  };

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
                    handleClick={handleClick}
                  />
                );
              })}
            </IncomesList>
          ) : (
            <Notify>No data for this period</Notify>
          )}
        </div>
      )}
    </IncomesContainer>
  );
};

IncomesReport.propTypes = {
  sortEntries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
  setCurrentCategoryTransactions: PropTypes.func.isRequired,
};

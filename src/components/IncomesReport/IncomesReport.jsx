import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectTransactionDataIncomesData } from 'redux/Transactions/selectors';

import imgSalary from '../../images/incomesReport/Salary.png';
import imgAddincome from '../../images/incomesReport/Add_income.png';
import { IncomesReportElement } from 'components/IncomesReportElement/IncomesReportElement';
import { IncomesContainer, IncomesList } from './IncomesReport.styled';

export const IncomesReport = ({
  sortEntries,
  setCurrentCategoryTransactions,
}) => {
  const incomesData = useSelector(selectTransactionDataIncomesData);
  console.log(sortEntries);
  const incomesDictionary = {
    'З/П': { label: 'Salary', img: imgSalary },
    'Доп. доход': { label: 'Add. income', img: imgAddincome },
  };

  const handleClick = categoryName => {
    setCurrentCategoryTransactions(categoryName);
  };

  return (
    <IncomesContainer>
      {Boolean(incomesData) ? (
        <div>
          <IncomesList>
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
          </IncomesList>
        </div>
      ) : (
        <div>
          <p>No data</p>
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

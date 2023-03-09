import { useSelector } from 'react-redux';
import { selectTransactionDataIncomesData } from 'redux/Transactions/selectors';

import imgSalary from '../../images/incomesReport/Salary.png';
import imgAddincome from '../../images/incomesReport/Add_income.png';
import { IncomesReportElement } from 'components/IncomesReportElement/IncomesReportElement';
import { IncomesContainer, IncomesList } from './IncomesReport.styled';

export const IncomesReport = () => {
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
    'З/П': { label: 'Salary', img: imgSalary },
    'Доп. доход': { label: 'Add. income', img: imgAddincome },
  };

  return (
    <IncomesContainer>
      {Boolean(incomesData) ? (
        <IncomesList>
          {sortEntries.map(el => {
            return (
              <IncomesReportElement
                key={incomesDictionary[el.name].label}
                label={incomesDictionary[el.name].label}
                total={el.total}
                url={incomesDictionary[el.name].img}
              />
            );
          })}
        </IncomesList>
      ) : (
        <div>
          <p>No data</p>
        </div>
      )}
    </IncomesContainer>
  );
};

import ChartReport from 'components/ChartReport/ChartReport';
import { ExpensesReport } from 'components/ExpensesReport/ExpensesReport';
import { IncomesReport } from 'components/IncomesReport/IncomesReport';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCurrentReport,
  selectTransactionDataExpensesData,
  selectTransactionDataIncomesData,
  getIsloading,
} from 'redux/Transactions/selectors';
import { Loader } from 'components/Loader/Loader';
import { changeReportType } from 'redux/Transactions/TransactionsSlice';
import {
  BtnReport,
  GrFormNextStyled,
  GrFormPreviousStyled,
  ReportContainer,
  ReportName,
  ReportType,
} from './ReportByCategories.styled';

export const ReportByCategories = () => {
  const [transactions, setTransactions] = useState({});
  const curReport = useSelector(selectCurrentReport);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsloading);

  const toggleReportType = () => {
    dispatch(changeReportType(curReport));
    setTransactions({});
  };

  const expensesData = useSelector(selectTransactionDataExpensesData);
  const incomeData = useSelector(selectTransactionDataIncomesData);

  const entries = Object.entries(
    curReport === 'Expenses' ? expensesData ?? {} : incomeData ?? {}
  );

  const sortEntries = [...entries]
    .sort((firstEl, secondEl) => {
      return secondEl[1].total - firstEl[1].total;
    })
    .map(el => {
      return { name: el[0], total: el[1].total };
    });

  const setCurrentCategoryTransactions = name => {
    curReport === 'Expenses'
      ? setTransactions(expensesData[name])
      : setTransactions(incomeData[name]);
  };

  const sortedCategoryTransactions = Object.entries(transactions)
    .filter(([key]) => key !== 'total')
    .map(([key, value]) => ({ name: key, total: value }))
    .sort((firstEl, secondEl) => secondEl.total - firstEl.total);

  return (
    <>
      <ReportContainer>
        {isLoading && <Loader />}
        <ReportType>
          <BtnReport onClick={toggleReportType}>
            <GrFormPreviousStyled />
          </BtnReport>
          <ReportName>{curReport}</ReportName>
          <BtnReport onClick={toggleReportType}>
            <GrFormNextStyled />
          </BtnReport>
        </ReportType>

        {curReport === 'Expenses' ? (
          <ExpensesReport
            sortEntries={sortEntries}
            setCurrentCategoryTransactions={setCurrentCategoryTransactions}
            sortedCategoryTransactions={sortedCategoryTransactions}
          />
        ) : (
          <IncomesReport
            sortEntries={sortEntries}
            setCurrentCategoryTransactions={setCurrentCategoryTransactions}
            sortedCategoryTransactions={sortedCategoryTransactions}
          />
        )}
      </ReportContainer>
      {sortEntries.length ? (
        <ChartReport
          dataArray={
            sortedCategoryTransactions.length
              ? sortedCategoryTransactions
              : sortEntries
          }
        />
      ) : null}
    </>
  );
};

import { ExpensesReport } from 'components/ExpensesReport/ExpensesReport';
import { IncomesReport } from 'components/IncomesReport/IncomesReport';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsloading,
  selectCurrentReport,
} from 'redux/Transactions/selectors';
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
  const curReport = useSelector(selectCurrentReport);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsloading);

  const toggleReportType = () => {
    dispatch(changeReportType(curReport));
  };

  return (
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

      {curReport === 'Expenses' ? <ExpensesReport /> : <IncomesReport />}
    </ReportContainer>
  );
};

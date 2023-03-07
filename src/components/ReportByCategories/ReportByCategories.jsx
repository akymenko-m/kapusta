import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentReport } from 'redux/Transactions/selectors';
import { changeReportType } from 'redux/Transactions/TransactionsSlice';
import {
  BtnReport,
  GrFormNextStyled,
  GrFormPreviousStyled,
  ReportName,
  ReportType,
} from './ReportByCategories.styled';
// import { IconContext } from 'react-icons';

export const ReportByCategories = () => {
  const curReport = useSelector(selectCurrentReport);
  // console.log(curReport);

  const dispatch = useDispatch();

  const toggleReportType = () => {
    dispatch(changeReportType(curReport));
  };

  return (
    <div>
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
        <ul>Expenses Categories</ul>
      ) : (
        <ul>Income Categories</ul>
      )}
    </div>
  );
};

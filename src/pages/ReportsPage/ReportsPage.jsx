import { ReportByCategories } from 'components/ReportByCategories/ReportByCategories';
import { TotalTransactionsData } from 'components/TotalTransactionsData/TotalTransactionsData';
// import { useSearchParams } from 'react-router-dom';
// import { getPeriodData } from 'redux/Transactions/TransactionsOperations';
import { MainContainer } from './ReportsPage.styled';
import { Slider } from 'components/Reports/ReportsNav/Slider/Slider';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
// import { getIsloading } from 'redux/Transactions/selectors';
import ChartReport from 'components/ChartReport/ChartReport';
import { selectIsRefreshing } from 'redux/user/selectors';

export const ReportsPage = () => {
  // const isLoading = useSelector(getIsloading);
  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <MainContainer>
      {/* {isLoading && <Loader />} */}

      <Slider />

      <TotalTransactionsData />
      <ReportByCategories />
      <ChartReport />
    </MainContainer>
  );
};

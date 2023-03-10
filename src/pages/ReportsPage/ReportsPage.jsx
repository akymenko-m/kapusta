import { ReportByCategories } from 'components/ReportByCategories/ReportByCategories';
import { TotalTransactionsData } from 'components/TotalTransactionsData/TotalTransactionsData';
import { MainContainer } from './ReportsPage.styled';
// import { Slider } from 'components/Reports/ReportsNav/Slider/Slider';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
// import ChartReport from 'components/ChartReport/ChartReport';

import { selectIsRefreshing } from 'redux/user/selectors';
import { Balance } from 'components/Balance/Balance';
// import { Balance } from 'components/Balance/Balance';

const ReportsPage = () => {
  // const isLoading = useSelector(getIsloading);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <MainContainer>
      {/* <Slider /> */}
      <Balance />
      <TotalTransactionsData />
      <ReportByCategories />
    </MainContainer>
  );
};

export default ReportsPage;

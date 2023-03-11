import { ReportByCategories } from 'components/ReportByCategories/ReportByCategories';
import { TotalTransactionsData } from 'components/TotalTransactionsData/TotalTransactionsData';
// import { useSearchParams } from 'react-router-dom';
// import { getPeriodData } from 'redux/Transactions/TransactionsOperations';
import { MainContainer } from './ReportsPage.styled';
// import { Slider } from 'components/Reports/ReportsNav/Slider/Slider';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/user/selectors';
import { Balance } from 'components/Balance/Balance';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const ReportsPage = () => {
const location = useLocation();


const path = location.pathname === '/' ?? `/transaction/period-data${location.search}`;

const navigate = useNavigate();
useEffect(() =>{
navigate(path);
}, [navigate, path])


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

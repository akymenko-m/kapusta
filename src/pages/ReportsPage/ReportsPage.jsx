import { ReportByCategories } from 'components/ReportByCategories/ReportByCategories';
import { TotalTransactionsData } from 'components/TotalTransactionsData/TotalTransactionsData';
import { MainContainer } from './ReportsPage.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/user/selectors';
import { Balance } from 'components/Balance/Balance';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ReportsPage = () => {
  const location = useLocation();

  const path =
    location.pathname === '/'
      ? `/transaction/period-data${location.search}`
      : location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    navigate(path || '/transaction/period-data');
  }, [navigate, path]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <MainContainer>
      <Balance />
      <TotalTransactionsData />
      <ReportByCategories />
    </MainContainer>
  );
};

export default ReportsPage;

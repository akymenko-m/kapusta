import { ReportByCategories } from 'components/ReportByCategories/ReportByCategories';
import { TotalTransactionsData } from 'components/TotalTransactionsData/TotalTransactionsData';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { getPeriodData } from 'redux/Transactions/TransactionsOperations';
import { MainContainer } from './ReportsPage.styled';
import { Slider } from 'components/Reports/ReportsNav/Slider/Slider';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getIsloading } from 'redux/Transactions/selectors';

export const ReportsPage = () => {
  // const date = new Date();
  // const dateFormat = date.getFullYear() + '-' + 0 + (date.getMonth() + 1);
  // console.log(dateFormat);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // setSearchParams({ date: dateFormat });
  //   // dispatch(getPeriodData(dateFormat));
  // }, [dispatch, dateFormat]);

  const isLoading = useSelector(getIsloading);
  return (
    <MainContainer>
      {isLoading && <Loader />}

      <Slider />

      <TotalTransactionsData />
      <ReportByCategories />
    </MainContainer>
  );
};

import { ReportByCategories } from 'components/ExpensesCategories/ExpensesCategories';
import { TotalTransactionsData } from 'components/TotalTransactionsData/TotalTransactionsData';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getPeriodData } from 'redux/Transactions/TransactionsOperations';

export const ReportsPage = () => {
  const date = new Date();
  const dateFormat = date.getFullYear() + '-' + 0 + (date.getMonth() + 1);
  // console.log(dateFormat);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const dispatch = useDispatch();

  useEffect(() => {
    setSearchParams({ date: dateFormat });
    dispatch(getPeriodData(dateFormat));
  }, [dispatch, dateFormat, setSearchParams]);

  return (
    <div>
      <div>
        <p>Current period:</p>
      </div>

      <TotalTransactionsData />
      <ReportByCategories />
    </div>
  );
};

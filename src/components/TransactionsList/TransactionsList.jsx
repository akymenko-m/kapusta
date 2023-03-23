import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteTransacton,
  getTransactionIncome,
  getTransactionExpense,
} from 'redux/Transactions/TransactionsOperations';
import { selectTransactions, getIsloading } from 'redux/Transactions/selectors';
import { Loader } from 'components/Loader/Loader';
import {
  TransactionTable,
  TableHead,
  TableRow,
  TableData,
  TableBody,
  Button,
  GoTrashcanStyled,
  Block,
  TableTitle,
  BlockHead,
} from './TransactionsList.styled';
import { deleteTransactionItem } from 'redux/Transactions/TransactionsSlice';
import { translateCategory } from 'helpers/translateCategory';
import { format } from 'date-fns';

export function TransactionsList() {
  const { pathname } = useLocation();
  const isIncomePage = pathname.includes('/income');
  const isExpensePage = pathname.includes('/expense');
  const dispatch = useDispatch();

  useEffect(() => {
    if (isIncomePage) {
      dispatch(getTransactionIncome());
    }
    if (isExpensePage) {
      dispatch(getTransactionExpense());
    }
    return;
  }, [dispatch, isExpensePage, isIncomePage]);

  const items = useSelector(selectTransactions);
  const sortedItems = [...items].sort(
    (b, a) => new Date(a.date) - new Date(b.date)
  );

  const handleDelete = _id => {
    dispatch(deleteTransacton(_id));
    dispatch(deleteTransactionItem(_id));
  };

  const isLoading = useSelector(getIsloading);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <TransactionTable>
          <TableHead>
            <BlockHead>
              <TableTitle className="headerData">Date</TableTitle>
              <TableTitle className="headerDesc">Description</TableTitle>
            </BlockHead>
            <TableTitle className="headerCat">Category</TableTitle>
            <TableTitle className="headerSum">Sum</TableTitle>
            <TableTitle className="headerBtn"></TableTitle>
          </TableHead>
          <TableBody className="tableBody">
            {sortedItems.map(item => (
              <TableRow key={item._id}>
                <Block>
                  <TableData className="dataTable">
                    {format(new Date(item.date), 'dd.MM.yyyy')}
                  </TableData>
                  <TableData className="descriptionTable">
                    {item.description}
                  </TableData>
                </Block>

                <TableData className="categoryTable">
                  {translateCategory(item.category)}
                </TableData>
                <TableData
                  className={`sumTable ${isIncomePage ? 'income' : 'expense'}`}
                >
                  {isIncomePage
                    ? item.amount + ' UAH'
                    : '- ' + item.amount + ' UAH'}
                </TableData>

                <Button onClick={() => handleDelete(item._id)}>
                  <GoTrashcanStyled />
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </TransactionTable>
      )}
    </>
  );
}

TransactionsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      transaction: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      }).isRequired,
      newBalance: PropTypes.number.isRequired,
    })
  ),
};

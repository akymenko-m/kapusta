import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransacton,getTransactionIncome,getTransactionExpense } from 'redux/Transactions/TransactionsOperations';
import {selectTransactions} from 'redux/Transactions/selectors';
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
  BlockHead
} from './TransactionsList.styled';

export function TransactionsList() {
  const { pathname } = useLocation();
  const isIncomePage = pathname.includes('/income');
  const isExpensePage = pathname.includes('/expense');
  const dispatch = useDispatch(); 

 
  useEffect(() => {
    if (isIncomePage) {dispatch(getTransactionIncome())}
    if (isExpensePage) {dispatch(getTransactionExpense())}
    return
  
  }, [dispatch, isExpensePage, isIncomePage]);


  const items = useSelector(selectTransactions);

  const handleDelete = _id => {
    dispatch(deleteTransacton(_id));
  };

  return ( items && (
    <TransactionTable>
      <TableHead >
        <BlockHead>
        <TableTitle className="headerData">Date</TableTitle>
        <TableTitle className="headerDesc">Description</TableTitle>
        </BlockHead>
       <TableTitle className="headerCat">Category</TableTitle>
        <TableTitle className="headerSum">Sum</TableTitle>
        <TableTitle className="headerBtn"></TableTitle>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.transaction._id}>
            <Block>
              <TableData  className="dataTable">
                {item.transaction.date}
              </TableData>
              <TableData className="descriptionTable">
                {item.transaction.description}
              </TableData>
            </Block>

            <TableData className="categoryTable">
              {item.transaction.category}
            </TableData>
            <TableData
              className={`sumTable ${isIncomePage ? 'income' : 'expense'}`}
            >
              {isIncomePage
                ? item.transaction.amount + ' UAH'
                : '- ' + item.transaction.amount + ' UAH'}
            </TableData>

            <Button onClick={() => handleDelete(item.transaction._id)}>
              <GoTrashcanStyled />
            </Button>
          </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
  )
    
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

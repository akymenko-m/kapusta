import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
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

  const items = [
    {
      newBalance: 100,
      transaction: {
        description: 'Income description',
        amount: 100,
        date: '2020-12-31',
        category: 'Salary',
        _id: '507f1f77bcf86cd799439011',
      },
    },
    {
      newBalance: 200,
      transaction: {
        description: 'Expense description',
        amount: 200,
        date: '2020-12-31',
        category: 'Products',
        _id: '507f1f77bcf86cd799439012',
      },
    },
    {
      newBalance: 100,
      transaction: {
        description: 'Income description',
        amount: 100,
        date: '2020-12-31',
        category: 'Salary',
        _id: '507f1f77bcf86cd799439013',
      },
    },
    {
      newBalance: 200,
      transaction: {
        description: 'Expense description',
        amount: 200,
        date: '2020-12-31',
        category: 'Products',
        _id: '507f1f77bcf86cd799439014',
      },
    },
    {
      newBalance: 200,
      transaction: {
        description: 'Expense description',
        amount: 200,
        date: '2020-12-31',
        category: 'Products',
        _id: '507f1f77bcf86cd799439015',
      },
    },
    {
      newBalance: 200,
      transaction: {
        description: 'Expense description',
        amount: 200,
        date: '2020-12-31',
        category: 'Products',
        _id: '507f1f77bcf86cd799439016',
      },
    },
    {
      newBalance: 200,
      transaction: {
        description: 'Expense description',
        amount: 200,
        date: '2020-12-31',
        category: 'Products',
        _id: '507f1f77bcf86cd799439017',
      },
    },
    {
      newBalance: 200,
      transaction: {
        description: 'Expense description',
        amount: 200,
        date: '2020-12-31',
        category: 'Products',
        _id: '507f1f77bcf86cd799439018',
      },
    },
    {
      newBalance: 200,
      transaction: {
        description: 'Expense description',
        amount: 200,
        date: '2020-12-31',
        category: 'Products',
        _id: '507f1f77bcf86cd799439019',
      },
    },
    {
      newBalance: 200,
      transaction: {
        description: 'Expense description',
        amount: 200,
        date: '2020-12-31',
        category: 'Products',
        _id: '507f1f77bcf86cd799439020',
      },
    },
  ];

  return (
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

            <Button>
              <GoTrashcanStyled />
            </Button>
          </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
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

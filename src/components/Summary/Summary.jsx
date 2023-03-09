import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  getTransactionIncomeMonthsStats,
  getTransactionExpenseMonthsStats,
} from 'redux/Transactions/TransactionsOperations';
import { selectMonthsStats, selectTransactions } from 'redux/Transactions/selectors';
import { Container, Title, List, Item, Description } from './Summary.styled';

export const Summary = () => {
  const summaryMonth = 6; // Кількість місяцв які треба рендерить
  const stateMonts = useSelector(selectMonthsStats); // мої данні по місяцях
  const [listMonths, setlistMonths] = useState([]); // масив результатів

  const dispatch = useDispatch();
  const stateІtems = useSelector(selectTransactions); // слідкую за списком транзакцій

  const { pathname } = useLocation();
  const isIncomePage = pathname.includes('/income');
  const isExpensePage = pathname.includes('/expense');

  useEffect(() => {
    if (isIncomePage) {
      dispatch(getTransactionIncomeMonthsStats());
    }
    if (isExpensePage) {
      dispatch(getTransactionExpenseMonthsStats());
    }
    return;
  }, [stateІtems, dispatch, isExpensePage, isIncomePage, ]);


  useEffect(() => {
    const listKeyMonths = [
      'Декабрь',
      'Ноябрь',
      'Октябрь',
      'Сентябрь',
      'Август',
      'Июль',
      'Июнь',
      'Май',
      'Апрель',
      'Март',
      'Февраль',
      'Январь',
    ];

    const listMonthsEng = {
      Январь: 'January',
      Февраль: 'February',
      Март: 'March',
      Апрель: 'April',
      Май: 'May',
      Июнь: 'June',
      Июль: 'July',
      Август: 'August',
      Сентябрь: 'September',
      Октябрь: 'October',
      Ноябрь: 'November',
      Декабрь: 'December',
    };

    const result = listKeyMonths
      .map(e => {
        return { month: listMonthsEng[e], value: stateMonts[e] };
      })
      .filter(e => e.value !== 'N/A')
      .slice(0, summaryMonth);

    setlistMonths(result);
  }, [stateMonts, stateІtems]);

  return (
    <Container>
      <Title>SUMMARY</Title>
      <List>
        {listMonths.map(({ month, value }, edx) => (
          <Item key={edx}>
            <Description>{month}</Description>
            <Description> {value} </Description>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Summary;

// import { Summary } from 'components/Summary/Summary';
// <Summary />

// ********** TransactionsOperations.js *змінити:


// ********** TransactionsSlice.js
// *додати слайс
// monthsStats: {}
// *змінити:


// ********** selectors.js *додати:
// export const selectMonthsStats = state => state.transactions.monthsStats;

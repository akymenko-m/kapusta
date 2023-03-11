import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  getTransactionIncomeMonthsStats,
  getTransactionExpenseMonthsStats,
} from 'redux/Transactions/TransactionsOperations';
import {
  selectMonthsStats,
  selectTransactions,
  getIsloadingMonthsStats,
} from 'redux/Transactions/selectors';
import { Loader } from 'components/Loader/LoaderMin';
import { Container, Title, List, Item, Description, LoaderBox } from './Summary.styled';

export const Summary = () => {
  const stateMonts = useSelector(selectMonthsStats); // мої данні по місяцях
  const [listMonths, setlistMonths] = useState([]); // масив результатів

  const dispatch = useDispatch();
  const stateІtems = useSelector(selectTransactions); // слідкую за списком транзакцій

  const { pathname } = useLocation();
  const isIncomePage = pathname.includes('/income');
  const isExpensePage = pathname.includes('/expense');

  // логіка відслідковування оновлень:
  useEffect(() => {
    let timeoutId;
      timeoutId = setTimeout(() => {
        if (isIncomePage) {
          dispatch(getTransactionIncomeMonthsStats());
        }
        if (isExpensePage) {
        dispatch(getTransactionExpenseMonthsStats());
      }
      }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [stateІtems, dispatch, isExpensePage, isIncomePage]);

  // логіка побудови списку:
  useEffect(() => {
    const summaryMonth = 6; // Кількість місяцв які треба рендерить
    // ключі бекенду, порядок в масиві визначає порядок видачі
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


  const isLoading = useSelector(getIsloadingMonthsStats);




  return (
    <Container>
      <Title>SUMMARY</Title>
      {isLoading && <LoaderBox><Loader /></LoaderBox>}
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


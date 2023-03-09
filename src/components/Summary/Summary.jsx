
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMonthsStats, selectTransactions } from 'redux/Transactions/selectors';
import { Container, Title, List, Item, Description } from './Summary.styled';

export const Summary = () => {
  const summaryMonth = 6; // Кількість місяцв які треба рендерить

  const stateMonts = useSelector(selectMonthsStats);

  const stateIsLoading = useSelector(getIsloading);
  const stateІtems = useSelector(selectTransactions);
  const statenewBalance = useSelector(selectBalance);
  const statereportsQuery = useSelector();
  const statetransactionData = useSelector();
  const stateexpenses = useSelector();
  const stateincome = useSelector();
  const statecurrentReport = useSelector();
  

  const [listMonths, setlistMonths] = useState([]); // масив результатів

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
      .filter(e => e.value !== 'N/A').slice(0, summaryMonth);

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
// export const getTransactionIncome = createAsyncThunk(
//   '/transaction/getIncome',
//   async (_, thunkAPI) => {
//     try {
//       const res = await instance.get('transaction/income');
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getTransactionExpense = createAsyncThunk(
//   '/transaction/getExpense',
//   async (_, thunkAPI) => {
//     try {
//       const res = await instance.get('transaction/expense');
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// ********** TransactionsSlice.js
// *додати слайс
// monthsStats: {}
// *змінити:
// .addCase(getTransactionIncome.fulfilled, (state, { payload }) => {
//   state.items = [...payload.incomes].reverse();
//   state.monthsStats = payload.monthsStats;
//   state.isLoading = false;
// })
// .addCase(getTransactionExpense.fulfilled, (state, { payload }) => {
//   console.log('payload.expenses', payload.expenses);
//   state.items = [...payload.expenses].reverse();
//   state.monthsStats = payload.monthsStats;
//   state.isLoading = false;
// })

// ********** selectors.js *додати:
// export const selectMonthsStats = state => state.transactions.monthsStats;
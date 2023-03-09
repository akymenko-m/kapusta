import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { getReports } from 'redux/Transactions/TransactionsOperations';
import { monthNames, getMonth, getYear } from './SliderUtils';
import { Calendar } from './Calendar/Calendar';
import { SliderBox, SliderText } from './Slider.styled';
import { ButtonsNextPrev } from './ButtonsNextPrev/ButtonsNextPrev';
// import { reportsQueryAction } from 'redux/reportsQuery/reportsQuery.slice';
// import { filteredDataAction } from 'redux/reportsQuery/reportsQuery.slice';
import { useSearchParams } from 'react-router-dom';
import { getPeriodData } from 'redux/Transactions/TransactionsOperations';
import { setReportsQuery } from 'redux/Transactions/TransactionsSlice';

export const Slider = () => {
  const [monthNumber, setMonthNumber] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [modalCalendar, setModalCalendar] = useState(false);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  useEffect(() => {
    setMonthNumber(getMonth());
    setMonth(monthNames[getMonth()]);
    setYear(getYear());
  }, []);

  useEffect(() => {
    setMonth(monthNames[monthNumber]);
    let monthString = '';

    if (monthNumber + 1 < 10) {
      monthString = '0' + (monthNumber + 1);
    } else {
      monthString = monthNumber + 1;
    }
    const query = `${year}-${monthString}`;
    // if (query !== '-01') dispatch(getReports(query));
    if (query === '-01') return;
    console.log(query);
    setSearchParams({date: query });

    dispatch(setReportsQuery(query));
    dispatch(getPeriodData(query));

    // dispatch(reportsQueryAction(`${year}-${monthString}`));
  }, [monthNumber, year, dispatch, setSearchParams]);

  const handlerClick = name => {
    switch (name) {
      case 'decrement':
        // dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber - 1);
        if (monthNumber === 0) {
          setMonthNumber(11);
          setYear(year - 1);
        }
        break;
      case 'increment':
        // dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber + 1);
        if (monthNumber === 11) {
          setMonthNumber(0);
          setYear(year + 1);
        }
        break;
      default:
        return;
    }
  };

  const handleModalCalendar = () => {
    setModalCalendar(modalCalendar => !modalCalendar);
  };

  const handleCalendar = name => {
    switch (name) {
      case 'decrement':
        setYear(year - 1);

        break;
      case 'increment':
        setYear(year + 1);
        break;
      default:
        setMonthNumber(name);
        return;
    }
  };

  return (
    <SliderBox>
      <p>Current period:</p>
      <ButtonsNextPrev onButtonClick={handlerClick}>
        <SliderText onClick={handleModalCalendar}>
          {month} {year}
        </SliderText>
      </ButtonsNextPrev>
      {modalCalendar && (
        <Calendar
          currentYear={year}
          currentMonth={month}
          onChangeDate={handleCalendar}
          onClose={handleModalCalendar}
        />
      )}
    </SliderBox>
  );
};

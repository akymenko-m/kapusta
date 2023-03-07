import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { DatePickerStyled } from './DatePicker.styled';
import 'react-datepicker/dist/react-datepicker.css';

const Example = ({ onChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const getStartDate = date => {
    setStartDate(date);
    onChange(date);
  };
  return (
    <DatePickerStyled
      selected={startDate}
      onChange={getStartDate}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default Example;

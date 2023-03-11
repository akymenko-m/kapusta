import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { DatePickerStyled } from './DatePicker.styled';
import 'react-datepicker/dist/react-datepicker.css';

const Example = ({ onChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    onChange(startDate);
  }, [onChange, startDate]);

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
Example.propTypes = {
  onChange: PropTypes.func.isRequired,
};

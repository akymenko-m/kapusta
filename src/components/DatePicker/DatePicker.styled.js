import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerStyled = styled(DatePicker)`
  max-width: 70px;
  font-size: 12px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  border: none;
  padding: 10px 2px;
  color: #52555f;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;

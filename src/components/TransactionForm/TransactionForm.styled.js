import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 44px;
  margin-top: 24px;
  @media (min-width: 1280px) {
    justify-content: space-between;
    margin-top: 32px;
  }
`;
export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const InputBox = styled.div`
  display: flex;
  border: 2px solid #f6f7fc;
  border-radius: 16px 16px 16px 0px;
  height: 40px;
`;
export const DescInput = styled.input`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #989dac;
  height: 100%;
  border: none;
  padding: 2px 20px;
  border-top-left-radius: 16px;
  max-width: 160px;
  @media (min-width: 768px) {
    max-width: 160px;
  }
  @media (min-width: 1280px) {
    max-width: 260px;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;
export const CategorySelect = styled.select`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #989dac;
  height: 100%;
  border-top: none;
  border-bottom: none;
  border-right: 2px solid #f6f7fc;
  border-left: 2px solid #f6f7fc;
  padding: 2px 20px;
  max-width: 160px;
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
  @media (min-width: 768px) {
    max-width: 186px;
  }
  @media (min-width: 1280px) {
    max-width: 180px;
  }
`;

export const AmountLabelBox = styled.label`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;
export const AmountInput = styled.input`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #989dac;
  height: 100%;
  border: none;
  max-width: 110px;
  padding: 2px 20px;
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  @media (min-width: 768px) {
    max-width: 110px;
  }
  @media (min-width: 1280px) {
    max-width: 120px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const InputButton = styled.button`
  width: 125px;
  height: 44px;
  background: #ff751d;
  border-radius: 16px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;

  @media (min-width: 768px) {
    width: 136px;
  }
`;
export const ClearButton = styled.button`
  width: 125px;
  height: 44px;
  background-color: #fff;
  color: #52555f;
  border: 2px solid #f6f7fc;
  border-radius: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media (min-width: 768px) {
    width: 136px;
  }
`;

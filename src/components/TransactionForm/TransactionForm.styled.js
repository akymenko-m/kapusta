import styled from '@emotion/styled';
import { CgCalculator } from 'react-icons/cg';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 20px;
  margin-top: 24px;
  background-color: transparent;
  @media (min-width: 520px) {
    row-gap: 32px;
  }
  @media (min-width: 768px) {
    padding-top: 32px;
  }
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;
export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const InputBox = styled.div`
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  @media (min-width: 520px) {
    width: auto;
    display: flex;
    height: 40px;
    background-color: #fff;
    border: 2px solid #f6f7fc;
    border-radius: 16px 16px 16px 0px;
  }
`;
export const DescInput = styled.input`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #989dac;
  background-color: transparent;
  height: 40px;
  width: 100%;
  border: 2px solid #fff;
  padding: 2px 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  @media (min-width: 520px) {
    border-top-right-radius: none;
    border: none;
    background-color: #fff;
    height: 100%;
    max-width: 160px;
  }
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
  border: 2px solid #fff;
  background-color: transparent;
  border-top: none;
  height: 40px;
  width: 100%;
  padding: 2px 20px;
  margin-bottom: 32px;

  @media (min-width: 520px) {
    border: none;
    border-bottom: none;
    border-right: 2px solid #f6f7fc;
    border-left: 2px solid #f6f7fc;
    background-color: #fff;
    height: 100%;
    max-width: 160px;
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    max-width: 186px;
  }
  @media (min-width: 1280px) {
    max-width: 180px;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`;

export const AmountLabelBox = styled.label`
  display: flex;
  align-items: center;
  padding-right: 20px;
  height: 40px;
  border: 2px solid #fff;
  width: 130px;
  border-radius: 22px;
  margin: 0 auto;
  @media (min-width: 520px) {
    /* margin: 0; */
    height: auto;
    border: none;
    border-radius: none;
  }
`;
export const AmountInput = styled.input`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #989dac;
  height: 100%;
  background-color: transparent;
  border: none;
  max-width: 74px;
  padding: 2px 20px;

  @media (min-width: 520px) {
    background-color: #fff;
    max-width: 74px;
  }
  @media (min-width: 768px) {
    max-width: 74px;
  }
  @media (min-width: 1280px) {
    max-width: 90px;
  }
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
`;

export const CgCalculatorStyled = styled(CgCalculator)`
  height: 28px;
  width: 28px;
  color: #52555f;
  padding-left: 10px;
  @media (min-width: 520px) {
    height: 20px;
    width: 20px;
    padding-left: 0;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const InputButton = styled.button`
  width: 110px;
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
  width: 110px;
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

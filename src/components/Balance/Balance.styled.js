import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  background: #f5f6fb;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (min-width: 768px) {
   
    justify-content: space-between;
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 21px;
  }

  @media screen and (min-width: 1280px) {
    flex-grow: 1;
    justify-content: center;
  }
`;
export const BalanceWrap = styled(Link)`
  padding-top: 20px;
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: rgba(82, 85, 95, 0.7);
  font-size: 12px;
  line-height: calc(14 / 12);
  @media screen and (min-width: 768px) {
    padding-top: 0;
    margin-bottom: 0;
    order: 1;
  }
`;
export const BalanceTitle = styled.p`
  text-align: center;
  font-weight: 500;
  color: rgba(82, 85, 95, 0.7);
  margin-bottom: 8px;
`;
export const BalanceForm = styled.form`
  display: flex;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    gap: 21px;
  }
`;
export const BalanceInput = styled.input`
  padding: 0 10px;
  width: 80px;
  min-height: 44px;
  border: 2px solid #ffffff;
  border-radius: 22px 0px 0px 22px;
  background: #f5f6fb;
  color: #000000;
  &::placeholder {
    font-weight: 700;
    display: flex;
    align-items: center;
    text-align: right;
    text-transform: uppercase;
    color: #000000;
  }
  @media screen and (min-width: 768px) {
    border-radius: 16px;
    width: 140px;
    min-height: 44px;
    padding: 0 20px;
  }
`;
export const BalanceBtn = styled.button`
  width: 80px;
  min-height: 44px;
  border-radius: 0px 22px 22px 0px;
  background: #f5f6fb;
  border: 2px solid #ffffff;
  color: rgba(82, 85, 95, 0.7);
  text-transform: uppercase;
  &:active {
    background: #ff751d;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    border-radius: 16px;
    width: 140px;
    min-height: 44px;
    padding: 0 20px;
  }
`;

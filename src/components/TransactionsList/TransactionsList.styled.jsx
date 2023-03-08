import styled from '@emotion/styled';
import { GoTrashcan } from 'react-icons/go';

export const TransactionTable = styled.ul`
  border-collapse: collapse;

  margin-top: 23px;
  font-family: 'Roboto';
  width: 280px;

  @media (min-width: 768px) {
    width: 624px;
  }

  @media (min-width: 1280px) {
    margin-top:0;
    width: 746px;
  }
`;

export const TableHead = styled.li`
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 2px solid #f5f6fb;
    background-color: #f5f6fb;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const TableTitle = styled.h2`
  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  &.headerData {
    width: 84px;
  }
  &.headerBtn {
    width: 32px;
  }
  &.headerDesc {
    width: 168px;
  }
  &.headerCat {
    width: 128px;
  }
  &.headerSum {
    width: 76px;
  }
`;
export const TableBody = styled.div`
  height: 122px;

  @media (min-width: 768px) {
    height: 344px;
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f6fb;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ff751d;
      border-radius: 2px;
    }
  }
`;

export const TableRow = styled.li`
  height: 35px;
  border-bottom: 2px solid #f5f6fb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 768px) {
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 2px solid #f5f6fb;
    border-right: 2px solid #f5f6fb;
    &:last-child {
      border-bottom-right-radius: 30px;
      border-bottom-left-radius: 30px;
    }
  }
`;

export const TableData = styled.p`
  color: #52555f;
  letter-spacing: 0.04em;

  &.sumTable {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    margin-left: 20px;

    @media (min-width: 768px) {
      margin-left: 0;
      width: 104px;
    }
  }

  &.descriptionTable {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    text-transform: capitalize;
    @media (min-width: 768px) {
      font-weight: 400;
      width: 168px;
    }
  }
  &.dataTable {
    font-size: 8px;
    line-height: 1.13;

    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 1.17;
      width: 84px;
    }
  }
  &.categoryTable {
    font-size: 8px;
    line-height: 1.13;
    vertical-align: bottom;
    margin-top: 14px;

    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 1.17;
      vertical-align: middle;
      margin-top: 0;
      width: 128px;
    }
  }

  &.income {
    color: #407946;
  }
  &.expense {
    color: #e7192e;
  }
`;
export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  transition: background-color 250ms ease;
  &:hover,
  &:focus {
    background-color: #f5f6fb;
  }
`;
export const GoTrashcanStyled = styled(GoTrashcan)`
  fill: #52555f;
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin: 0 auto;
`;

export const Block = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    align-items: center;
  }
`;
export const BlockHead = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    align-items: center;
  }
`;

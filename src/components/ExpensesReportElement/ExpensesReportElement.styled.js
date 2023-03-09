import styled from '@emotion/styled';

export const ExpensesItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;
  &:hover p:last-of-type,
  &:focus p:last-of-type {
    color: #ff751d;
    font-weight: 700;
  }
  @media screen and (max-width: 767px) {
    &:nth-of-type(3n + 1)::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      background-color: #e0e5eb;
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(100% / 6);
  }
`;

export const Container = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const Total = styled.p`
  margin-bottom: 5px;
  line-height: calc(14 / 12);
  text-transform: uppercase;
  text-align: center;
  color: #52555f;
`;

export const Label = styled.p`
  margin: 0 auto;
  width: min-content;
  flex-grow: 1;
  margin-top: 5px;
  font-size: 11px;
  line-height: calc(14 / 12);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #52555f;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
`;

import styled from '@emotion/styled';

export const ExpensesItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  flex-grow: 1;
  &:nth-child(3n + 1)::after {
    content: '';
    display: block;
    width: 280px;
    height: 1px;
    position: absolute;
    /* bottom: 4px; */
    background-color: #e0e5eb;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const Container = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;
  /* display: flex;
  flex-direction: column; */
`;

export const Total = styled.p`
  margin-bottom: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;
  color: #52555f;
`;

export const Label = styled.p`
  flex-grow: 1;
  margin-top: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #52555f;
`;

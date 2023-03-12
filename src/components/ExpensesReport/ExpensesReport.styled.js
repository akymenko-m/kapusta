import styled from '@emotion/styled';

export const ExpensesList = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  position: relative;
  @media screen and (min-width: 768px) {
    justify-content: center;
    row-gap: 40px;
  }
`;

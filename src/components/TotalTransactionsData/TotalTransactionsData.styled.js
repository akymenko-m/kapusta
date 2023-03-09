import styled from '@emotion/styled';

export const Container = styled.div`
  height: 85px;
  margin-bottom: 32px;
  padding: 20px 10px 25px 10px;
  display: flex;
  justify-content: center;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  position: relative;
  @media screen and (min-width: 768px) {
    height: 50px;
    padding: 15px 134px;
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 299px;
  }
`;

export const TotalData = styled.div`
  width: calc((100%-1px) / 2);
  align-items: center;
  text-align: center;
  &:last-child::before {
    content: '';
    display: block;
    width: 1px;
    height: 70px;
    position: absolute;
    bottom: 4px;
    background-color: #e0e5eb;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    &:first-of-type {
      justify-content: flex-end;
      margin-right: 20px;
    }
    &:last-child::before {
      height: 36px;
    }
  }
`;

export const Type = styled.p`
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(16 / 14);
  color: #52555f;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 15px;
    &:first-of-type {
      margin-left: 20px;
    }
  }
`;

export const Total = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: calc(16 / 14);
  color: ${({ typeReport }) =>
    typeReport === 'Expenses' ? '#E53935' : '#407946'};
`;

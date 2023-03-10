import styled from '@emotion/styled';
export const IncomesContainer = styled.div`
  padding: 0 40px;
  @media screen and (min-width: 768px) {
    padding: 0 218px;
  }

  @media screen and (min-width: 1000px) {
    padding: 0 160px;
  }
`;

export const IncomesList = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Notify = styled.p`
  line-height: calc(14 / 12);
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #52555f;
`;

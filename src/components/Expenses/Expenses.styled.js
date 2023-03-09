import styled from '@emotion/styled';
export const TransactionContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 704px;
    padding: 0px 40px;
  }
  @media (min-width: 1280px) {
  
    max-width: 1098px;
    padding: 0px 32px;
  }
`;
export const Block = styled.div`
  margin: 0 auto;
  max-width: 280px;
  
  

  @media (min-width: 768px) {
    max-width: 624px;
  }

  @media (min-width: 1280px) {
    max-width: 1034px;
    height: auto;
    margin: 60px auto 0;
    display: flex;
    flex-direction: raw;
    justify-content: space-between;
    background-color: transparent;
  }
`;

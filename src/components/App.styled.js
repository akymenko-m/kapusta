import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 320px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 768px) {
    // padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

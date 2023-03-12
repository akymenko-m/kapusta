import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100%;
  background-color: #f5f6fb;
  border-bottom-left-radius: 30%;
  height: 286px;
  padding: 16px 20px 52px 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 32px 80px 32px;
    border-bottom-left-radius: 10%;
    height: 527px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 123px 80px 123px;
  }
`;

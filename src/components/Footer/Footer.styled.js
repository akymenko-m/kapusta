import styled from '@emotion/styled';
import back from '../../images/backgronds/cabbage-down.png';
import backMobile from '../../images/backgronds/cabbage-down-tel.png';

export const Footer = styled.div`
  background-image: url(${backMobile});
  background-repeat: no-repeat;
  background-size: contain;
  height: 90px;
  width: 90px;
  @media (min-width: 768px) {
    background-image: url(${back});
    margin-left: 135px;
    height: 145px;
    width: 145px;
  }
  @media (min-width: 1200px) {
    position: relative;
    bottom: 35px;
    left: 230px;
    width: 183px;
  }
`;

import styled from '@emotion/styled';
import back from "../../images/backgronds/cabbage-down.png";
import backMobile from "../../images/backgronds/cabbage-down-tel.png"


export const Footer = styled.div`

background-image: url(${backMobile});
background-repeat: no-repeat;
background-size: contain;
background-position:  bottom 0px left 30px;
height: 90px;
@media (min-width: 321px) {
    background-image: url(${back});
    background-position:  bottom -2px left 100px;
    height: 145px;
  };




`;

export const Wrapper = styled.div`
padding-top: 200px;
@media (min-width: 321px) {
    padding-top: 100px;
  };
`
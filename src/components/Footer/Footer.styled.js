import styled from '@emotion/styled';
import back from "../../images/backgronds/cabbage-down.png";
import backMobile from "../../images/backgronds/cabbage-down-tel.png"


export const Footer = styled.div`

background-image: url(${backMobile});
background-repeat: no-repeat;
background-size: contain;


height: 90px;
@media (min-width: 321px) {
    background-image: url(${back});
    
    height: 145px;
   
  };
  @media (min-width: 768px) {
    background-image: url(${back});
    margin-left: 135px;
   
    height: 145px;
   
  };




`;

export const Wrapper = styled.div`
width: 200px;
height: 200px;
padding-top: 336px;
    margin-left: 87px;

@media (min-width: 321px) {
    padding-top: 100px;
    padding-top: 336px;
    margin-left: 87px;
  };
`
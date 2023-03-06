import styled from '@emotion/styled';
import background from "../../images/backgronds/cabbage.png";

export const Main = styled.main`
width: 100%;
background-image: url(${background});
background-repeat: no-repeat;
background-size: contain;
background-position: top;


height: 300px;

`;
export const Background = styled.div`
z-index: -1;
position: relative;
top: 0;
left: 0;
height: 296px;
background-color: #F5F6FB;
border-bottom-left-radius: 10%;
wirdth: 100%;
@media (min-width: 320px) {
    height: 526px;
  };
`

export const  DownImg = styled.img`
position: absolute;
bottom: 0px;
left: 20px;
@media (min-width: 342px) {
    bottom: 80px;
    left: 90px;
  };`
import styled from '@emotion/styled';
import background from "../../images/backgronds/cabbage.png";


export const Main = styled.main`
width: 100%;

background-image: url(${background});
background-repeat: no-repeat;
background-size: contain;
background-position: top;




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
@media (min-width: 321px) {
    height: 526px;
  };
`
export const Wrapper = styled.div`

@media (min-width: 769px) {
  display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 157px;
};

`
export const Title = styled.img`
z-index: 5;
position: relative;
width: 183px;
height: 63px;
@media (min-width: 321px) {
  width: 377px;
height: 139px;
};


`


import styled from '@emotion/styled';
import background from '../../images/backgronds/cabbage.png';
import { Tab, Tabs, TabList } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import { NavLink } from 'react-router-dom';

export const CabbageTop = styled.div`
  width: 100%;

  background-image: url(${background});
  background-repeat: repeat-x;
  background-size: contain;
  background-position: top left;

  height: 300px;
`;
export const CabbageBottom = styled.div`
  width: 100%;
  z-index: -1;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url(${background});
  background-repeat: repeat-x;
  background-size: contain;
  background-position: bottom;

  height: 300px;
`;
export const Background = styled.div`
  top: 0;
  left: 0;
  height: 296px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 10%;
  wirdth: 100%;
  @media (min-width: 321px) {
    height: 526px;
  } ;
`;

export const Wrapper = styled.div`
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 157px;
  } ;
`;
export const Title = styled.img`
  z-index: 5;
  position: relative;
  width: 183px;
  height: 63px;
  @media (min-width: 321px) {
    width: 377px;
    height: 139px;
  } ;
`;
export const TabsStyled = styled(Tabs)`
  margin: 0 auto;
  background-color: #ffffff;

  @media (min-width: 768px) {
    max-width: 704px;

    box-shadow: inset 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }

  @media (min-width: 1280px) {
    max-width: 1098px;

    margin: 0 auto;
    box-shadow: inset 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
  }
`;
export const TabStyled = styled(Tab)`
background-color: #FEFEFE;
border:none;
width: 138px;
height: 40px;
border-radius: 30px 30px 0 0 ;

}
`;

export const TabListStyled = styled(TabList)`
  background-color: #f5f6fb;
  border: none;
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 0 25px;

  color: #ff751d;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

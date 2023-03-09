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
  border-bottom-left-radius: 30%;
  width: 100%;
  height: 416px;
  @media (min-width: 768px) {
    height: 526px;
    border-bottom-left-radius: 10%;
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
  }
  @media (min-width: 1280px) {
    margin-bottom: 155px;
  }
`;
export const TabsStyled = styled(Tabs)`
  margin: 0 auto;
  background-color: transparent;

  @media (min-width: 768px) {
    max-width: 704px;
    border-radius: 30px;

    & .react-tabs__tab-panel--selected {
      position: relative;
      top: -24px;
      border-radius: 0 30px 30px 30px;
      box-shadow: 0px 50px 60px rgba(170, 178, 197, 0.2);
      background-color: #ffffff;
    }
  }

  @media (min-width: 1280px) {
    max-width: 1098px;
  }

  & .react-tabs__tab-list {
    border: none;
    margin: 0;
  }
`;
export const TabStyled = styled(Tab)`

  background-color: #f7741d;

  width: 50%;
  height: 53px;
  padding: 19px 12px;
  text-align: center;
  transition: background-color 250ms ease;
  
  @media (min-width: 768px) {
    background-color: #FEFEFE;
    padding: 13px 12px;
    width: 138px;
    height: 40px;
    border-radius: 30px 30px 0 0;
  }
`;

export const TabListStyled = styled(TabList)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  margin: 0;
  @media (min-width: 768px) {
    position: relative;
    width: 276px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: color 250ms ease;

  @media (min-width: 768px) {
    margin: 0px 25px;
    color: black;
  }
`;

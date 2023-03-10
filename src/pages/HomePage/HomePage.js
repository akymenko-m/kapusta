import {
  Background,
  CabbageBottom,
  TabsStyled,
  TabListStyled,
  TabStyled,
  NavLinkStyled,
} from './HomePage.styled';
import { TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import  LoginPage  from '../LoginPage/LoginPage';
import { Container } from 'components/App.styled';
import { Balance } from 'components/Balance/Balance';
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import { useEffect } from 'react';
import { useChangeColor } from 'helpers/changeColor';

const HomePage = () => {
  useChangeColor();
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const index = location.pathname === '/income' ? 1 : 0;
  const navigate = useNavigate();
  const path = location.pathname === '/' ? '/expenses' : location.pathname;
  useEffect(() => {
    navigate(path || '/login');
  }, [navigate, path, isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <Background>
          <Container>
            {' '}
            <div>
              <Balance />
              <TabsStyled selectedIndex={index} onSelect={() => {}}>
                <TabListStyled>
                  <TabStyled className=" react-tabs__tab css-11la0xy expenseTab">
                    <NavLinkStyled className="expenseTab" to="expenses">
                      Expenses
                    </NavLinkStyled>
                  </TabStyled>
                  <TabStyled className="react-tabs__tab css-11la0xy incomeTab">
                    <NavLinkStyled className="incomeTab" to="income">
                      Income
                    </NavLinkStyled>
                  </TabStyled>
                </TabListStyled>
                <TabPanel>{<Outlet />}</TabPanel>
                <TabPanel>{<Outlet />}</TabPanel>
              </TabsStyled>
            </div>
          </Container>
          <CabbageBottom />
        </Background>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default HomePage;

// <Background>
//   <CabbageTop>
//     <Container>
//       {' '}
//       <Wrapper>
//         <div>
//           <Title src={title} />
//         </div>
//         <div>
//           <LoginPage />
//           <RegisterPage />
//         </div>
//       </Wrapper>
//       <FooterOfApp />
//     </Container>
//   </CabbageTop>
// </Background>

import { Main, Title, Wrapper, Background } from './HomePage.styled';
import title from '../../images/title/title.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage';
import { Expenses } from 'components/Expenses/Expenses';
import { Income } from 'components/Income/Income';
import { FooterOfApp } from 'components/Footer/Footer';
import { Container } from 'components/App.styled';
import { Balance } from 'components/Balance/Balance';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

export const HomePage = () => {
  const location = useLocation();
//   const goBackLink = location?.state?.from ?? '/';
  const { isLoggedIn } = useAuth();
  console.log(location);

  return (
    <>
      <Background>
        <Main>
          <Container>
            {isLoggedIn ? (
              <div>
               
                <Balance />
                <Tabs>
                  <TabList>
                    <Tab>
                      <NavLink state={{ from: location }} to="expenses">
                        Expenses
                      </NavLink>
                    </Tab>
                    <Tab>
                  
                      <NavLink state={{ from: location }} to="income">
                        Income
                      </NavLink>
                    </Tab>
                  </TabList>
                  <TabPanel>{<Expenses />}</TabPanel>
                  <TabPanel>{<Income />}</TabPanel>
                </Tabs>
                <Outlet/>
              </div>
            ) : (
              <Wrapper>
                <div>
                  <Title src={title} />
                </div>
                <div>
                  <LoginPage />
                  <RegisterPage />
                </div>
              </Wrapper>
            )}

          

            <FooterOfApp />
          </Container>
        </Main>
      </Background>
    </>
  );
};

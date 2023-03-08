import { Main, Title, Wrapper, Background } from './HomePage.styled';
import title from '../../images/title/title.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage';
// import { Expenses } from 'components/Expenses/Expenses';
// import { Income } from 'components/Income/Income';
import { FooterOfApp } from 'components/Footer/Footer';
import { Container } from 'components/App.styled';
import { Balance } from 'components/Balance/Balance';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();


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
                      <NavLink  to="expenses">
                        Expenses
                      </NavLink>
                    </Tab>
                    <Tab>
                  
                      <NavLink to="income">
                        Income
                      </NavLink>
                    </Tab>
                  </TabList>
                  <TabPanel >{<Outlet />}</TabPanel>
                  <TabPanel >{<Outlet />}</TabPanel>
                 
                </Tabs>
            
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

import { Main, Title, Wrapper , Background } from './HomePage.styled';
import title from '../../images/title/title.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage';
import { Logout } from 'components/Logout';
import { Expenses } from 'components/Expenses/Expenses';
import { Income } from 'components/Income/Income';
import { FooterOfApp } from 'components/Footer/Footer';
import { Container } from 'components/App.styled';
import { Balance } from 'components/Balance/Balance';
export const HomePage = () => {
  return (
    <>
      <Background>
      <Main>
        <Container>
    
     
    
        <Wrapper>
          <div>
            <Title src={title} />
          </div>
          <div>
            <LoginPage />
            <RegisterPage />
          </div>
        </Wrapper>

        <Logout />

        <Tabs>
        <TabList>
          <Tab>Expenses</Tab>
          <Tab>Income</Tab>
        </TabList>

        <TabPanel>{<Expenses />}</TabPanel>
        <TabPanel>{<Income />}</TabPanel>
      </Tabs>
       
     
      <Balance />
     
      <FooterOfApp />
      </Container>
      </Main>
      </Background>
    </>
  );
};

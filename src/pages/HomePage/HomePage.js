import { Main, Background, Title, Wrapper } from './HomePage.styled';
import title from '../../images/title/title.png';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage';
import { Logout } from 'components/Logout';
import { FooterOfApp } from 'components/Footer/Footer';
import { Balance } from 'components/Balance/Balance';
export const HomePage = () => {
  return (
    <>
      <Main>
        <Background>
<<<<<<< HEAD
          <h4>домашня сторінка</h4>
          <DownImg src={back} alt="cabbage" />
        </Background>
        <LoginPage />
        <RegisterPage />
        <Logout />
=======
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
        </Background>
>>>>>>> main
      </Main>
      <FooterOfApp />
      <Balance />
    </>
  );
};

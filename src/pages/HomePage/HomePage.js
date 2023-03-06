
import {Main,  Background,  DownImg} from './HomePage.styled'
import back from "../../images/backgronds/cabbage-down.png";
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage'
import { Logout } from 'components/Logout';

export const HomePage = () =>{


    return (
      <Main>
       <Background>
        <h4>домашня сторінка</h4>
            <LoginPage />
        <RegisterPage />
        <Logout/>
         < DownImg src={back} alt="cabbage"/>
         </Background> 
      </Main>
    );
}
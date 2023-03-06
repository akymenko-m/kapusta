import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from '../LoginPage/LoginPage'
import { Logout } from 'components/Logout';

export const HomePage = () =>{


    return (
      <>
        <h4>домашня сторінка</h4>
            <LoginPage />
        <RegisterPage />
        <Logout/>
      </>
    );
}
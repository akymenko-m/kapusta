import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from 'redux/user/userOperations';
import { GoogleLogin } from '../../components/LoginRegister/GoogleLogin/GoogleLogin';
import { LoginRegisterText } from '../../components/LoginRegister/LoginRegisterText/LoginRegisterText';
// import {LoginRegisterWrapper} from '../../components/LoginRegister/LoginRegisterWrapper'
import {
  LoginPageWrapper,
  LoginForm,
  LoginFormLabel,
  LoginFormInput,
  LoginButton,
  RegisterNavLink,
} from './LoginPage.styled';

export function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(login(user));
    event.target.reset();
  };

  return (
    <LoginPageWrapper>
      <GoogleLogin />
      <LoginRegisterText />
      <LoginForm onSubmit={handleSubmit}>
        <LoginFormLabel>
          Email:
          <LoginFormInput
            type="text"
            name="email"
            placeholder="your@mail.com"
            requred
          />
        </LoginFormLabel>
        <LoginFormLabel>
          Password:
          <LoginFormInput
            type="password"
            name="password"
            placeholder="password"
            requred
          />
        </LoginFormLabel>
        <LoginButton type="submit">Log in</LoginButton>
      </LoginForm>
      <RegisterNavLink>
        <NavLink to="/register" style={{ padding: '12px 14px' }}>
          Registration
        </NavLink>
      </RegisterNavLink>
    </LoginPageWrapper>
  );
}

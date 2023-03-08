import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/user/userOperations';
import { GoogleLogin } from '../components/LoginRegister/GoogleLogin/GoogleLogin';
import { LoginRegisterText } from '../components/LoginRegister/LoginRegisterText/LoginRegisterText';
import {
  RegisterPageWrapper,
  RegisterForm,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterButton,
  LoginNavLink
} from './RegisterPage.styled';

export function RegisterPage() {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
    event.target.reset();
  };

  return (
    <RegisterPageWrapper>
      <GoogleLogin />
      <LoginRegisterText />
      <RegisterForm
        onSubmit={handleSubmit}
      >
        <RegisterFormLabel>
          Email:
          <RegisterFormInput
            type="text"
            name="email"
            placeholder="your@email.com"
            requred
          />
        </RegisterFormLabel>
        <RegisterFormLabel>
          Password:
          <RegisterFormInput
            type="text"
            name="password"
            placeholder="password"
            requred
          />
        </RegisterFormLabel>
        <RegisterButton type="submit">Registration</RegisterButton>
      </RegisterForm>
      <LoginNavLink>
        <NavLink to="/login" style={{ padding: '12px 14px' }}>
          Log in
        </NavLink>
      </LoginNavLink>
    </RegisterPageWrapper>
  );
}

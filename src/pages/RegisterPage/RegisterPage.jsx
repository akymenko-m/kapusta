import {
  Wrapper,
  Title,
  Background,
  CabbageTop,
} from 'pages/HomePage/HomePage.styled';
import title from '../../images/title/title.png';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/user/userOperations';
import { GoogleLogin } from '../../components/LoginRegister/GoogleLogin/GoogleLogin';
import { LoginRegisterText } from '../../components/LoginRegister/LoginRegisterText/LoginRegisterText';
import { Container } from 'components/App.styled';
import { FooterImg } from 'components/Footer/Footer';
import {

  RegisterPageWrapper,
  RegisterForm,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterButton,
  LoginNavLink,
} from './RegisterPage.styled';

function RegisterPage() {
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
    <Background>
      <CabbageTop>
        <Container>
          <Wrapper>
            <div>
              <Title src={title} />
            </div>
            <div>
              <RegisterPageWrapper>
                <GoogleLogin />
                <LoginRegisterText />
                <RegisterForm onSubmit={handleSubmit}>
                  <RegisterFormLabel>
                    Email:
                    <RegisterFormInput
                      type="text"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                  </RegisterFormLabel>
                  <RegisterFormLabel>
                    Password:
                    <RegisterFormInput
                      type="text"
                      name="password"
                      placeholder="password"
                      required
                    />
                  </RegisterFormLabel>
                  <RegisterButton path="/expenses" type="submit">
                    Registration
                  </RegisterButton>
                </RegisterForm>
                <LoginNavLink>
                  <NavLink to="/login" style={{ padding: '12px 14px' }}>
                    Log in
                  </NavLink>
                </LoginNavLink>
              </RegisterPageWrapper>
            </div>
          </Wrapper>
          <FooterImg />
        </Container>
      </CabbageTop>
    </Background>
  );
}

export default RegisterPage;

import { GoogleLoginWrapper } from './GoogleLogin.styled';
import google from '../../../images/google/google.svg';
import {GoogleLoginBtn} from './GoogleLogin.styled'

export function GoogleLogin() {
  return (
    <GoogleLoginWrapper>
      <p>You can log in with your Google Account:</p>
      <GoogleLoginBtn>
        <img src={google} alt="google" />
        Google
      </GoogleLoginBtn>
    </GoogleLoginWrapper>
  );
}

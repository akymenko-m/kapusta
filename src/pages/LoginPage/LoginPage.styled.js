import styled from '@emotion/styled';

export const LoginPageWrapper = styled.div`
  @media (min-width: 320px) {
    width: 280px;
    color: #52555f;
    background-color: #ffffff;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: white;
    border-radius: 30px;
    padding: 40px 20px;
    position: relative;
    margin-top: 50px;
    box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  }
  @media screen and (min-width: 768px) {
    padding: 56px 83px;
    width: 426px;
    margin-top: 80px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const LoginForm = styled.form`
  @media (min-width: 321px) {
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 259px;
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const LoginFormLabel = styled.label`
  @media (min-width: 321px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-style: normal;
    font-size: 10px;
    line-height: 12px;
    /* identical to box height */

    letter-spacing: 0.04em;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const LoginFormInput = styled.input`
  @media (min-width: 321px) {
    background-color: #f6f7fb;
    color: #a6abb9;
    font-size: 14px;
    line-height: 16px;
    padding: 17px 19px;
    border-radius: 30px;
    border: none;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const LoginButton = styled.button`
  @media (min-width: 321px) {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.02em;
    width: 116px;
    padding: 12px 14px;
    background-color: #f5f6fb;
    color: ##52555f;
    font-size: 12px;
    line-height: 14px;
    border-radius: 16px;
    border: none;
    margin-top: 40px;
  }
`;

export const RegisterNavLink = styled.div`
  @media (min-width: 321px) {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.02em;
    width: 116px;
    // padding: 12px 14px;
    background-color: #f5f6fb;
    color: ##52555f;
    font-size: 12px;
    line-height: 14px;
    border-radius: 16px;
    border: none;
    position: absolute;
    margin-top: 40px;
    bottom: 40px;
    right: 20px;
    // cursor:pointer;
  }
  @media screen and (min-width: 768px) {
    bottom: 56px;
    right: 83px;
  }
`;

export const Background = styled.div`
top: 0;
left: 0;
height: 296px;
background-color: #f5f6fb;
border-bottom-left-radius: 10%;
wirdth: 100%;

@media (min-width: 321px) {
  height: 526px;
} ;
`

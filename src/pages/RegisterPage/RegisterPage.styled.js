import styled from '@emotion/styled';
import back from "../../images/backgronds/cabbage-down.png";
import backMobile from "../../images/backgronds/cabbage-down-tel.png"
export const RegisterPageWrapper = styled.div`
  background-color: #ffffff;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 30px;
  position: relative;
  @media screen (max-width: 319px) {
    width: 250px;
  }
  @media (max-width: 767px) {
    width: 280px;
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
`;

export const Regtext = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  @media screen and (max-width: 319px) {
    gap: 10px;
  }
  @media (min-width: 320px) {
    width: 240px;
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 259px;
    gap: 32px;
  }
`;

export const RegisterFormLabel = styled.label`
  color: #000000;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
    line-height: 1.2;
  }
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.17;
  }
`;

export const RegisterFormInput = styled.input`
  background-color: #f6f7fb;
  color: #a6abb9;
  font-size: 14px;
  line-height: 16px;
  padding: 17px 19px;
  border-radius: 30px;
  border: none;
`;

export const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.02em;
  width: 116px;
  padding: 12px 14px;
  font-size: 12px;
  line-height: 14px;
  border-radius: 16px;
  border: none;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
  background-color: #ff751d;
  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.7);
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const LoginNavLink = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.02em;
  width: 116px;
  // padding: 12px 14px;
  background-color: #f5f6fb;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  border-radius: 16px;
  border: none;
  position: absolute;
  text-transform: uppercase;
  cursor: pointer;
  transition-property: box-shadow, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  &:active {
    box-shadow: 1px 3px 5px rgba(255, 107, 8, 0.35);
    background-color: #ff751d;
  }
  &:hover,
  &:focus {
    box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.7);
  }
  @media screen and (max-width: 767px) {
    bottom: 40px;
    left: 20px;
  }
  @media (min-width: 768px) {
    bottom: 56px;
    left: 83px;
  }
`;
export const Title = styled.img`
  z-index: 5;
  position: relative;
  top: 30px;

  width: 183px;
  height: 63px;
 
  @media(min-width: 767px) {
    margin-left: 135px;
    width: 377px;
    height: 139px;
  }
  @media (min-width: 1280px) {
    margin-top: 138px;
  }
`;

export const FooterImg = styled.div`

background-image: url(${backMobile});
background-repeat: no-repeat;
background-size: contain;
height: 90px;
width: 90px;
@media (min-width: 768px) {
    background-image: url(${back});
    margin-left: 135px;
   
    height: 145px;
    width: 145px;
   
  }
  @media(min-width: 1200px){
    position: relative;
    bottom: -60px;
    left: 230px;
    width: 183px;
}
`;

export const Notification = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 8px;
  color: red;
`;

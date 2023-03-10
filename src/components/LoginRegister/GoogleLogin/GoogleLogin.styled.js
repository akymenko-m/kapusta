import styled from '@emotion/styled';

export const GoogleLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media (min-width: 321px) {
    width: 222px;
    letter-spacing: 0.04em;
    color: #52555f;
  }
  @media screen and (min-width: 768px) {
    width: 248px;
  }
`;

export const GoogleLoginBtn = styled.button`
  display: flex;
  background: #f6f7fb;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  padding: 10px 20px;
  gap: 10px;
  max-width: 119px;
  box-shadow: 1px 2px 3px rgba(170, 178, 197, 0.2);
  transition-property: box-shadow       ;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.6);
  }

  @media screen and (max-width: 767px) {
    border-radius: 30px;
    margin-top: 16px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 20px;
    border-radius: 26px;
    margin-bottom: 32px;
  }
`;

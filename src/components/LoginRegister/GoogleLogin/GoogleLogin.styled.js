import styled from '@emotion/styled';

export const GoogleLoginWrapper = styled.div`
  @media (min-width: 321px) {
    width:222px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    letter-spacing: 0.04em;
    color: #52555F;
}
  @media screen and (min-width: 768px) {
     width:248px;
  }

  @media screen and (min-width: 1280px) {
  }
`;


export const GoogleLoginBtn = styled.button`
  background: #f6f7fb;
  border-radius: 26px;
  max-width: 122px;
  display: flex;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  padding: 10px 20px;
  gap: 10px;
  margin-top: 16px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 119px;
    margin-top: 20px;
  }
`;

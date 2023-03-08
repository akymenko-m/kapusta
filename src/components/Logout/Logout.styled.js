import styled from '@emotion/styled';

export const HederUserWrapper = styled.div`
  @media (min-width: 321px) {
    background-color: #ffffff;
    display: flex;
    gap: 16px;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const UserIcon = styled.div`
@media (min-width: 321px) {
 background-color: #f5f6fa;
  width:width: 32px;
border-radius:50%;
font-weight: 700;
font-size: 12px;
line-height: 1.17;
text-align: center;
letter-spacing: 0.04em;
padding: 9px 12px;
}
 
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {

  }
`;

export const UserWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
  }
  gap: 16px;
  padding-right: 20px;
  border-right: 1px solid #E0E5EB;
  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const UserEmail = styled.p`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media (min-width: 321px) and (max-width:767px) {
  }
  @media screen and (min-width: 768px) {
    display: flex;
    padding-right: 20px;
    text-align: center;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ExitButton = styled.div`
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    text-decoration: underline;
  }
  margin-left: 20px;
  @media screen and (min-width: 1280px) {
  }
`;
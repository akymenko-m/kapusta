import styled from '@emotion/styled';

export const HederUserWrapper = styled.div`
    background-color: #ffffff;
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const UserIcon = styled.div`
    background-color: #f5f6fa;
    width: 32px;
    border-radius: 50%;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    text-align: center;
    letter-spacing: 0.04em;
    padding: 9px 12px;
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (max-width: 767px) {
    padding-right: 0;
    border: none;
  }
  padding-right: 20px;
  border-right: 1px solid #e0e5eb;
  @media (min-width: 1280px) {
    gap: 12px;
  }
`;

export const UserEmail = styled.p`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    padding-right: 20px;
    text-align: center;
    align-items: center;
  }
`;

export const ExitButton = styled.div`
  @media screen and (min-width: 768px) {
    text-decoration: underline;
    cursor:pointer;
  }
  margin-left: 20px;
  @media screen and (min-width: 1280px) {
  }
`;

export const ExitText = styled.span`
 display:none;
  @media screen and (min-width: 768px) {
display:flex;
padding:15px;
  }
`;

export const ExitIcon = styled.img`
  @media screen and (max-width: 767px) {
    display: flex;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
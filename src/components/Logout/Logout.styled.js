import styled from '@emotion/styled';

export const HederUserWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    background-color: #ffffff;
    gap: 8px;
    align-items: center;
  }
  @media screen and (min-width: 767px) {
    background-color: #ffffff;
    gap: 8px;
    align-items: center;
  }
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
  @media screen and (min-width: 768px) {
    border-right: 1px solid #e0e5eb;
  }
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

export const ExitButton = styled.button`
  @media screen and (min-width: 768px) {
    background-color: #fff;
    text-decoration: underline;
    cursor: pointer;
    margin: 0;
  }
`;

export const ExitText = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 8px 0 8px 12px;
  }
`;

export const ExitIcon = styled.img`
  @media screen and (max-width: 767px) {
    background-color: #fff;
    display: flex;
    padding: 8px 0 8px 8px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

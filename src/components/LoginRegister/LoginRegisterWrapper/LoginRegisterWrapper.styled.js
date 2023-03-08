import styled from '@emotion/styled';

export const LogRegWrapper = styled.div`
  @media screen and (max-width: 767px) {
    width: 280px;
    color: #52555f;
    background-color: #ffffff;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.04em;
    line-height: 14px;
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
  @media (min-width: 768px) {
    padding: 56px 83px;
    width: 426px;
    margin-top: 80px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
`;
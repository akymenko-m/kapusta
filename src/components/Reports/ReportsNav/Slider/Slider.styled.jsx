import styled from '@emotion/styled';

export const SliderBox = styled.div`
  margin-bottom: 32px;
  padding-top: 16px;
  text-align: center;
  position: relative;
  @media (min-width: 768px) {
    padding-top: 0;
    order: 3;
  }
`;

export const SliderText = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 0 5px;
  border: none;
  color: #000000;
  background-color: transparent;
`;
export const CurPeriod = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
`;

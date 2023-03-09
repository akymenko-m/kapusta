import styled from '@emotion/styled';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export const ReportContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    padding: 20px 40px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
    background-color: #ffffff;
    overflow: hidden;
  }

  @media screen and (min-width: 1000px) {
    margin-bottom: 40px;
    padding: 20px 205px;
  }
`;

export const ReportType = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ReportName = styled.p`
  margin: 0 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(16/14);
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
`;

export const BtnReport = styled.button`
  background-color: transparent;
`;

export const GrFormPreviousStyled = styled(GrFormPrevious)`
  & polyline {
    stroke: #ff751d;
    stroke-width: 3;
  }
`;
export const GrFormNextStyled = styled(GrFormNext)`
  & polyline {
    display: block;
    stroke: #ff751d;
    stroke-width: 3;
    width: 4px;
    height: 10px;
  }
`;

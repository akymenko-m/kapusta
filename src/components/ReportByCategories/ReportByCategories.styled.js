import styled from '@emotion/styled';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export const ReportType = styled.div`
  background-color: #ffffff;
  display: flex;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ReportName = styled.p`
  margin: 0 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const BtnReport = styled.button`
  background-color: transparent;
`;

export const GrFormPreviousStyled = styled(GrFormPrevious)`
  & polyline {
    stroke: #ff751d;
  }
`;
export const GrFormNextStyled = styled(GrFormNext)`
  & polyline {
    stroke: #ff751d;
  }
`;

import styled from '@emotion/styled';

export const IncomesItem = styled.li`
  width: calc((100% -20px) / 2);
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    &:nth-of-type(1)::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      background-color: #e0e5eb;
    }
  }
`;
export const Label = styled.p`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  margin-top: 5px;
  font-size: 11px;
  line-height: calc(14 / 12);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #52555f;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

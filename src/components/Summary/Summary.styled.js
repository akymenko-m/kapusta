import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 230px;
  height: 278px;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const LoaderBox = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
zIndex: '2',
background: 'rgba(0, 0, 0, 0.1)',
`;
export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  background: #f5f6fb;
  border: 1px solid #ffffff;
  border-radius: 20px 20px 0 0;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;
  list-style: none;
  height: 136%;
  overflow-x: hidden;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  height: 38px;
  background: #f5f6fb;
  border: 1px solid #ffffff;
  
  &:last-child {
    border-bottom-right-radius: 20px;
  }
`;

export const Description = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52555f;
  padding: 0 22px 0 22px;
  border-radius: 0 0 20px 0;
`;
import styled from '@emotion/styled';


export const Container = styled.div`
margin-left: auto;
margin-right: auto;
padding-left: 20px;
padding-right: 20px;
max-width: 320px;


@include mq(tablet) {
  max-width: 768px;
  padding-left: 32px;
  padding-right: 32px;
}

@include mq(desktop) {
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;
}
`
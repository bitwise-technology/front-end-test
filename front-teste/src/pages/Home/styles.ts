import styled from 'styled-components';
import polygon from '../../assets/images/polygon.png';

export const LayoutHome = styled.div`
  width: 100vw;
  height: 100vh;

  padding-left: 150px;
  padding-top: 60px;
  padding: 60px 0 40px 150px;

  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 50%;
`;

export const Container = styled.div`
  width: 35%;
  height: 100%;
`;

export const Title = styled.h1`
  width: 540px;
  height: 96px;

  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 48px;
  letter-spacing: -3px;
  color: #42163a;

  margin-top: 130px;

  span {
    font-weight: 700;
    font-size: 42px;
    line-height: 48px;
    letter-spacing: -3px;
    color: #42163a;
  }
`;
export const ContainerInput = styled.div`
  margin-top: 90px;
`;

export const ContainerMedias = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: -100px;
  margin-top: 120px;

`;



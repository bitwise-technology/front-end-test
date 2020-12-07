import styled from "styled-components";

export const PageContainer = styled.div`
  padding-left: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-height: 100vh;
  background: linear-gradient(359.39deg, #efeeee 0.46%, #ffffff 99.42%);

  @media screen and (min-width: 1366px) {
    max-width: 1440px;
    margin: auto;
    position: relative;
    box-shadow: 0px 0px 10px #ccc;
  }

  @media screen and (max-width: 1366px) {
    padding-left: 100px;

    max-width: 1366px;
    margin: auto;
  }

  @media screen and (max-width: 700px) {
    padding-left: 0;
    align-items: center;
  }
`;

export const StyledBackgroundImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 1366px) {
    width: 650px;
  }

  @media screen and (max-width: 992px) {
    width: 450px;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const StyledPeopleWorkingImage = styled.img`
  position: absolute;
  right: 154px;
  top: 164px;
  z-index: 1;

  @media screen and (max-width: 1366px) {
    top: 200px;
    right: 120px;
    width: 350px;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

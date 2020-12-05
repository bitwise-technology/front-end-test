import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 391px;
  background-color: #382039;
  margin-top: -5px;
  color: #fd71ea;

  padding-left: 247px;
  padding-right: 261px;

  line-height: 20px;
  font-size: 12px;

  @media screen and (max-width: 1366px) {
    padding-left: 124px;
    padding-right: 130px;
  }

  @media screen and (max-width: 992px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 70px;
  }

  @media screen and (max-width: 800px) {
    height: auto;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const BitwiseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 61px;

  @media screen and (max-width: 992px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);

    gap: 20px 20px;

    justify-items: center;
  }
`;

export const BitwiseMotto = styled.p`
  max-width: 369px;
  font-weight: 325;
  letter-spacing: 1px;
`;

export const BitwiseLocation = styled.div``;

export const StyledHorizontalLineContainer = styled.hr`
  margin-top: 61px;

  background-color: var(--footerTextColor);
  height: 1px;
  border: none;
`;

export const CopyrightGroup = styled.div`
  color: var(--footerTextColor);
  padding-top: 61px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const IconsContainer = styled.div`

  & > :first-child {
    margin-right: 10px;
  }

  @media screen and (max-width: 700px) {
    margin: 30px 0;
  }
`;

export const CopyrightText = styled.p`
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;
export const BackToTopText = styled.p`
  font-weight: bold;
  align-items: center;
  cursor: pointer;
`;

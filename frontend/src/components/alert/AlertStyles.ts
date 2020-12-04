import styled from "styled-components";

export const AlertContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;
  top: 50px;
  width: 786px;
  height: 198px;
  background-image: linear-gradient(90deg, #a51c92 0%, #f638dc 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 40px;

  color: #f0f0f0;

  @media screen and (max-width: 1366px) {
    max-width: 50vw;
  }

  @media screen and (max-width: 992px) {
    border-radius: 0;

    border-bottom-left-radius: 20px;

    top: 0;
    max-width: 50vw;
  }

  @media screen and (max-width: 780px) {

    border-radius: 0;
    top: 0;
    max-width: 100vw;
  }
`;

export const AlertCloseButton = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
`;

export const AlertTitle = styled.h2`
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -1px;
  max-width: 504px;
`;

export const AlertFooter = styled.div`
  display: flex;
  max-width: 504px;
  align-items: center;
`;

export const AlertSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  flex: 1;
`;

export const SocialMedia = styled.div`
  & > :first-child {
    margin-right: 10px;
  }

  & > * > path {
    fill: #fff !important;
  }

  @media screen and (max-width: 1366px) {
    padding-right: 20px;
  }
`;

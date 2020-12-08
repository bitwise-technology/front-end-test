import styled, { keyframes } from "styled-components";


const fadeIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1)
  }
`;

export const AlertContainer = styled.div`
  animation: ${fadeIn} 0.3s linear forwards;

  position: absolute;
  right: 0;
  z-index: 2;
  top: 50px;

  width: 786px;
  height: 198px;

  background-image: linear-gradient(90deg, var(--purple) 0%, var(--purple-light) 100%);

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

  cursor: pointer;
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
  align-items: center;

  max-width: 504px;
`;

export const AlertSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  
  flex: 1;
`;

export const SocialMediaContainer = styled.div`
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

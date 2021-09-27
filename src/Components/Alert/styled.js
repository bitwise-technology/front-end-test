import styled from "styled-components";

export const AlertContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
`;

export const Alertdiv = styled.div`
  width: 786px;
  height: 198px;
  border-radius: 20px;
  background: linear-gradient(to top, #a51c92, #f638dc);
  position: relative;

  h2 {
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    font-family: "Poppins", monospace;
    margin-top: 56px;
    margin-left: 40px;
  }

  .social {
    margin-top: 44px;
    display: flex;
    align-items: center;
  }

  .social p {
    color: #f0f0f0;
    font-size: 14px;
    font-family: "Poppins", monospace;
    margin-left: 40px;
    margin-right: 18px;
  }
`;

import styled from "styled-components";
import squareBg from "../../svg/square-background.svg";

export const FooterDash = styled.footer`
  background-color: #382039;
  width: 100%;
  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .logoDescription {
      display: flex;
      align-items: center;

      p {
        width: 369px;
        color: #fd71ea;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 1px;
        font-family: "Poppins", monospace;
      }
    }

    .places {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        margin-left: 26px;
      }

      p {
        width: 169px;
        color: #fd71ea;
        font-family: "Poppins", monospace;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 1px;
      }

      h2 {
        color: #f0f0f0;
        font-weight: bold;
        font-size: 12px;
        font-family: "Poppins", monospace;
        letter-spacing: 1px;
        margin-bottom: 8px;
      }
    }
  }

  .border {
    width: 946px;
    height: 3px;
    background-color: #a51c92;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }

  .footerBottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 60px;
    padding: 16px;

    p {
      color: #fd71ea;
      font-family: "Poppins", monospace;
    }

    a {
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #fd71ea;
      font-family: "Poppins", monospace;
    }
  }
`;

export const PreFooter = styled.div`
  width: 100%;
  height: 140px;
  margin-top: 140px;

  background: #382039 url(${squareBg}) center center repeat-x;
  background-size: contain;
`;

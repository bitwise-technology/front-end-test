import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition-property: background-color, margin;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }

  body {
    display: flex;
    background-color: #EFEEEE;
    color: black;
    animation-name: drop;
    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: initial;
  }

  body, input, button, textarea {
    font: 60 22px  GothamPro, sans-serif;

    outline-style: none;

    @media(max-width: 1080px) {
      font: 60 18px  GothamPro, sans-serif;
  }
  }
  `;
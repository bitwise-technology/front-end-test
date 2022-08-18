import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;


body {
  /* background:linear-gradient(top, #efeeee, #f3f2f2, #f7f6f7, #fbfbfb, #ffffff);
  -webkit-font-smoothing: antialiased; */
  background: #f5f5f5;
}

body, input, button {
  font: 16px Roboto, sans-serif;

}

@font-face {
  font-family: "Gotham-Bold";
  src: local("Gotham"), url(~/assets/fonts/Gotham/GothamBold.ttf) format("opentype");
}
@font-face {
  font-family: "Gotham-Book";
  src: local("Gotham"), url(~/assets/fonts/Gotham/GothamBook.ttf) format("opentype");
}

#root {
  margin: 0 auto;
  padding: 0;
}

  button {
    cursor: pointer;
  }
}
`


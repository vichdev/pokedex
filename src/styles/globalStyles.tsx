import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pokemon-Normal';
    src:url(./assets/fonts/Pokemon-Normal.ttf.woff) format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  font: 400 14px "Pokemon-Normal", sans-serif;
  background-image: url(${background});
}

input,
button,
textarea {
  font: 400 18px "Pokemon-Normal", sans-serif;
}

button, svg {
  cursor: pointer;
}



`;

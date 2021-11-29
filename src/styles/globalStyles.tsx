import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  font: 400 14px Architects Daughter, cursive;
  background-image: url(${background});
}

input,
button,
textarea {
  font: 400 18px Architects Daughter, cursive;
}

button, svg {
  cursor: pointer;
}



`;

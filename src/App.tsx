import React from "react";
import Header from "./components/Header";
import Status from "./components/Status";
import { Context } from "./context/Context";
import { GlobalStyle } from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyle />
      <Header />
      <Status />
    </Context>
  );
};

export default App;

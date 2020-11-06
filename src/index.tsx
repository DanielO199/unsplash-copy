import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import { stores } from "globals/stores";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
  }
`;

// For easier debugging
(window as any)._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import App from "./App";
import { stores } from "globals/stores";
import "./index.css";

// For easier debugging
(window as any)._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

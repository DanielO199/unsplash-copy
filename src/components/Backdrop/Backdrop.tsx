import React from "react";
import ReactDOM from "react-dom";

import { StyledBackDrop } from "./styles";

export const Backdrop = ({ toggleModal }) => {
  return ReactDOM.createPortal(
    <StyledBackDrop onClick={toggleModal} />,
    document.getElementById("backdrop-hook")
  );
};

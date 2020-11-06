import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { StyledIcon } from "./styles";
import { grayColor } from "assets/variables";

interface ISpinner {
  color?: string;
  size?: string;
  position?: string;
}

export const Spinner = ({ color = grayColor, size, position }: ISpinner) => (
  <div className="text-center" role="progressbar">
    <StyledIcon
      icon={faSpinner}
      position={position}
      size={size || "2x"}
      spin={true}
      color={color}
    />
  </div>
);

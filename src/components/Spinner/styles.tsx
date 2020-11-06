import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledIcon = styled(FontAwesomeIcon)`
  position: ${(props) => props.position};
  top: 20px;
  right: 20px;
`;

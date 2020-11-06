import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { grayColor } from "assets/variables";

export const StyledModal = styled.div`
  z-index: 100;
  position: fixed;
  top: 5vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 80vh;
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 80%;
  max-height: 80vh;
  margin: auto;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
`;

export const Field = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

export const Item = styled.div`
  display: flex;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  margin-right: 1rem;
  vertical-align: middle;
  height: 100%;
`;

export const UserName = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  border-radius: 5px;
  padding: 3px 7px;
  border: solid 1px ${grayColor};
  margin-right: 0.3rem;
  &:hover {
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div`
  border-radius: 5px;
  padding: 3px 7px;
  border: solid 1px ${grayColor};
  margin-right: 0.3rem;
  &:hover {
    cursor: pointer;
  }
`;

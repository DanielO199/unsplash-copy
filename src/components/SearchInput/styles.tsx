import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputWrapper = styled.div`
  position: relative;
  height: 50px;
  margin: 1.5rem 0;
`;

const StyledCloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 22px;
  right: 20px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 22px;
  left: 20px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 0.5rem 3rem;
  margin: 0.5em 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.background};
  border: none;
  border-radius: 5px;
  transition: 0.3s ease-in;
  &:focus,
  &:active,
  &:hover {
    text-decoration: none;
    outline: none;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease-in;
  }
`;

export { InputWrapper, StyledCloseIcon, Input, StyledSearchIcon };

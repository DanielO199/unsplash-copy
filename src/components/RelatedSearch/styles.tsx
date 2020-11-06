import styled from "styled-components";

export const Wrapper = styled.ul`
  display: ${({ isTouched }) => (isTouched ? "block" : "none")};
  color: black;
  position: absolute;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d1d1d1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 0.5rem;
  padding-left: 0;
  list-style: none;
  top: calc(100% + 4px);
  z-index: 1;
`;

export const Item = styled.li`
  padding: 0;
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const Text = styled.div`
  color: #111;
  padding: 8px 16px;
  cursor: pointer;
`;

export const Center = styled.div`
  text-align: center;
`;

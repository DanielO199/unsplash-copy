import styled from "styled-components";

import background from "assets/img/background.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  object-fit: contain;
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  max-height: 500px;
  height: 100%;
  color: whitesmoke;
`;

export const Header = styled.h1`
  font-size: 46px;
`;

export const Text = styled.div`
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #dcdcdc;
  margin-left: 0.3rem;
  border-bottom: solid 1px #dcdcdc;
  &:hover {
    color: whitesmoke;
    border-bottom: solid 1px whitesmoke;
  }
`;

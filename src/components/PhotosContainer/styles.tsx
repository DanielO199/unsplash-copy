import styled from "styled-components";

export const StyledPhotoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  display: inline-block;
  margin: 0 0 0.3em;
  width: 100%;
  transition: 0.3s ease-in;
  &:hover {
    opacity: 0.8;
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagItem = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  color: #454545;
  background-color: #d1d1d1;
  padding: 6px;
  margin: 6px;
  text-align: center;
  font-size: 0.8em;
  font-weight: 400;
`;

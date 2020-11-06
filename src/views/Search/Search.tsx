import React, { useState } from "react";
import { observer } from "mobx-react";

import { SearchInput, RelatedSearchList } from "components";
import {
  Container,
  Wrapper,
  Header,
  Text,
  SearchWrapper,
  StyledLink
} from "./styles";

import { photoStore } from "stores";

const Search = observer(() => {
  const [isTouched, setIsTouched] = useState(false);

  const onBlur = () => {
    setIsTouched(true);
  };

  return (
    <Container>
      <Wrapper>
        <Header>UnSplash</Header>
        <Text>
          The internet’s source of
          <StyledLink href="https://unsplash.com/license">
            freely-usable images
          </StyledLink>
          .
        </Text>
        <Text>Powered by creators everywhere.</Text>
        <SearchWrapper>
          <SearchInput store={photoStore} onBlur={onBlur} />
          <RelatedSearchList isTouched={isTouched} />
        </SearchWrapper>
        <Text>Trending: flowers, wallpapers, backgrounds, happy, love</Text>
      </Wrapper>
    </Container>
  );
});

export default Search;

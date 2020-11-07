import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { SearchInput, PhotosContainer, CarouselContainer } from "components";
import { Wrapper, Header, InputWrapper } from "./styles";

import { photoStore } from "stores";

const Result = observer(() => {
  useEffect(() => {
    photoStore.list();
  }, []);

  useEffect(() => {
    photoStore.topicList();
  }, []);

  return (
    <Wrapper>
      <InputWrapper>
        <SearchInput store={photoStore} background="#d1d1d1" list />
      </InputWrapper>

      <Header>{photoStore.searchTerm}</Header>
      <CarouselContainer />
      <PhotosContainer />
    </Wrapper>
  );
});
export default Result;

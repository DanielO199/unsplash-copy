import React, { useEffect } from "react";
import { observer } from "mobx-react";

import { SearchInput, PhotosContainer } from "components";
import { Wrapper, Header, InputWrapper } from "./styles";

import { photoStore } from "stores";

const Result = observer(() => {
  useEffect(() => {
    photoStore.list();
  }, []);

  return (
    <Wrapper>
      <InputWrapper>
        <SearchInput store={photoStore} background="#d1d1d1" />
      </InputWrapper>

      <Header>{photoStore.searchTerm}</Header>

      <PhotosContainer />
    </Wrapper>
  );
});

export default Result;

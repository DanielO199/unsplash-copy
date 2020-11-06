import React from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

import { Wrapper, Item, Text, Center } from "./styles";

import { photoStore } from "stores";

export const RelatedSearchList = observer(({ isTouched }) => {
  if (!photoStore.relatedTerms.length && isTouched)
    return <Center>No results</Center>;

  return (
    <Wrapper isTouched={!!photoStore.relatedTerms.length}>
      {photoStore.relatedTerms.map((item, index) => (
        <RelatedSearchItem key={index} item={item} />
      ))}
    </Wrapper>
  );
});

const RelatedSearchItem = observer(({ item: { title } }) => {
  const history = useHistory();

  const onSubmit = async () => {
    photoStore.getSearchTerm(title);
    history.push("/results");
  };

  return (
    <Item onClick={onSubmit}>
      <Text>{title}</Text>
    </Item>
  );
});

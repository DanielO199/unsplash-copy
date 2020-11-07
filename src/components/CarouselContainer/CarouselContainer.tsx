import React from "react";
import { observer } from "mobx-react";

import { StyledCarousel, StyledItem } from "./styles";

import { photoStore } from "stores";

export const CarouselContainer = observer(() => {
  if (!photoStore.topics.length) return <div>No topics found</div>;

  const onSearch = (value) => {
    photoStore.getSearchTerm(value);
    photoStore.list();
  };

  return (
    <StyledCarousel itemsToShow={9}>
      {photoStore.topics.map((item: { slug }, index) => (
        <StyledItem onClick={() => onSearch(item.slug)} key={index}>
          {item.slug}
        </StyledItem>
      ))}
    </StyledCarousel>
  );
});

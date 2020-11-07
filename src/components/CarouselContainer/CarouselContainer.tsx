import React from "react";
import { observer } from "mobx-react";

import { Spinner } from "components";
import { StyledCarousel, StyledItem } from "./styles";

import { photoStore } from "stores";

export const CarouselContainer = observer(() => {
  if (photoStore.loading) return <Spinner />;

  if (!photoStore.topics.length) return <div>no topics</div>;

  return (
    <StyledCarousel itemsToShow={9}>
      {photoStore.topics.map((item: { slug }, index) => (
        <StyledItem key={index}>{item.slug}</StyledItem>
      ))}
    </StyledCarousel>
  );
});

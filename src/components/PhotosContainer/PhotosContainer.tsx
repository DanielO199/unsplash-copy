import React, { useState } from "react";
import { observer } from "mobx-react";
import Masonry from "react-masonry-css";

import { Modal, Spinner } from "components";
import { StyledPhotoItem, StyledImage, Tags, TagItem } from "./styles";

import { photoStore } from "stores";

export const PhotosContainer = observer(() => {
  if (photoStore.loading) return <Spinner />;

  if (!photoStore.images.length) return <div>No images found</div>;

  return (
    <>
      <Masonry
        breakpointCols={{
          default: 3,
          1250: 2,
          600: 1
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photoStore.images.map((item, index) => (
          <PhotoItem key={index} item={item} />
        ))}
      </Masonry>
    </>
  );
});

const PhotoItem = observer(({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && <Modal toggleModal={toggleModal} item={item} />}
      <StyledPhotoItem onClick={toggleModal}>
        <StyledImage
          src={`${item.urls.regular}`}
          alt={`${item.alt_description}`}
        />
        <Tags>
          {item.tags.map((tag, index) => (
            <TagItem key={index}>{tag.title}</TagItem>
          ))}
        </Tags>
      </StyledPhotoItem>
    </>
  );
});

export default PhotosContainer;

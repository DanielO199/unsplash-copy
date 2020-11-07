import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faInfoCircle,
  faMapMarkerAlt,
  faPlus,
  faShare
} from "@fortawesome/free-solid-svg-icons";

import { Backdrop } from "components";

import {
  StyledModal,
  ImageContainer,
  StyledImage,
  Field,
  Item,
  StyledIcon,
  UserImage,
  UserName,
  IconWrapper
} from "./styles";
import { grayColor } from "assets/variables";

export const Modal = ({ item, toggleModal }) => {
  return (
    <>
      <Backdrop toggleModal={toggleModal} />
      <StyledModal>
        <Field>
          <Item>
            <div>
              <UserImage
                src={`${item.user.profile_image.small}`}
                alt={`${item.user.username}`}
              />
            </div>
            <div>
              <UserName>{item.user.username}</UserName>
              <div> @{item.user.instagram_username}</div>
            </div>
          </Item>
          <Item>
            <StyledIcon icon={faHeart} size="1x" color={grayColor} />
            <StyledIcon icon={faPlus} size="1x" color={grayColor} />
          </Item>
        </Field>
        <ImageContainer>
          <StyledImage src={item.urls.regular} />
        </ImageContainer>

        <Field>
          <Item>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="1x"
              color={grayColor}
              style={{ marginRight: "0.3rem" }}
            />
            {item.user.location}
          </Item>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon
                icon={faShare}
                size="1x"
                color={grayColor}
                style={{ marginRight: "0.3rem" }}
              />
              Share
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon
                icon={faInfoCircle}
                size="1x"
                color={grayColor}
              />
              Info
            </IconWrapper>
          </Item>
        </Field>
      </StyledModal>
    </>
  );
};

import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const StyledCarousel = styled(Carousel)`
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;

  .rec-slider-container {
    border-bottom: solid 1px #d1d1d1;
    align-items: center;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec-arrow-left {
    position: absolute;
    left: 5px;
    z-index: 2;
  }

  .rec-arrow-right {
    position: absolute;
    right: 10px;
    z-index: 2;

    @media (max-width: 1100px) {
      position: fixed;
      right: 0;
    }
  }

  .rec-carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-width: 1000px;
  }

  .rec.rec-arrow {
    border: none;
    background: white;
    box-shadow: none;
    color: black;
    border-radius: 0;
  }

  .rec-pagination {
    display: none;
  }
`;

export const StyledItem = styled.div`
  text-align: center;
  border: solid 1px #d1d1d1;
  border-radius: 5px;
  text-transform: capitalize;
  transition: border-color 0.1s ease-in-out;
  width: 100%;
  padding: 12px;
  opacity: 0.7;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

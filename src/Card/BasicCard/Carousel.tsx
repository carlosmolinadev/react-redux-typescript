import React, { ReactElement } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  Dot,
  DotGroup,
} from "pure-react-carousel";

import "./BasicCard.css";
import ImageChild from "./ImageChild";
interface Props {}

export default function Carousel({}: Props): ReactElement {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={30}
        totalSlides={3}
        className="relative"
      >
        <Slider>
          <Slide index={0}>
            <Image
              hasMasterSpinner
              src="https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg"
            />
          </Slide>
          <Slide index={1}>
            <Image
              hasMasterSpinner
              src="https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg"
            />
          </Slide>
          <Slide index={2}>
            <Image
              hasMasterSpinner
              src="https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg"
            />
          </Slide>
        </Slider>
        <ButtonBack className="button"> </ButtonBack>
        <ButtonNext className="button2"> </ButtonNext>
      </CarouselProvider>
    </>
  );
}

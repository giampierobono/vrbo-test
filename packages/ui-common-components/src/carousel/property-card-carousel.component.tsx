import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { ImageHolderJs } from "../holderjs-image";

export const PropertyCardCarousel = () => (
  <Carousel>
    <Carousel.Item>
      <ImageHolderJs
        src={
          "holder.js/100px248?auto=yes&text=First pic&bg=282c34&theme=social"
        }
        alt={"First pic"}
        cssClasses={"d-block w-100"}
      />
    </Carousel.Item>
    <Carousel.Item>
      <ImageHolderJs
        src={"holder.js/100px248?auto=yes&text=Second pic&bg=282c34&theme=sky"}
        alt={"Second pic"}
        cssClasses={"d-block w-100"}
      />
    </Carousel.Item>
    <Carousel.Item>
      <ImageHolderJs
        src={"holder.js/100px248?auto=yes&text=Third pic&bg=282c34&theme=vine"}
        alt={"Third pic"}
        cssClasses={"d-block w-100"}
      />
    </Carousel.Item>
  </Carousel>
);

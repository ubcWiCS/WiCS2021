import React from "react";
import "dotenv/config";

import Carousel from "react-bootstrap/Carousel";

export default function Gallery(props) {
  return (
    <>
      <Carousel slide={false} interval={null} variant="dark">
        {props.images.map((image, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="carousel-image"
                src={image.asset.url}
                alt="Not available"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

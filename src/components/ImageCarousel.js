import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { ReactComponent as PrevArrowIcon } from "../img/arrowPrev.svg";
import { ReactComponent as NextArrowIcon } from "../img/arrowNext.svg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source).auto("format").url();
}

export default function ImageCarousel({
  type = "aboutImages",
  height = "40%",
}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const query = `*[_type == "imageCarousel"][0]{ ${type} }`;
    sanityClient
      .fetch(query)
      .then((data) => setImages(data?.[type] || []))
      .catch(console.error);
  }, [type]);

  const PrevArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} flex items-center justify-center`}
      style={{ ...style }}
      onClick={onClick}
    >
      <PrevArrowIcon className="w-5 h-5" />
    </div>
  );

  const NextArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} flex items-center justify-center`}
      style={{ ...style }}
      onClick={onClick}
    >
      <NextArrowIcon className="w-5 h-5" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div key={idx}>
          <img
            src={urlFor(img)}
            alt={img.title || `Slide ${idx + 1}`}
            className="w-full rounded-lg"
            style={{ height: height, objectFit: "cover", width: "100%" }}
          />
        </div>
      ))}
    </Slider>
  );
}

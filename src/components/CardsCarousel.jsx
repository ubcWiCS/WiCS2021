import React, { useState } from "react";

import Card from "./Card";

const cardInfo = [
    {
        title: "Stripe event",
        description: "This is the event body"
    },
    {
        title: "Stripe event",
        description: "This is the event body"
    },
    {
        title: "Stripe event",
        description: "This is the event body"
    },
    {
        title: "Stripe event",
        description: "This is the event body"
    },

]

export default function CardsCarousel(props) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const [thirdIndex, setThirdIndex] = useState(2);
  const length = 10;

  const handlePrevious = () => {
    const newFirstIndex = firstIndex - 1;
    setFirstIndex(newFirstIndex < 0 ? length - 1 : newFirstIndex);
    const newSecondIndex = secondIndex - 1;
    setSecondIndex(newSecondIndex >= length ? 0 : newSecondIndex);
    const newThirdIndex = thirdIndex - 1;
    setThirdIndex(newThirdIndex >= length ? 0 : newThirdIndex);
  };

  const handleNext = () => {
    const newFirstIndex = firstIndex + 1;
    setFirstIndex(newFirstIndex >= length ? 0 : newFirstIndex);
    const newSecondIndex = secondIndex + 1;
    setSecondIndex(newSecondIndex >= length ? 0 : newSecondIndex);
    const newThirdIndex = thirdIndex + 1;
    setThirdIndex(newThirdIndex >= length ? 0 : newThirdIndex);
  };

  return (
    <div className="cards-carousel">
      <button onClick={handlePrevious}>Previous</button>
      <div className="cards-carousel">
        <p>{firstIndex}</p>
        <p>{secondIndex}</p>
        <p>{thirdIndex}</p>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

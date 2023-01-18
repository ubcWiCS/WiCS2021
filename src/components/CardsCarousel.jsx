import React, { useState } from "react";

import Card from "./Card";

const cardInfo = [
  {
    title: "Stripe event",
    description: "This is the event body",
  },
  {
    title: "Google event",
    description: "This is the event body",
  },
  {
    title: "Orbis event",
    description: "This is the event body",
  },
  {
    title: "WiCS event",
    description: "This is the event body",
  },
  {
    title: "Networking event",
    description: "This is the event body",
  },
  {
    title: "Technical event",
    description: "This is the event body",
  },
];

export default function CardsCarousel(props) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const [thirdIndex, setThirdIndex] = useState(2);
  const length = cardInfo.length;

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
        {cardInfo.slice(firstIndex, thirdIndex).map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

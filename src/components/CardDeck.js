import React, { useState, useEffect } from "react";

import fireImage from "../images/fire.png";
import waterImage from "../images/water.png";
import airImage from "../images/air.png";
import earthImage from "../images/earth.png";
import cardDeckImages from "../images/cards/index";

import "../index.css";

const CardDeck = () => {
  const [cards, setCards] = useState([
    { group: "fire", image: fireImage, clicked: false },
    { group: "water", image: waterImage, clicked: false },
    { group: "air", image: airImage, clicked: false },
    { group: "earth", image: earthImage, clicked: false },
  ]);

  const [selectedCard, setSelectedCard] = useState([]);

  const cardImages = [
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "H8",
    "H9",
    "H10",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "S9",
    "S10",
    "CA",
    "CJ",
    "CQ",
    "CK",
    "DA",
    "DJ",
    "DQ",
    "DK",
    "HA",
    "HJ",
    "HQ",
    "HK",
    "SA",
    "SJ",
    "SQ",
    "SK",
  ];

  const handleCardClick = (index) => {
    if (cards[index].clicked) return;

    const randomCardIndex = Math.floor(Math.random() * cardImages.length);
    const randomCard = cardImages[randomCardIndex];

    const updatedCards = [...cards];
    updatedCards[index] = {
      group: randomCard,
      image: cardDeckImages[randomCard],
      clicked: true,
    };
    setCards(updatedCards);
    setSelectedCard((prevSelected) => [...prevSelected, randomCard]);
  };

  useEffect(() => {
    if (selectedCard.length === cards.length) {
      setCards([]);
    }
  }, [selectedCard, cards.length]);

  return (
    <div>
      <div className="container">
        {cards.map((card, index) => (
          <div key={index} onClick={() => handleCardClick(index)}>
            <img src={card.image} alt={card.group} />
          </div>
        ))}
      </div>
      <div className="selected-cards">
        {selectedCard.map((card, index) => (
          <div
            className={`selected-card ${
              Math.random() < 0.5 ? "horizontal" : "vertical"
            }`}
            key={index}
          >
            <img src={cardDeckImages[card]} alt={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDeck;

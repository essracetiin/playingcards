import React, { useState, useEffect } from "react";

import fireImage from "../images/fire.png";
import waterImage from "../images/water.png";
import airImage from "../images/air.png";
import earthImage from "../images/earth.png";
import cardDeckImages from "../images/cards/index";

import "../index.css";
import ChatInterface from "./ChatInterface";
const cardsConfig = {
  C: "Sinek",
  H: "Kupa",
  S: "Maça",
  D: "Karo",
};

const CardDeck = () => {
  const [cards, setCards] = useState([
    { group: "Fire", image: fireImage, clicked: false },
    { group: "Water", image: waterImage, clicked: false },
    { group: "Air", image: airImage, clicked: false },
    { group: "Earth", image: earthImage, clicked: false },
  ]);

  const [selectedCards, setselectedCards] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

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

    const isHorizontal = Math.random() < 0.5;
    const selectedCards = {
      isHorizontal,
      image: randomCard,
      group: cards[index].group,
    };

    const updatedCards = [...cards];
    updatedCards[index] = {
      image: cardDeckImages[randomCard],
      clicked: true,
    };
    setCards(updatedCards);
    setselectedCards((prevSelected) => [...prevSelected, selectedCards]);
  };

  useEffect(() => {
    if (selectedCards.length === cards.length) {
      setCards([]);
      setChatMessages([]);
    }
  }, [selectedCards, cards.length]);

  const handleChatInput = (message) => {
    if (message.toLowerCase() === "benim kartlarımı açıkla") {
      const response = selectedCards.map((card) => {
        return `${cardsConfig[card.image[0]]} ${card.image} ${card.group} ${
          card.isHorizontal ? "Horizontal" : "Vertical"
        } `;
      });
      setChatMessages([...chatMessages, ...response]);
    } else {
      setChatMessages([...chatMessages, message]);
    }
  };

  return (
    <div className="container">
      <div className="select-card-wrapper">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <img src={card.image} alt={card.group} />
          </div>
        ))}
      </div>
      <div className="selected-cards">
        {selectedCards.map((card, index) => (
          <div
            className={`card ${card.isHorizontal ? "horizontal" : "vertical"}`}
            key={index}
          >
            <img src={cardDeckImages[card.image]} alt={card.image} />
          </div>
        ))}
      </div>
      {selectedCards.length === 4 && (
        <ChatInterface messages={chatMessages} onSend={handleChatInput} />
      )}
    </div>
  );
};

export default CardDeck;

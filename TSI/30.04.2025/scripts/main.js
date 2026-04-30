"use strict";

const container = document.getElementById("container");

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const suits = ["clubs", "diamonds", "hearts", "spades"];
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];

let score = 0;
let isWon = false;

const drawnCards = [];

const getSuit = () => {
  return suits[random(0, suits.length - 1)];
};

const getCard = () => {
  return cards[random(0, cards.length - 1)];
};

const getCardScore = (drawnCard) => {
  switch (drawnCard) {
    case "ace":
      return 11;
    case "king":
      return 10;
    case "queen":
      return 10;
    case "jack":
      return 10;
    default:
      return drawnCard;
  }
};

for (let i = 0; i < 10; i++) {
  const drawnCard = getCard();
  const drawnSuit = getSuit();

  if (drawnCards.includes(`${drawnCard}_of_${drawnSuit}`)) {
    i--;
    continue;
  } else {
    drawnCards.push(`${drawnCard}_of_${drawnSuit}`);
  }

  const img = document.createElement("img");
  img.src = `./images/${drawnCard}_of_${drawnSuit}.png`;
  img.alt = `${drawnCard}_of_${drawnCard}`;

  container.appendChild(img);

  if (i < 5) {
    score += getCardScore(drawnCard);
  } else {
    score -= getCardScore(drawnCard);
  }
}

const h3 = document.createElement("h3");
score > 0 ? (isWon = true) : (isWon = false);
isWon ? (h3.textContent = `You won!!!`) : (h3.textContent = `You lost!!!`);

container.appendChild(h3);

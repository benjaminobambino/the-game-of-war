// GLOBAL VARIABLES

const dealerDeck = [
  { twoHearts: 2 },
  { twoDiamonds: 2 },
  { twoSpades: 2 },
  { twoClubs: 2 },
  { threeHearts: 3 },
  { threeDiamonds: 3 },
  { threeSpades: 3 },
  { threeClubs: 3 },
  { fourHearts: 4 },
  { fourDiamonds: 4 },
  { fourSpades: 4 },
  { fourClubs: 4 },
  { fiveHearts: 5 },
  { fiveDiamonds: 5 },
  { fiveSpades: 5 },
  { fiveClubs: 5 },
  { sixHearts: 6 },
  { sixDiamonds: 6 },
  { sixSpades: 6 },
  { sixClubs: 6 },
  { sevenHearts: 7 },
  { sevenDiamonds: 7 },
  { sevenSpades: 7 },
  { sevenClubs: 7 },
  { eightHearts: 8 },
  { eightDiamonds: 8 },
  { eightSpades: 8 },
  { eightClubs: 8 },
  { nineHearts: 9 },
  { nineDiamonds: 9 },
  { nineSpades: 9 },
  { nineClubs: 9 },
  { tenHearts: 10 },
  { tenDiamonds: 10 },
  { tenSpades: 10 },
  { tenClubs: 10 },
  { jackHearts: 11 },
  { jackDiamonds: 11 },
  { jackSpades: 11 },
  { jackClubs: 11 },
  { queenHearts: 12 },
  { queenDiamonds: 12 },
  { queenSpades: 12 },
  { queenClubs: 12 },
  { kingHearts: 13 },
  { kingDiamonds: 13 },
  { kingSpades: 13 },
  { kingClubs: 13 },
  { aceHearts: 14 },
  { aceDiamonds: 14 },
  { aceSpades: 14 },
  { aceClubs: 14 }
];

const playerDeck = [];

const compDeck = [];

let currentPlayerCard = {};

let currentCompCard = {};

// GAME LOGIC FUNCTIONS

const shuffleAndDeal = () => {
  while (dealerDeck.length > 0) {
    const newPlayerCard = Math.floor(Math.random() * dealerDeck.length);
    playerDeck.push(dealerDeck[newPlayerCard]);
    dealerDeck.splice(newPlayerCard, 1);
    const newCompCard = Math.floor(Math.random() * dealerDeck.length);
    compDeck.push(dealerDeck[newCompCard]);
    dealerDeck.splice(newCompCard, 1);
  }
};

const playCard = () => {
  currentPlayerCard = playerDeck[0];
  document.querySelector('.player-play-pile').innerText = `${Object.keys(
    currentPlayerCard
  )}`;
  currentCompCard = compDeck[0];
  document.querySelector('.comp-play-pile').innerText = `${Object.keys(
    currentCompCard
  )}`;
};

// shuffleAndDeal();
// playCard();
// console.log(currentPlayerCard);
// console.log(currentCompCard);

// EVENT LISTENERS

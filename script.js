// GLOBAL VARIABLES

let dealerDeck = [
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

let playerDeck = [];

let computerDeck = [];

let currentPlayerCard = {};

let currentComputerCard = {};

const playerPlayPile = document.querySelector('.player-play-pile');

const computerPlayPile = document.querySelector('.computer-play-pile');

let playerCardCount = document.querySelector('#player-counter');

let computerCardCount = document.querySelector('#computer-counter');

const messageBoard = document.querySelector('.message-board');

const playNextCard = document.querySelector('.play-next-card');

const reDeal = document.querySelector('.re-deal');

// GAME LOGIC FUNCTIONS

const shuffleAndDeal = () => {
  dealerDeck.push(...playerDeck, ...computerDeck);
  playerDeck = [];
  computerDeck = [];
  while (dealerDeck.length > 0) {
    const newPlayerCard = Math.floor(Math.random() * dealerDeck.length);
    playerDeck.push(dealerDeck[newPlayerCard]);
    dealerDeck.splice(newPlayerCard, 1);
    playerCardCount.innerText = playerDeck.length;
    const newComputerCard = Math.floor(Math.random() * dealerDeck.length);
    computerDeck.push(dealerDeck[newComputerCard]);
    dealerDeck.splice(newComputerCard, 1);
    computerCardCount.innerText = computerDeck.length;
  }
};

const checkForWin = () => {
  if (playerDeck.length === 0) {
    messageBoard.innerText = `You are out of cards. You have lost the War.`;
    gameOver();
  } else if (computerDeck.length === 0) {
    messageBoard.innerText = 'You have won the war!';
    gameOver();
  }
};

const playCard = () => {
  messageBoard.innerText = '';
  currentPlayerCard = playerDeck[0];
  playerPlayPile.innerText = `${Object.keys(currentPlayerCard)}`;
  dealerDeck.push(currentPlayerCard);
  playerDeck.splice(currentPlayerCard, 1);
  currentComputerCard = computerDeck[0];
  computerPlayPile.innerText = `${Object.keys(currentComputerCard)}`;
  dealerDeck.push(currentComputerCard);
  computerDeck.splice(currentComputerCard, 1);
};

const compareCards = () => {
  if (
    parseInt(Object.values(currentPlayerCard)) >
    parseInt(Object.values(currentComputerCard))
  ) {
    console.log('player wins!');
    playerDeck.push(...dealerDeck);
    dealerDeck = [];
    keepScore();
  } else if (
    parseInt(Object.values(currentComputerCard)) >
    parseInt(Object.values(currentPlayerCard))
  ) {
    console.log('cumputer wins!');
    computerDeck.push(...dealerDeck);
    dealerDeck = [];
    keepScore();
  } else {
    tiebreakerWar();
  }
};

const tiebreakerWar = () => {
  console.log(`it's a tie`);
  messageBoard.innerText = `It's a tie! This means WAR! Play your next card and let's settle this ...`;
  console.log(currentPlayerCard);
  let unknownPlayerCard = playerDeck[0];
  console.log(unknownPlayerCard);
  playerPlayPile.innerText = `Facedown Player Card`;
  dealerDeck.push(unknownPlayerCard);
  playerDeck.splice(unknownPlayerCard, 1);
  let unknownComputerCard = computerDeck[0];
  console.log(unknownComputerCard);
  computerPlayPile.innerText = `Facedown Computer Card`;
  dealerDeck.push(unknownComputerCard);
  computerDeck.splice(unknownComputerCard, 1);
  console.log(dealerDeck);
};

const keepScore = () => {
  playerCardCount.innerText = playerDeck.length;
  computerCardCount.innerText = computerDeck.length;
};

const gameOver = () => {};

shuffleAndDeal();

// EVENT LISTENERS
playNextCard.addEventListener('click', () => {
  playCard();
  compareCards();
});

reDeal.addEventListener('click', shuffleAndDeal);

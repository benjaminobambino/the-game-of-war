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

const playerPlayPile = document.querySelector('#player-play-pile');

const computerPlayPile = document.querySelector('#computer-play-pile');

let playerCardCount = document.querySelector('#player-counter');

let computerCardCount = document.querySelector('#computer-counter');

const messageBoard = document.querySelector('.message-board');

const playNextCard = document.querySelector('.play-next-card');

const reDeal = document.querySelector('.re-deal');

const shuffleAndDeal = () => {
  messageBoard.innerText = '';
  currentPlayerCard = {};
  currentComputerCard = {};
  playerPlayPile.className = 'play-pile';
  computerPlayPile.className = 'play-pile';
  dealerDeck.push(...playerDeck, ...computerDeck);
  keepScore();
  playerDeck = [];
  computerDeck = [];
  while (dealerDeck.length > 0) {
    const newPlayerCard = Math.floor(Math.random() * dealerDeck.length);
    playerDeck.push(dealerDeck[newPlayerCard]);
    dealerDeck.splice(newPlayerCard, 1);
    const newComputerCard = Math.floor(Math.random() * dealerDeck.length);
    computerDeck.push(dealerDeck[newComputerCard]);
    dealerDeck.splice(newComputerCard, 1);
    keepScore();
  }
};

const checkForWin = () => {
  keepScore();
  if (playerDeck.length === 0) {
    messageBoard.innerText = `You are out of cards. You have lost the War.`;
    gameOver();
  } else if (computerDeck.length === 0) {
    messageBoard.innerText = 'You have won the war!';
    gameOver();
  }
};

const playCard = () => {
  playerPlayPile.className = `play-pile`;
  computerPlayPile.className = `play-pile`;
  messageBoard.innerText = '';
  setTimeout(() => {
    currentPlayerCard = playerDeck[0];
    playerPlayPile.className = `card ${Object.keys(currentPlayerCard)}`;
    dealerDeck.push(currentPlayerCard);
    playerDeck.splice(currentPlayerCard, 1);
    currentComputerCard = computerDeck[0];
    computerPlayPile.className = `card ${Object.keys(currentComputerCard)}`;
    dealerDeck.push(currentComputerCard);
    computerDeck.splice(currentComputerCard, 1);
    compareCards();
  }, 250);
};

const compareCards = () => {
  if (
    parseInt(Object.values(currentPlayerCard)) >
    parseInt(Object.values(currentComputerCard))
  ) {
    playerDeck.push(...dealerDeck);
    dealerDeck = [];
    keepScore();
  } else if (
    parseInt(Object.values(currentComputerCard)) >
    parseInt(Object.values(currentPlayerCard))
  ) {
    computerDeck.push(...dealerDeck);
    dealerDeck = [];
    keepScore();
  } else {
    startTiebreakerWar();
  }
  checkForWin();
};

const startTiebreakerWar = () => {
  playNextCard.removeEventListener('click', playCard);
  messageBoard.innerText = `It's a tie! This means WAR!`;
  checkForWin();
  if (playerDeck.length === 1 || computerDeck.length === 1) {
    messageBoard.innerText = `Not enough cards to cover the tie. Play your next card to see if everyone makes it out alive ...`;
  } else {
    setTimeout(() => {
      messageBoard.innerText = `Play your next card and let's settle this ...`;
      let unknownPlayerCard = playerDeck[0];
      playerPlayPile.className = `card back`;
      dealerDeck.push(unknownPlayerCard);
      playerDeck.splice(unknownPlayerCard, 1);
      let unknownComputerCard = computerDeck[0];
      computerPlayPile.className = `card back`;
      dealerDeck.push(unknownComputerCard);
      computerDeck.splice(unknownComputerCard, 1);
      startGame();
    }, 2500);
  }
};

const keepScore = () => {
  playerCardCount.innerText = `Your cards: ${playerDeck.length}`;
  computerCardCount.innerText = `My cards: ${computerDeck.length}`;
};

const startGame = () => {
  playNextCard.addEventListener('click', playCard);
};

reDeal.addEventListener('click', () => {
  startGame();
  shuffleAndDeal();
});

const gameOver = () => {
  playNextCard.removeEventListener('click', playCard);
};

startGame();

shuffleAndDeal();

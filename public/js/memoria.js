const cardsData = [
    { country: "Brasil", img: "https://flagcdn.com/w320/br.png" },
    { country: "França", img: "https://flagcdn.com/w320/fr.png" },
    { country: "Japão", img: "https://flagcdn.com/w320/jp.png" },
    { country: "Itália", img: "https://flagcdn.com/w320/it.png" },
    { country: "Canadá", img: "https://flagcdn.com/w320/ca.png" },
    { country: "Alemanha", img: "https://flagcdn.com/w320/de.png" }
  ];

  let cards = [];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let matches = 0;

  function shuffle(array) {
    for(let i = array.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function createCard(cardData, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.country = cardData.country;
    card.dataset.index = index;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.style.backgroundImage = `url('${cardData.img}')`;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener('click', flipCard);

    return card;
  }

  function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flipped');

    if(!firstCard){
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.country === secondCard.dataset.country;

    if(isMatch){
      matches++;
      resetTurn();
      if(matches === cardsData.length){
        document.getElementById('message').textContent = "🎉 Parabéns! Você encontrou todos os pares!";
      }
    } else {
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetTurn();
      }, 1000);
    }
  }

  function resetTurn() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
  }

  function startGame() {
    matches = 0;
    document.getElementById('message').textContent = "";
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    cards = [...cardsData, ...cardsData];
    shuffle(cards);

    cards.forEach((cardData, index) => {
      const cardElement = createCard(cardData, index);
      gameBoard.appendChild(cardElement);
    });
  }
  

  startGame();
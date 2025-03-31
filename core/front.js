
  const scoreDiv = document.getElementById("score");
  const deckDiv = document.getElementById("deck");
  
  // const dealButton = document.getElementById("dealButton");
  const playerCardsDiv = document.getElementById("playerCards");
  const attackButton = document.getElementById("attackButton");
  const discardButton = document.getElementById("discardButton");

  const discardPileDiv = document.getElementById("discardPile");
  
  const deckCountSpan = document.getElementById("deckCount");
  const discardCountSpan = document.getElementById("discardCount");

  const gameMessagesDiv = document.getElementById("game-messages");
  const buttonsDiv = document.getElementById("buttons"); // Ajout de cette ligne!

  const enemyImageBoard = document.getElementById("enemy-board");
  const enemyNameElement = document.getElementById("enemy-name");
  const enemyHPElement = document.getElementById("enemy-hp");
  const enemyDescriptionElement = document.getElementById("enemy-description");
  const enemyStyleElement = document.getElementById("enemy-style");
  const enemyAuraElement = document.getElementById("enemy-aura");
  const enemyFaiblesseElement = document.getElementById("enemy-faiblesse");
  const enemyRoundElement = document.getElementById("enemy-round");


  
  const cursor = document.getElementById("cursor");

  const enemyTipDescription = document.getElementById("enemy-description");
  const enemyTipStyle = document.getElementById("enemy-style");
  const enemyTipAura = document.getElementById("enemy-aura");
  const enemyTipFaiblesse = document.getElementById("enemy-faiblesse");

  const enemyIcoDescription = document.getElementById("ico-description");
  const enemyIcoStyle = document.getElementById("ico-style");
  const enemyIcoAura = document.getElementById("ico-aura");
  const enemyIcoFaiblesse = document.getElementById("ico-faiblesse");

  enemyIcoFaiblesse.addEventListener('mouseover',(self)=>{enemyTipFaiblesse.classList.remove('hide')})
  enemyIcoFaiblesse.addEventListener('mouseout',(self)=>{enemyTipFaiblesse.classList.add('hide')})
  enemyIcoAura.addEventListener('mouseover',(self)=>{enemyTipAura.classList.remove('hide')})
  enemyIcoAura.addEventListener('mouseout',(self)=>{enemyTipAura.classList.add('hide')})

  enemyIcoStyle.addEventListener('mouseover',(self)=>{enemyTipStyle.classList.remove('hide')})
  enemyIcoStyle.addEventListener('mouseout',(self)=>{enemyTipStyle.classList.add('hide')})
  enemyIcoDescription.addEventListener('mouseover',(self)=>{enemyTipDescription.classList.remove('hide')})
  enemyIcoDescription.addEventListener('mouseout',(self)=>{enemyTipDescription.classList.add('hide')})

  function addMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    gameMessagesDiv.prepend(messageElement);
  }
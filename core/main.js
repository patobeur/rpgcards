  function nextStep() {
    selectedCards = [];
    player.currentStep++;
    if (player.currentStep >= listeDesEvenements.length) {
      gameOver(true);
      return;
    }

    const step = listeDesEvenements[player.currentStep - 1];

    if (step.fight) {
      startFight(step.fight);
    } else if (step.rest) {
      startRest(step.rest);
    }
  }

  function startFight(fight) {
    enemyz.set(fight)
    enemyz.displayInfo()


    cursor.classList.remove('hide')

    enemyz.updateEnemyHP();

    cartes.dealCards();
    // buttonsDiv.style.display = "block";
    addMessage(`${enemyz.currentEnemy.name}`);
  }

  function startRest(rest) {

    enemyNameElement.textContent = rest.name;
    enemyDescriptionElement.textContent = rest.description;
    enemyStyleElement.textContent = "";
    enemyAuraElement.textContent = "";
    enemyFaiblesseElement.textContent = "";
    enemyRoundElement.textContent = "";


    restImage = rest.picture;
    // cursor.classList.add('hide')
    buttonsDiv.style.display = "none";

    addMessage(rest.name);
    if (rest.hp && rest.hp[0] && rest.hp[1]) {
      let max = rest.hp[1]
      let min = rest.hp[0]
      const hpGain = Math.floor(Math.random() * (max - min + 1)) + min;
      player.hp += hpGain;

      // hook
      enemyHPElement.textContent = "+" + hpGain + "hp";
      addMessage('Vous gagnez ' + hpGain + ' hp en plus !');
    }
    player.refreshScoreDiv();

    enemyImageBoard.style.backgroundImage = "url('" + imageFolder + restImage + "')";

    const nextButton = document.createElement("button");
    nextButton.textContent = "Suivant";
    nextButton.addEventListener("click", () => {
      nextButton.remove();
      nextStep();
    });
    playerCardsDiv.appendChild(nextButton);
  }

  function gameOver(win = false) {
    if (win) {
      addMessage(`Félicitations! Vous avez terminé l'aventure avec ${player.turns} coups et un score de ${player.score}!`);
    } else {
      addMessage("Game Over!");
    }

    const replayButton = document.createElement("button");
    replayButton.textContent = "Rejouer";
    replayButton.addEventListener("click", () => {
      resetGame();
      nextStep();
    });
    playerCardsDiv.appendChild(replayButton);
    buttonsDiv.style.display = "none";
  }


  function resetGame() {

    cartes.reset();
    player.reset();
    enemyz.reset();

    player.refreshScoreDiv();
    enemyz.updateEnemyHP();
    player.refreshScoreDiv();
    gameMessagesDiv.innerHTML = "";
  }


  function attack() {
    if (cartes.selectedCards.length === 0) return;
    const check = cartes.checkCombinations(cartes.selectedCards);
    enemyz.currentEnemy.hp -= check.points;
    addMessage(`Vous attaquez l'ennemi et lui infligez ${check.points} dégâts!`);
    player.turns += 1;


    cartes.discardCards();
    if (enemyz.currentEnemy.hp <= 0) {
      addMessage(`Vous avez vaincu ${enemyz.currentEnemy.enemyName}!`);
      nextStep();
    } else {
      enemyTurn();
    }
  }

  function enemyTurn() {
    if (enemyz.currentEnemy.hp <= 0) return;
    if (enemyz.currentEnemy.round == 3) {
      const damage = Math.floor(Math.random() * (enemyz.currentEnemy.dps[1] - enemyz.currentEnemy.dps[0] + 1)) + enemyz.currentEnemy.dps[0];
      player.hp -= damage;
      addMessage(`L'ennemi vous attaque et vous inflige ${damage} dégâts!`);

      if (player.hp <= 0) {
        addMessage("Vous avez été vaincu!");
        gameOver();
      } else {
        enemyz.updateEnemyHP();
        player.refreshScoreDiv();
      }
      player.round += 1;
    }

  }

  function start() {
    // Initialisation du jeu
    // resetGame();
    nextStep();
    // dealButton.addEventListener("click", dealCards);
    discardButton.addEventListener("click", cartes.discardCards());
    attackButton.addEventListener("click", attack);
  }

  start();
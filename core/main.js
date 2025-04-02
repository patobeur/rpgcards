  function nextStep() {
    selectedCards = [];
    player.values.currentStep++;
    if (player.values.currentStep >= aventure.listeDesEvenements.length) {
      gameOver(true);
      return;
    }

    const step = aventure.listeDesEvenements[player.values.currentStep - 1];

    if (step.fight) {
      startFight(step.fight);
    } else if (step.rest) {
      startRest(step.rest);
    } else if (step.encounter) {
      startEncounter(step.encounter);
    }
  }

  function startFight(step) {
    enemys.set(step)
    front.displayStepInfo(step)

    enemys.updateEnemyHP();
    front.setStepBackgroundImage(step)

    cartes.dealCards();
    addMessage(`Vous affrontez: ${enemys.currentEnemy.name}`);
  }

  function startRest(step) {
    front.displayStepInfo(step)

    // cursor.classList.add('hide')
    buttonsDiv.style.display = "none";

    addMessage(step.name);
    if (step.hp && step.hp[0] && step.hp[1]) {
      let max = step.hp[1]
      let min = step.hp[0]
      const hpGain = Math.floor(Math.random() * (max - min + 1)) + min;
      player.values.hp += hpGain;

      // hook
      // enemyHPElement.textContent = "+" + hpGain + "hp";
      addMessage('Vous gagnez ' + hpGain + ' hp en plus !');
    }
    player.refreshPlayerDiv();

    front.setStepBackgroundImage(step)
    
    front.stepBoardDiv.appendChild(front.nextButton);
  }
  function startEncounter(step) {
    front.displayStepInfo(step)
    front.setStepBackgroundImage(step)
    
    addMessage('Vous rencontrez : '+step.name+'.');

    front.stepBoardDiv.appendChild(front.nextButton);

  }
  function gameOver(win = false) {
    if (win) {
      addMessage(`Félicitations! Vous avez terminé l'aventure avec ${player.values.turns} coups et un score de ${player.values.score}!`);
    } else {
      addMessage("Game Over!");
    }

    const replayButton = document.createElement("button");
    replayButton.textContent = "Rejouer";
    replayButton.addEventListener("click", () => {
      resetGame();
      nextStep();
    });
    front.playerCardsDiv.appendChild(replayButton);
    buttonsDiv.style.display = "none";
  }
  function resetGame() {

    cartes.reset();
    player.reset();
    enemys.reset();

    // player.refreshScoreDiv();
    enemys.updateEnemyHP();
    player.refreshScoreDiv();
    gameMessagesDiv.innerHTML = "";
  }
  function attack() {
    if (cartes.selectedCards.length === 0) return;
    const check = cartes.checkCombinations(cartes.selectedCards);
    enemys.currentEnemy.hp -= check.points;
    addMessage(`Vous attaquez l'ennemi et lui infligez ${check.points} dégâts!`);
    player.values.turns += 1;


    cartes.discardCards();
    if (enemys.currentEnemy.hp <= 0) {
      addMessage(`Vous avez vaincu ${enemys.currentEnemy.enemyName}!`);
      nextStep();
    } else {
      enemyTurn();
    }
  }
  function enemyTurn() {
    if (enemys.currentEnemy.hp <= 0) return;
    if (enemys.currentEnemy.round == 3) {
      const damage = Math.floor(Math.random() * (enemys.currentEnemy.dps[1] - enemys.currentEnemy.dps[0] + 1)) + enemys.currentEnemy.dps[0];
      player.values.hp -= damage;
      addMessage(`L'ennemi vous attaque et vous inflige ${damage} dégâts!`);

      if (player.values.hp <= 0) {
        addMessage("Vous avez été vaincu!");
        gameOver();
      } else {
        enemys.updateEnemyHP();
        player.refreshScoreDiv();
      }
      player.values.round += 1;
    }

  }
  function start() {
    // Initialisation du jeu
    player.reset();
    front.init()
    
    front.nextButton.addEventListener("click", () => {
      front.nextButton.remove();
      nextStep();
    });
    nextStep();

    // dealButton.addEventListener("click", dealCards);
    discardButton.addEventListener("click", function(){cartes.discardCards()});
    attackButton.addEventListener("click", attack);
  }

  start();
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
    } else if (step.encounter) {
      startEncounter(step.encounter);
    }
  }

  function startFight(fight) {
    enemys.set(fight)
    enemys.displayInfo()


    cursor.classList.remove('hide')
    enemyIcoStyle.classList.remove('hide')
    enemyIcoAura.classList.remove('hide')
    enemyIcoFaiblesse.classList.remove('hide')

    enemys.updateEnemyHP();

    cartes.dealCards();
    // buttonsDiv.style.display = "block";
    addMessage(`${enemys.currentEnemy.name}`);
  }

  function displayStepInfo(step) {

    enemyNameElement.textContent = step.name;
    enemyDescriptionElement.textContent = step.description;
    if (step.style) {
      enemyStyleElement.textContent = step.style;
      enemyIcoStyle.classList.remove('hide')
    }
    else {
      enemyStyleElement.textContent = '';
      enemyIcoStyle.classList.add('hide')
    }
    if (step.aura) {
      enemyAuraElement.textContent = step.aura;
      enemyIcoAura.classList.remove('hide')
    }
    else {
      enemyAuraElement.textContent = ''
      enemyIcoAura.classList.add('hide')
    }

    if (step.faiblesse) {
      enemyFaiblesseElement.textContent = step.faiblesse
      enemyIcoFaiblesse.classList.remove('hide')
    }
    else {
      enemyFaiblesseElement.textContent = ''
      enemyIcoFaiblesse.classList.add('hide')
    }
    if (step.round) {
      enemyRoundElement.classList.remove('hide');
    }
    else {
      enemyRoundElement.textContent = "";
      enemyRoundElement.classList.add('hide');
    }

  }

  function startRest(step) {

    enemyNameElement.textContent = step.name;
    enemyDescriptionElement.textContent = step.description;
    displayStepInfo(step)


    // cursor.classList.add('hide')
    buttonsDiv.style.display = "none";

    addMessage(step.name);
    if (step.hp && step.hp[0] && step.hp[1]) {
      let max = step.hp[1]
      let min = step.hp[0]
      const hpGain = Math.floor(Math.random() * (max - min + 1)) + min;
      player.hp += hpGain;

      // hook
      enemyHPElement.textContent = "+" + hpGain + "hp";
      addMessage('Vous gagnez ' + hpGain + ' hp en plus !');
    }
    player.refreshScoreDiv();

    enemyImageBoard.style.backgroundImage = "url('" + imageFolder + step.picture + "')";

    const nextButton = document.createElement("button");
    nextButton.textContent = "Suivant";
    nextButton.addEventListener("click", () => {
      nextButton.remove();
      nextStep();
    });
    playerCardsDiv.appendChild(nextButton);
  }


  function startEncounter(step) {

    displayStepInfo(step)
    // {encounter:{
    //   name: 'Arkan, le Marchand Errant',
    //   picture: 'arkanlemarchand.webp',
    //   description: "Ancien voleur devenu marchand, Arkan s’est perdu dans le labyrinthe... et y a vu une opportunité. Il vend de tout, et surtout ce que vous n’avez pas demandé.",
    //   dialogue: [
    //     "Oh ! Des visages pas encore décomposés. Intéressant.",
    //     "Vous avez l’air fatigués... ça tombe bien, j’ai de quoi tenir debout !",
    //     "J’échange contre or, potions ou un bon fromage... surtout le fromage."
    //   ],
    //   objets: [0, 1, 2],
    //   ambiance: "Chaleureux & louche à la fois.",
    //   effet: "Permet d’acheter 1 objet aléatoire pour 3 pièces d’or."
    // }},

    // cursor.classList.add('hide')
    buttonsDiv.style.display = "none";

    addMessage(step.name);
    if (step.hp && step.hp[0] && step.hp[1]) {
      let max = step.hp[1]
      let min = step.hp[0]
      const hpGain = Math.floor(Math.random() * (max - min + 1)) + min;
      player.hp += hpGain;

      // hook
      enemyHPElement.textContent = "+" + hpGain + "hp";
      addMessage('Vous gagnez ' + hpGain + ' hp en plus !');
    }
    player.refreshScoreDiv();

    enemyImageBoard.style.backgroundImage = "url('" + imageFolder + step.picture + "')";

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
    enemys.reset();

    player.refreshScoreDiv();
    enemys.updateEnemyHP();
    player.refreshScoreDiv();
    gameMessagesDiv.innerHTML = "";
  }


  function attack() {
    if (cartes.selectedCards.length === 0) return;
    const check = cartes.checkCombinations(cartes.selectedCards);
    enemys.currentEnemy.hp -= check.points;
    addMessage(`Vous attaquez l'ennemi et lui infligez ${check.points} dégâts!`);
    player.turns += 1;


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
      player.hp -= damage;
      addMessage(`L'ennemi vous attaque et vous inflige ${damage} dégâts!`);

      if (player.hp <= 0) {
        addMessage("Vous avez été vaincu!");
        gameOver();
      } else {
        enemys.updateEnemyHP();
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
    discardButton.addEventListener("click", function(){cartes.discardCards()});
    attackButton.addEventListener("click", attack);
  }

  start();
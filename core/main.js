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

  function startRest(rest) {

    enemyNameElement.textContent = rest.name;
    enemyDescriptionElement.textContent = rest.description;
    if (rest.style) {
      enemyStyleElement.textContent = rest.style
    }
    else {
      enemyStyleElement.textContent = ''
      enemyIcoStyle.classList.add('hide')
    }
    if (rest.aura) {
      enemyAuraElement.textContent = rest.aura
    }
    else {
      enemyAuraElement.textContent = ''
      enemyIcoStyle.classList.add('hide')
    }
    enemyAuraElement.textContent = "";
    enemyFaiblesseElement.textContent = "";
    enemyRoundElement.textContent = "";

    enemyIcoAura.classList.add('hide')
    enemyIcoFaiblesse.classList.add('hide')

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


  function startEncounter(encounter) {

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
    enemyNameElement.textContent = encounter.name;
    enemyDescriptionElement.textContent = encounter.description;

    enemyStyleElement.textContent = "";
    enemyAuraElement.textContent = "";
    enemyFaiblesseElement.textContent = "";
    enemyRoundElement.textContent = "";

    enemyIcoStyle.classList.add('hide')
    enemyIcoAura.classList.add('hide')
    enemyIcoFaiblesse.classList.add('hide')

    encounterImage = encounter.picture;
    // cursor.classList.add('hide')
    buttonsDiv.style.display = "none";

    addMessage(encounter.name);
    if (encounter.hp && encounter.hp[0] && encounter.hp[1]) {
      let max = encounter.hp[1]
      let min = encounter.hp[0]
      const hpGain = Math.floor(Math.random() * (max - min + 1)) + min;
      player.hp += hpGain;

      // hook
      enemyHPElement.textContent = "+" + hpGain + "hp";
      addMessage('Vous gagnez ' + hpGain + ' hp en plus !');
    }
    player.refreshScoreDiv();

    enemyImageBoard.style.backgroundImage = "url('" + imageFolder + encounterImage + "')";

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
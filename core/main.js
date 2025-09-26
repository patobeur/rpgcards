"use strict";
const game = {
  start:function() {
    player.reset();
    enemys.reset();
    front.init()
    this.checkStep();
    this.addListener()
  },
  addListener:function() {
    // listener bouton: suite, defausser et jouer
    front.nextStepButton.addEventListener("click",()=>{
      front.nextStepButton.style.display = 'none';
      this.nextStep();
    });
    front.discardButton.addEventListener("click",()=>{cartes.discardCards()});
    front.attackButton.addEventListener("click",()=>{this.playerAttack()});
  },

  nextStep:function() {
    player.nextStep()

    if (player.stepNum >= aventure.listeDesEvenements.length) {
      this.gameOver(true);
      return;
    }
    this.checkStep();
  },
  checkStep:function() {
    console.clear()
    console.log('stepNum:',player.stepNum)
    console.log('eventType:',player.eventType)
    console.table(player.event)

    if(player.eventType=='fight'){this.startFight();}
    if(player.eventType=='rest'){this.startRest();}
    if(player.eventType=='encounter'){this.startEncounter(player.step);}
    if(player.eventType=='win'){this.gameOver(true);}
  },

  startRest:function () {
    console.log('--------startRest---------')
    front.displayStepInfo()
    front.setStepBackgroundImage()

    front.deckActions.style.display = "none";

    addMessage(player.event.name);

    if(player.event.bonus){
      let message = player.setRestBonus()
      addMessage(message ?? 'vide');
    }

    front.displayNextStepButton()
    player.refreshPlayerStats();
  },
  startFight:function() {
    enemys.set(player.event);
    addMessage(player.event.accroche ?? `Vous affrontez ${enemys.current.prefixed}`);

    front.displayStepInfo()
    front.setStepBackgroundImage()

    player.refreshPlayerStats();
    cartes.dealCards();
  },

  enemyTurn:function() {
    enemys.attack();

    if (player.values.hp <= 0) {
      addMessage("Vous avez été vaincu ! ");
      gameOver();
    } else {
      front.refreshEnemyStats();
      player.refreshPlayerStats();
    }
  },
  playerAttack: function(){
    if (cartes.selectedCards.length === 0) return;
    player.values.plis += 1;

    const check = cartes.checkCombinations(cartes.selectedCards);
    console.log('--------playerAttack--------')
    enemys.takeDamage(check.points);
    front.refreshEnemyStats();

    addMessage(`Vous attaquez l'ennemi et lui infligez ${check.points} dégâts avec ${check.hand} !`);

    cartes.discardCards();
    if (enemys.current && enemys.current.stats.hp.cur <= 0) {
      addMessage(`Vous avez vaincu ${enemys.current.prefixed}!`);
      // rewards
      if(player.event.reward){
        let message = player.setRewardBonus(player.event.reward)
        addMessage(message ?? 'vide');
      }
      cartes.hideDeck()
      front.displayNextStepButton()


    } else {
      this.enemyTurn();
    }
  },
  startEncounter:function() {
    front.displayStepInfo()
    front.setStepBackgroundImage()

    addMessage('Vous rencontrez : '+player.event.name+'.');


      front.displayMarket()


    // front.stepBoardDiv.appendChild(front.nextButton);
    front.displayNextStepButton()
    player.refreshPlayerStats();

  }
}

  function gameOver(win = false) {
    if (win) {
      addMessage(`Félicitations! Vous avez terminé l'aventure avec ${player.values.plis} coups et un score de ${player.values.score}!`);
    } else {
      addMessage("Game Over!");
    }
    const replayButton = document.createElement("button");
    replayButton.textContent = "Rejouer";
    replayButton.addEventListener("click", () => {
      resetGame();
    });
    front.playerCardsDiv.innerHTML = '';
    front.playerCardsDiv.appendChild(replayButton);
    front.deckActions.style.display = "none";
  }
  function resetGame() {
    game.start();
  }
  game.start();
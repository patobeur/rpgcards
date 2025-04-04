"use strict";
const game = {
  start:function() {
    player.reset();
    front.init()
    this.checkStep();
    this.addListener()
  },
  addListener:function() {
    // listener bouton: suite, defausser et jouer 
    front.nextStepButton.addEventListener("click",()=>{front.nextStepButton.remove();this.nextStep();});
    front.discardButton.addEventListener("click",()=>{cartes.discardCards()});
    front.attackButton.addEventListener("click",()=>{this.playerAttack()});
  },
  
  nextStep:function() {
    player.nextStep()
  
    if (player.values.stepNum >= aventure.listeDesEvenements.length-1) {
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
    player.initEventFight()
    addMessage(player.event.accroche ?? `Vous affrontez ${player.event.prefixed}`);

    front.displayStepInfo()
    front.setStepBackgroundImage()
    
    player.refreshPlayerStats();
    cartes.dealCards();
  },

  enemyTurn:function() {
    if (player.event.stats.hp.cur <= 0) return;



    console.log('round:',player.event.stats.round)
    console.log('cycle:',player.event.attack.cycle[player.event.stats.round])

    if (player.event.attack.cycle[player.event.stats.round] == 1) {
      let min = player.event.dps[0]
      let max = player.event.dps[1]
      const damage = Math.floor(Math.random() * (max - min + 1)) + min;
      player.values.hp -= damage;
      addMessage(`L'ennemi vous attaque et vous inflige ${damage} dégâts!`);

    }
    
    player.event.stats.round += 1
    if(player.event.stats.round >= player.event.attack.cycle.length){
      player.event.stats.round = 0
    }
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
    player.setEnemyHpLoss(check)

    addMessage(`Vous attaquez l'ennemi et lui infligez ${check.points} dégâts!`);

    cartes.discardCards();
    if (player.event.stats && player.event.stats.hp <= 0) {
      addMessage(`Vous avez vaincu ${player.event.prefixed}!`);
      // rewards
      // todo

      nextStep();
    } else {
      this.enemyTurn();
    }
  },

}



  function startEncounter(step) {
    let action = Object.keys(step)[0]
    let event = step[action]
    front.displayStepInfo(event)
    front.setStepBackgroundImage(event)
    
    addMessage('Vous rencontrez : '+event.name+'.');

    front.stepBoardDiv.appendChild(front.nextButton);

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
  game.start();
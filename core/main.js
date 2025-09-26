"use strict";
const events = {
  fight,
  rest,
  encounter
}

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
    front.nextStepButton.addEventListener("click",()=>{front.nextStepButton.remove();this.nextStep();});
    front.discardButton.addEventListener("click",()=>{cartes.discardCards()});
    front.attackButton.addEventListener("click",()=>{events.fight.playerAttack()});
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

    if(events[player.eventType]){
      events[player.eventType].start()
    }
    else if(player.eventType=='win'){this.gameOver(true);}
  },
  gameOver:function(win = false) {
    if (win) {
      addMessage(`Félicitations! Vous avez terminé l'aventure avec ${player.values.plis} coups et un score de ${player.values.score}!`);
    } else {
      addMessage("Game Over!");
    }
    const replayButton = document.createElement("button");
    replayButton.textContent = "Rejouer";
    replayButton.addEventListener("click", () => {
      this.resetGame();
    });
    front.playerCardsDiv.innerHTML = '';
    front.playerCardsDiv.appendChild(replayButton);
    front.deckActions.style.display = "none";
  },
  resetGame:function() {
    this.start();
  }
}

game.start();
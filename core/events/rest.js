"use strict";
const rest = {
  start:function () {
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
  }
}
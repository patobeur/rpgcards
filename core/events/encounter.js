"use strict";
const encounter = {
  start:function() {
    front.displayStepInfo()
    front.setStepBackgroundImage()

    addMessage('Vous rencontrez : '+player.event.name+'.');

    front.displayMarket()

    // front.stepBoardDiv.appendChild(front.nextButton);
    front.displayNextStepButton()
    player.refreshPlayerStats();
  }
}
"use strict";

const fight = {
  start: function() {
    enemys.set(player.event);
    addMessage(player.event.accroche ?? `Vous affrontez ${enemys.current.prefixed}`);

    front.displayStepInfo();
    front.setStepBackgroundImage();

    player.refreshPlayerStats();
    cartes.dealCards();
  },

  playerAttack: function() {
    if (cartes.selectedCards.length === 0) return;
    player.values.plis += 1;

    const check = cartes.checkCombinations(cartes.selectedCards);
    console.log('--------playerAttack--------');
    enemys.takeDamage(check.points);
    front.refreshEnemyStats();

    addMessage(`Vous attaquez l'ennemi et lui infligez ${check.points} dégâts avec ${check.hand} !`);

    cartes.discardCards();
    if (enemys.current && enemys.current.stats.hp.cur <= 0) {
      addMessage(`Vous avez vaincu ${enemys.current.prefixed}!`);
      // rewards
      if (player.event.reward) {
        let message = player.setRewardBonus(player.event.reward);
        addMessage(message ?? 'vide');
      }
      cartes.hideDeck();
      front.displayNextStepButton();
    } else {
      this.enemyTurn();
    }
  },

  enemyTurn: function() {
    enemys.attack();

    if (player.values.hp <= 0) {
      addMessage("Vous avez été vaincu ! ");
      gameOver();
    } else {
      front.refreshEnemyStats();
      player.refreshPlayerStats();
    }
  }
};
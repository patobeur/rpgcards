"use strict";
const enemys = {
  current: null,

  reset: function() {
    this.current = null;
    console.log('reset enemys');
  },

  set: function(fightData) {
    this.current = fightData;
    this.current.stats.round = 0;
    this.current.prefixed = (this.current.prefixName ?? '') + this.current.name;
    console.log('--------set Enemy--------');
  },

  takeDamage: function(points) {
    if (this.current) {
      this.current.stats.hp.cur -= points;
    }
  },

  attack: function() {
    if (this.current.stats.hp.cur <= 0) return;

    if (this.current.attack.cycle[this.current.stats.round] == 1) {
      let min = this.current.attack.dps[0];
      let max = this.current.attack.dps[1];
      const damage = Math.floor(Math.random() * (max - min + 1)) + min;
      player.values.hp -= damage;
      addMessage(`L'ennemi vous attaque et vous inflige ${damage} dégâts!`);
    }

    this.current.stats.round++;
    if (this.current.stats.round >= this.current.attack.cycle.length) {
      this.current.stats.round = 0;
    }
  }
};
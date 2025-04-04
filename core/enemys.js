"use strict";
const enemys = {
    currentEnemy:{},
    currentRound:0,
    reset:function(){
      this.currentEnemy={};
      this.currentRound=0;
      console.log('reset opponent')
    },
    set:function(){
      this.currentEnemy = player.event
      this.currentRound = 0
      player.resetRound()
    },
    hpLoss:function(points){
      this.currentEnemy.hp -= points
    }
  }
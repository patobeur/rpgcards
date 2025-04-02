const enemys = {
    currentEnemy:{},
    currentRound:0,
    reset:function(){
      this.currentEnemy={};
      this.currentRound=0;
      console.log('reset opponent')
    },
    updateEnemyHP:function(){
      if(this.currentEnemy.hp) front.enemyHPElement.textContent = `HP: ${this.currentEnemy.hp}`;
    },
    set:function(step){
      this.currentEnemy = step
      this.currentRound = 0
    }
  }
const enemys = {
    currentEnemy:{},
    currentRound:0,
    reset:function(){
      this.currentEnemy={};
      this.currentRound=0;
      console.log('reset opponent')
    },
    updateEnemyHP:function(){
      enemyHPElement.textContent = `HP: ${this.currentEnemy.hp}`;
    },
    set:function(fight){
      this.currentEnemy = fight
      this.currentRound=0;
      console.table(fight)
    },
    displayInfo:function(){
      enemyNameElement.textContent = this.currentEnemy.name;
      enemyDescriptionElement.textContent = "Description: "+ this.currentEnemy.description;
      enemyStyleElement.textContent = "Style: "+ this.currentEnemy.style;
      enemyAuraElement.textContent = "Aura: "+ this.currentEnemy.aura;
      enemyFaiblesseElement.textContent = "Faiblesse: "+ this.currentEnemy.faiblesse;
      enemyRoundElement.textContent = "Attaques par round: " +this.currentEnemy.round;
      enemyImageBoard.style.backgroundImage = "url('"+imageFolder + this.currentEnemy.picture+"')";
      // enemyImageElement.alt = enemyName;
    }
  }
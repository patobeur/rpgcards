const player = {
    score: 0,
    currentStep: 0,
    hp: 100,
    turns: 0,
    round: 0,
    reset:function(){
      this.score=0;
      this.currentStep=0;
      this.hp=100;
      this.round=0;
      this.turns=0;
      console.log('reset player')
    },
    refreshScoreDiv:function(){
      scoreDiv.textContent = `Score: ${this.score} | Coups: ${this.turns} | HP: ${this.hp} | Round: ${this.round}`;
    }
  }
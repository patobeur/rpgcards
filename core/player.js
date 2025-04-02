const player = {
    values:{
      score: 0,
      currentStep: 0,
      hp: 100,
      turns: 0,
      round: 0
    },
    reset:function(){
      this.values = {
        score: 0,
        currentStep: 0,
        hp: 100,
        turns: 0,
        round: 0
      }
      console.log('reset player')
      console.table(this.values)
    },
    refreshPlayerDiv:function() {
      front.playerDiv.textContent = `Score: ${this.values.score} | Turns: ${this.values.turns} | Step: ${this.values.currentStep} | HP: ${this.values.hp} | Round: ${this.values.round}`
    }
  }
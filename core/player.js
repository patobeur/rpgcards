"use strict";
const player = {
  step:undefined,
  eventType:undefined,
  event:undefined,
  stepNum:0,
  values:{},
  reset:function(){
    this.stepNum = 0
    this.values = {
      handSize: 7,
      score: 0,
      hp: 80,
      hpMax: 100,
      plis: 0,
      round: 0,
      or: 0,
      inventory: []
    }

    console.log('reset player')
    this.setStep()
    // console.log(this)
  },
  refreshPlayerStats:function() {
    front.playerDiv.textContent = `Score: ${this.values.score} - Plis: ${this.values.plis} - Étape: ${this.stepNum+1}/${aventure.listeDesEvenements.length} - HP: ${this.values.hp}/${this.values.hpMax} - Or: ${this.values.or}`
  },
  resetRound:function() {
    this.values.round = 0
  },
  setRestBonus:function() {
    let texte = ''
    if(this.event.bonus){
      for (const key in this.event.bonus) {
        if (Object.prototype.hasOwnProperty.call(this.event.bonus, key)) {
          const element = this.event.bonus[key];
          let pourcent = element[2] ?? false
          let gain = 0
          if (pourcent) {
            gain = this.values[key] * pourcent
          }
          else {
            let max = element[1] ?? 0
            let min = element[0] ?? 0
            gain = Math.floor(Math.random() * (max - min + 1)) + min;
          }
          this.values[key] += gain
          if(texte!='') texte += ', '
          texte += gain + key
        }
      }
      if(texte!='') texte = 'Vous récupérez :' + texte 
    }
    return texte
  },
  setRewardBonus:function(reward) {
    let texte = ''
    if(reward){
      for (const key in reward) {
        if (Object.prototype.hasOwnProperty.call(reward, key)) {
          const element = reward[key];
          let pourcent = element[2] ?? false
          let gain = 0
          if (pourcent) {
            gain = this.values[key] * pourcent
          }
          else {
            let max = element[1] ?? 0
            let min = element[0] ?? 0
            gain = Math.floor(Math.random() * (max - min + 1)) + min;
          }
          this.values[key] += gain
          if(texte!='') texte += ', '
          texte += gain + key
        }
      }
      if(texte!='') texte = 'Vous trouvez :' + texte 
    }
    this.refreshPlayerStats();
    return texte
  },
  nextStep:function() {
    this.stepNum++;
    this.setStep()
  },
  setStep:function() {    
    this.step = aventure.listeDesEvenements[this.stepNum];
    this.eventType = Object.keys(this.step)[0]
    this.event = this.step[this.eventType]
  },
}
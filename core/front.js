"use strict";
const front = {
  id: new Number(0),
	createDiv: function (params) {
		let element = document.createElement(params.tag??'div');
		if (params.attributes) {
			for (const key in params.attributes) {
				if (Object.hasOwnProperty.call(params.attributes, key)){
					element[key] = params.attributes[key];
				}
			}
		}
		if (params.style) {
				for (const key2 in params.style) {
					if (Object.hasOwnProperty.call(params.style, key2))
						element.style[key2] = params.style[key2];
			}
		}
		if (params.recenter === true && (params.style.left && params.style.top)) {
			let n = (params.attributes && params.attributes.className) ? params.attributes.className : 'vide'
			let t = params.style.top.slice(0, -2);
			let l = params.style.left.slice(0, -2);
			let w = params.style.width.slice(0, -2);
			let h = params.style.height.slice(0, -2);
			this.recentering(element, t, l, w, h, n)
		}
		if (params.prepend){params.prepend.prepend(element)}
		if (params.append){params.append.append(element)}
		return element;
	},
	recentering: function (element, t, l, w, h, n) {
		if (element.style.left && element.style.width) {
			element.style.left = l - (w / 2) + 'px'
		}
		if (element.style.top && element.style.height) {
			element.style.top = t - (h / 2) + 'px'
		}
		return element
	},
  init:function(){

    this.discardPile = this.createDiv({tag:'div',attributes:{id:'discardPile',className:'pile'},prepend:document.body})
    this.deck = this.createDiv({tag:'div',attributes:{id:'deck',className:'pile'},prepend:document.body})
    this.deckCountSpan = this.createDiv({tag:'span',attributes:{id:'deckCount'},prepend:this.deck})
    this.discardCountSpan = this.createDiv({tag:'span',attributes:{id:'discardCount'},prepend:this.discardPile})


    this.deckActions = this.createDiv({tag:'div',attributes:{id:'buttons',className:''},style:{display: 'none'},prepend:document.body})
    this.attackButton = this.createDiv({tag:'button',attributes:{id:'attackButton',textContent:'Attaquer',className:''},style:{},append:this.deckActions})
    this.discardButton = this.createDiv({tag:'button',attributes:{id:'discardButton',textContent:'Défausser',className:''},style:{},append:this.deckActions})

    this.hand = this.createDiv({tag:'div',attributes:{id:'hand',textContent:'hand'},style:{},prepend:document.body})
    this.playerCardsDiv = this.createDiv({tag:'div',attributes:{id:'playerCards'},style:{},prepend:document.body})



    this.stepDiv = this.createDiv({tag:'div',attributes:{id:'stepdatas'},style:{},prepend:document.body})
    this.playerDiv = this.createDiv({tag:'div',attributes:{id:'playerdatas'},style:{},prepend:document.body})
    this.stepBoardDiv = this.createDiv({tag:'div',attributes:{id:'stepboard'},style:{},prepend:this.stepDiv})
    
    
    this.stepHeaderDiv = this.createDiv({tag:'div',attributes:{className:'step-header'},style:{},prepend:this.stepBoardDiv})
    this.enemyNameElement = this.createDiv({tag:'div',attributes:{id:'enemy-name',className:'enemy-data'},style:{},append:this.stepHeaderDiv})
    this.enemyHPElement = this.createDiv({tag:'div',attributes:{id:'enemy-hp',className:'enemy-data'},style:{},append:this.stepHeaderDiv})
    this.enemyRoundElement = this.createDiv({tag:'div',attributes:{id:'enemy-round',className:'enemy-data'},style:{},append:this.stepHeaderDiv})
    
    // tips
    this.enemyTipDescription = this.createDiv({tag:'div',attributes:{id:'enemy-description',className:'enemy-tip hide'},style:{},append:this.stepBoardDiv})
    this.enemyTipStyle = this.createDiv({tag:'div',attributes:{id:'enemy-style',className:'enemy-tip hide'},style:{},append:this.stepBoardDiv})
    this.enemyTipAura = this.createDiv({tag:'div',attributes:{id:'enemy-aura',className:'enemy-tip hide'},style:{},append:this.stepBoardDiv})
    this.enemyTipFaiblesse = this.createDiv({tag:'div',attributes:{id:'enemy-faiblesse',className:'enemy-tip hide'},style:{},append:this.stepBoardDiv})
    
    // cursors
    this.cursor = this.createDiv({tag:'div',attributes:{id:'cursor'},style:{},append:this.stepBoardDiv})
    this.enemyIcoDescription = this.createDiv({tag:'div',attributes:{id:'ico-description',className:'ico',textContent:'Description'},style:{},append:this.cursor})
    this.enemyIcoStyle = this.createDiv({tag:'div',attributes:{id:'ico-style',className:'ico',textContent:'Style'},style:{},append:this.cursor})
    this.enemyIcoAura = this.createDiv({tag:'div',attributes:{id:'ico-aura',className:'ico',textContent:'Aura'},style:{},append:this.cursor})
    this.enemyIcoFaiblesse = this.createDiv({tag:'div',attributes:{id:'ico-faiblesse',className:'ico',textContent:'Faiblesse'},style:{},append:this.cursor})
    
    this.enemyIcoDescription.addEventListener('mouseover',()=>{this.enemyTipDescription.classList.remove('hide')})
    this.enemyIcoDescription.addEventListener('mouseout',()=>{this.enemyTipDescription.classList.add('hide')})
    this.enemyIcoAura.addEventListener('mouseover',()=>{this.enemyTipAura.classList.remove('hide')})
    this.enemyIcoAura.addEventListener('mouseout',()=>{this.enemyTipAura.classList.add('hide')})
    this.enemyIcoStyle.addEventListener('mouseover',()=>{this.enemyTipStyle.classList.remove('hide')})
    this.enemyIcoStyle.addEventListener('mouseout',()=>{this.enemyTipStyle.classList.add('hide')})
    this.enemyIcoFaiblesse.addEventListener('mouseover',()=>{this.enemyTipFaiblesse.classList.remove('hide')})
    this.enemyIcoFaiblesse.addEventListener('mouseout',()=>{this.enemyTipFaiblesse.classList.add('hide')})

    // deck
    // nextStepButton
    this.nextStepButton = this.createDiv({
      attributes:{className:'button nextstep',textContent:'Suivant'}
    })
    // others
  // this.deckCountSpan = this.createDiv({attributes:{id:'deckCount'},append:this.stepBoardDiv})
    

    // deck and discarded
  
    
  },
  setStepBackgroundImage:function(){
    this.stepBoardDiv.style.backgroundImage = "url('" + aventure.imageFolder + player.event.picture + "')";
  },
  refreshEnemyStats:function() {
    this.enemyHPElement.textContent = '❤️' + player.event.stats.hp.cur + '/' + player.event.stats.hp.max;
    console.log('cycle',player.event.attack.cycle)
    console.log('length',player.event.attack.cycle.length)
    console.log('round',player.event.stats.round)

    this.enemyRoundElement.textContent = ''
    // let span = front.createDiv({tag:'span',attributes:{textContent:' 🇷 ',className:'round-item'},append:this.enemyRoundElement})
    let rCount = 0
    player.event.attack.cycle.forEach(r => {
      let className = (rCount == player.event.stats.round) ? ' actual' : '';
      console.log('r',r,className)
      let span = front.createDiv({attributes:{textContent:r,className:'round-item'+className},append:this.enemyRoundElement})
      rCount++
    });
    // this.enemyRoundElement.textContent = ' 🇷 ' + player.event.stats.round;
  },
  displayStepInfo:function() {
    this.enemyNameElement.textContent = player.event.name;
    this.enemyTipDescription.textContent = player.event.description;
    this.enemyTipDescription.classList.add('fade');

    setTimeout(() => {
        this.enemyTipDescription.classList.remove('fade');
    }, "4000");

    if (player.event.stats && player.event.stats.hp) {
      // this.enemyHPElement.textContent = '❤️' + player.event.stats.hp.cur + '/' + player.event.stats.hp.max;
      front.refreshEnemyStats()
      this.enemyHPElement.classList.remove('hide');
    }
    else {
      this.enemyHPElement.classList.add('hide');
      this.enemyHPElement.textContent = "";
    }

    // if (player.event.stats && player.event.stats.round >= 0) {
    //   this.enemyRoundElement.classList.remove('hide');
    //   this.enemyRoundElement.textContent = ' 🇷 ' + player.event.stats.round;
    // }
    // else {
    //   this.enemyRoundElement.classList.add('hide');
    //   this.enemyRoundElement.textContent = "";
    // }

    if (player.event.style) {
      this.enemyTipStyle.textContent = player.event.style;
      this.enemyIcoStyle.classList.remove('hide')
    }
    else {
      this.enemyTipStyle.textContent = '';
      this.enemyIcoStyle.classList.add('hide')
    }

    if (player.event.aura) {
      this.enemyTipAura.textContent = player.event.aura;
      this.enemyIcoAura.classList.remove('hide')
    }
    else {
      this.enemyTipAura.textContent = ''
      this.enemyIcoAura.classList.add('hide')
    }

    if (player.event.faiblesse) {
      this.enemyTipFaiblesse.textContent = player.event.faiblesse
      this.enemyIcoFaiblesse.classList.remove('hide')
    }
    else {
      this.enemyTipFaiblesse.textContent = ''
      this.enemyIcoFaiblesse.classList.add('hide')
    }

  },
  displayNextStepButton:function(){
    let texte = player.event.continu ?? 'Continuer'
    this.nextStepButton.textContent = texte
    setTimeout(() => {
      this.stepBoardDiv.appendChild(this.nextStepButton);
    }, "4000");
  }
}

  

  // const discardPileDiv = document.getElementById("discardPile");
  
  // const deckCountSpan = document.getElementById("deckCount");
  // const discardCountSpan = document.getElementById("discardCount");

  const gameMessagesDiv = document.getElementById("game-messages");

  function addMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    gameMessagesDiv.prepend(messageElement);
  }
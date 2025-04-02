
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
    this.nextButton = this.createDiv({
      attributes:{className:'button nextStep',textContent:'Suivant'}
    })
    
  },
  setStepBackgroundImage:function(step){
    let action = Object.keys(aventure.listeDesEvenements[player.values.turns])[0]
    console.log(action)
    console.table(aventure.listeDesEvenements[player.values.turns])
    this.stepBoardDiv.style.backgroundImage = "url('" + aventure.imageFolder + step.picture + "')";
  },
  displayStepInfo:function(step) {
    this.enemyNameElement.textContent = step.name;
    this.enemyTipDescription.textContent = step.description;
    
    if (step.round) {
      this.enemyRoundElement.classList.remove('hide');
    }
    else {
      this.enemyRoundElement.textContent = "";
      this.enemyRoundElement.classList.add('hide');
    }

    if (step.style) {
      this.enemyTipStyle.textContent = step.style;
      this.enemyIcoStyle.classList.remove('hide')
    }
    else {
      this.enemyTipStyle.textContent = '';
      this.enemyIcoStyle.classList.add('hide')
    }
    if (step.aura) {
      this.enemyTipAura.textContent = step.aura;
      this.enemyIcoAura.classList.remove('hide')
    }
    else {
      this.enemyTipAura.textContent = ''
      this.enemyIcoAura.classList.add('hide')
    }

    if (step.faiblesse) {
      this.enemyTipFaiblesse.textContent = step.faiblesse
      this.enemyIcoFaiblesse.classList.remove('hide')
    }
    else {
      this.enemyTipFaiblesse.textContent = ''
      this.enemyIcoFaiblesse.classList.add('hide')
    }

  },
}

  const deckDiv = document.getElementById("deck");
  
  // const dealButton = document.getElementById("dealButton");
  const playerCardsDiv = document.getElementById("playerCards");
  const attackButton = document.getElementById("attackButton");
  const discardButton = document.getElementById("discardButton");

  const discardPileDiv = document.getElementById("discardPile");
  
  const deckCountSpan = document.getElementById("deckCount");
  const discardCountSpan = document.getElementById("discardCount");

  const gameMessagesDiv = document.getElementById("game-messages");
  const buttonsDiv = document.getElementById("buttons"); // Ajout de cette ligne!

  function addMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    gameMessagesDiv.prepend(messageElement);
  }
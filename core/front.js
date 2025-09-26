"use strict";
const front = {
  init:function(){
    this.discardPile = document.getElementById('discardPile');
    this.deck = document.getElementById('deck');
    this.discardCountSpan = document.getElementById('discardCount');
    this.deckCountSpan = document.getElementById('deckCount');


    this.deckActions = document.getElementById('buttons');
    this.discardButton = document.getElementById('discardButton');
    this.attackButton = document.getElementById('attackButton');

    this.hand = document.getElementById('hand');
    this.playerCardsDiv = document.getElementById('playerCards');

    this.stepDiv = document.getElementById('stepdatas');
    this.playerDiv = document.getElementById('playerdatas');
    this.stepBoardDiv = document.getElementById('stepboard');


    this.stepHeaderDiv = document.querySelector('.step-header');
    this.enemyNameElement = document.getElementById('enemy-name');
    this.enemyHPElement = document.getElementById('enemy-hp');
    this.enemyRoundElement = document.getElementById('enemy-round');

    // tips
    this.enemyTipDescription = document.getElementById('enemy-description');
    this.enemyTipStyle = document.getElementById('enemy-style');
    this.enemyTipAura = document.getElementById('enemy-aura');
    this.enemyTipFaiblesse = document.getElementById('enemy-faiblesse');

    // cursors
    this.cursor = document.getElementById('cursor');
    this.enemyIcoDescription = document.getElementById('ico-description');
    this.enemyIcoStyle = document.getElementById('ico-style');
    this.enemyIcoAura = document.getElementById('ico-aura');
    this.enemyIcoFaiblesse = document.getElementById('ico-faiblesse');

    this.enemyIcoDescription.addEventListener('mouseover',()=>{this.enemyTipDescription.classList.remove('hide')})
    this.enemyIcoDescription.addEventListener('mouseout',()=>{this.enemyTipDescription.classList.add('hide')})
    this.enemyIcoAura.addEventListener('mouseover',()=>{this.enemyTipAura.classList.remove('hide')})
    this.enemyIcoAura.addEventListener('mouseout',()=>{this.enemyTipAura.classList.add('hide')})
    this.enemyIcoStyle.addEventListener('mouseover',()=>{this.enemyTipStyle.classList.remove('hide')})
    this.enemyIcoStyle.addEventListener('mouseout',()=>{this.enemyTipStyle.classList.add('hide')})
    this.enemyIcoFaiblesse.addEventListener('mouseover',()=>{this.enemyTipFaiblesse.classList.remove('hide')})
    this.enemyIcoFaiblesse.addEventListener('mouseout',()=>{this.enemyTipFaiblesse.classList.add('hide')})

    // nextStepButton
    this.nextStepButton = document.getElementById('nextStepButton');
  },
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
  setStepBackgroundImage:function(){
    this.stepBoardDiv.style.backgroundImage = "url('" + aventure.imageFolder + player.event.picture + "')";
  },
  refreshEnemyStats:function() {
    if (!enemys.current) return;
    this.enemyHPElement.textContent = '❤️' + enemys.current.stats.hp.cur + '/' + enemys.current.stats.hp.max;
    this.enemyRoundElement.textContent = '';
    let rCount = 0;
    enemys.current.attack.cycle.forEach(r => {
      let className = (rCount == enemys.current.stats.round) ? ' actual' : '';
      front.createDiv({attributes:{textContent:r,className:'round-item'+className},append:this.enemyRoundElement});
      rCount++;
    });
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
    this.nextStepButton.textContent = texte;
    this.nextStepButton.style.display = 'block';
  },
  showDecks:function(){
    this.discardPile.style.display = 'inline-block'
    this.deck.style.display = 'inline-block'
  },
  hideDecks:function(){
    this.discardPile.style.display = 'none'
    this.deck.style.display = 'none'
  },
  displayMarket:function(){
    console.log('----------displayMarket------------')
    console.log(player.event.objets)
    player.event.objets.forEach(element => {
      console.log(aventure.listeDesObjets[element])
      let itemCard = this.createDiv({
        attributes:{className:'item-card'},
        style:{backgroundImage:"url('" + aventure.imageItemsFolder + aventure.listeDesObjets[element].picture + "')"},
        append:this.playerCardsDiv
      })
      this.playerCardsDiv.appendChild(itemCard);

    // this.stepBoardDiv.style.backgroundImage = "url('" + aventure.imageFolder + player.event.picture + "')";
    });
  }
}



  const gameMessagesDiv = document.getElementById("game-messages");

  function addMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    gameMessagesDiv.prepend(messageElement);
  }
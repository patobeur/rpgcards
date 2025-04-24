"use strict";
const cartes = {
  elements:["roche","feu","air","eau"],
  emoji: ["♥", "♦", "♣", "♠"],
  suits: [0, 1, 2, 3],
  values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  valueMap: {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14 },
  // ---------------------------
  deck:[],
  playerCards: [],
  selectedCards: [],
  discardPile: [],
  maxCardsPerHand: 5,
  // ---------------------------
  reset:function(){
    this.deck=[];
    this.playerCards=[];
    this.selectedCards=[];
    this.discardPile=[];
    console.log('init deck')
  },
  // ---------------------------
  createDeck:function(){
    this.deck = [];
    this.discardPile = []
    for (let suit of this.suits) {
      for (let value of this.values) {
        let card = { 
          suit: suit, 
          value: value, 
          emoji: this.emoji[suit], 
          color : (suit == 2 || suit == 3) ? 0 : 1
        }
        this.deck.push(card);
      }
    }
    this.shuffleDeck();
  },
  shuffleDeck:function(){
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  },
  hideDeck:function(){
    this.playerCards = [];
    this.createDeck();
    this.displayCards();
    this.updateDeckCount();
    front.hideDecks()
  },
  dealCards:function(){
    this.createDeck();
    this.playerCards = [];
    for (let i = 0; i < player.values.handSize; i++) {
      this.playerCards.push(this.deck.pop());
    }
    this.displayCards();
    this.updateDeckCount();
    front.showDecks()
  },
  displayCards:function(){
    
    front.hand.textContent = ''
    front.playerCardsDiv.innerHTML = "";

    for (let card of this.playerCards) {
      // const cardDiv = document.createElement("div");
      // cardDiv.classList.add("card");
      let filecarte = 'playcards/'+this.valueMap[card.value]+this.elements[card.suit]+'.jpg'
      let alt = this.valueMap[card.value] + '' + this.elements[card.suit]
      
      const cardDiv = front.createDiv({
        tag:"div",
        attributes:{className:'card',title:alt},
        style:{backgroundImage:"url("+filecarte+")"},
      })
      
      // style:{backgroundImage:`url('${this.folder}${catFolder}${data.picture}'),url('cartes/other/vierge.png')`}

      // cardDiv.textContent = card.value + card.suit;
      const emojiDiv = document.createElement("div");
      emojiDiv.classList.add("category");
      emojiDiv.textContent = card.emoji;
      emojiDiv.classList.add(card.color ? "red" : "black");
      emojiDiv.style.display = "none"

      const valueDiv = document.createElement("div");
      valueDiv.classList.add("value");
      valueDiv.textContent = card.value
      valueDiv.style.display = "none"

      cardDiv.appendChild(valueDiv);
      cardDiv.appendChild(emojiDiv);

      cardDiv.addEventListener("click", (event)=>this.toggleCardSelection(event));
      front.playerCardsDiv.appendChild(cardDiv);
    }
  },
  toggleCardSelection:function(event){
    console.log('---------toggleCardSelection---------')
    let list = [... event.target.classList]

    const cardDiv = (list.includes("value") || list.includes("category"))
      ? event.target.parentElement 
      : event.target;

    if(this.selectedCards){

      if (this.selectedCards.includes(cardDiv)) {
        this.selectedCards = this.selectedCards.filter(c => c !== cardDiv);
        cardDiv.classList.remove("selected");
      } else {
        if (this.selectedCards.length < this.maxCardsPerHand) {
          this.selectedCards.push(cardDiv);
          cardDiv.classList.add("selected");
        }
      }   
      if (this.selectedCards.length > 0) {
        front.deckActions.style.display = "block";
      } else {
        front.deckActions.style.display = "none";
      }
       
      // console.log('selectedCards',this.selectedCards)
      let hand = this.checkCombinations(this.selectedCards).hand
      let points = this.checkCombinations(this.selectedCards).points
      front.hand.textContent = ''
      if (hand!='') {
        console.log('hand',this.selectedCards,hand)
        front.hand.textContent = hand + ' (' + points + 'pts)'
      }
    }

  },
  discardCards:function(){
    console.log('discardCards')
    if (this.selectedCards.length === 0) return;
  
    const newCards = [];
    for (let i = 0; i < this.selectedCards.length; i++) {
      // une par une, on met les cartes de la main défaussée dans la pile défausse
      let carte = this.playerCards[this.playerCards.indexOf(this.selectedCards[i])]
      this.discardPile.push(carte);
      newCards.push(this.deck.pop());
      carte = undefined;
    }
  
    // Remplace les cartes selectionnées par de nouvelles
    let cardIndex = 0;
    for (let i = 0; i < this.playerCards.length; i++) {
      if (this.selectedCards.includes(front.playerCardsDiv.children[i])) {
        this.playerCards[i] = newCards[cardIndex];
        cardIndex++;
      }
    }
  
    this.selectedCards = [];
    front.deckActions.style.display = "none";
    this.displayCards();
    this.updateDeckCount();
  },
  updateDeckCount:function(){
    front.deckCountSpan.textContent = this.deck.length;
    this.updateDiscardCount()
  },  
  updateDiscardCount:function(){
    front.discardCountSpan.textContent = this.discardPile.length;
  },
  // ---------------------------
  checkCombinations:function(selectedCards){
    console.log('selectedCards')
    console.log(selectedCards)
    const cardValues = selectedCards.map(card => cartes.valueMap[card.textContent.slice(0, -1)]);
    const cardSuits = selectedCards.map(card => card.textContent.slice(-1));
    console.log('checkCombinations')
    console.log('selectedCards Values:',cardValues)
    console.log('selectedCards Suits:',cardSuits)
    let points = 0;
    let hand = "";
  
    // Vérifie s'il y a au moins une PAIRE parmi 2 cartes ou plus.
    // On compte les occurrences de chaque valeur, si une valeur apparaît deux fois, c'est une paire.
    if (selectedCards.length >= 2) {
      const valueCounts = {};
      cardValues.forEach(value => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
      });

      
      const hasPair = Object.values(valueCounts).some(count => count === 2);
      
      if (hasPair) {
        points += 10;
        hand = "une paire (dans un ensemble de 3 cartes ou plus)";
      }
    }

  
    // Vérifie s’il y a DEUX PAIRES parmi au moins 4 cartes sélectionnées.
    // Si deux valeurs apparaissent exactement deux fois, 25 points sont accordés.
    if (selectedCards.length >= 4) {
      const valueCounts = {};
      cardValues.forEach(value => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
      });
      let pairCount = 0;
      for (const value in valueCounts) {
        if (valueCounts[value] === 2) {
          pairCount++;
        }
      }
    if (pairCount === 2) {
        points += 25;
        hand = "2 paires (dans un ensemble de 4 cartes ou plus)";
      }
    }
    // Détecte un BRELAN (trois cartes de même valeur) parmi 3 cartes ou plus.
    // Attribue 50 points si la condition est remplie.
    if (selectedCards.length >= 3) {
      const valueCounts = {};
      cardValues.forEach(value => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
      });
      for (const value in valueCounts) {
        if (valueCounts[value] === 3) {
          points += 50;
          hand = "3 cartes de même valeur (brelan)";
        }
      }
    }
  
    // Cherche un CARRÉ, soit quatre cartes de la même valeur parmi 4 ou plus sélectionnées.
    // Si trouvé, la combinaison vaut 100 points.
    if (selectedCards.length >= 4) {
      const valueCounts = {};
      cardValues.forEach(value => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
      });
      for (const value in valueCounts) {
        if (valueCounts[value] === 4) {
          points += 100;
          hand = "4 cartes de la même valeur (carré)";
        }
      }
    }
  
    // Détecte une SUITE (Straight) : 5 cartes consécutives sans se soucier des couleurs.
    // Si les valeurs sont ordonnées et consécutives, 75 points sont accordés.
    if (selectedCards.length === 5) {
      cardValues.sort((a, b) => a - b);
      let isStraight = true;
      for (let i = 1; i < 5; i++) {
        if (cardValues[i] !== cardValues[i - 1] + 1) {
          isStraight = false;
          break;
        }
      }
      if (isStraight) {
        points += 75;
        hand = "5 cartes consécutives sans se soucier des couleurs (Straight)";
      }
    }
  
    // Vérifie un FLUSH : 5 cartes de la même couleur (même symbole).
    // Si toutes les cartes ont le même symbole, 80 points sont donnés.
    if (selectedCards.length === 5) {
      const firstSuit = cardSuits[0];
      const isFlush = cardSuits.every(suit => suit === firstSuit);
      if (isFlush) {
        points += 80;
        hand = "5 cartes de la même couleur (même symbole)(Flush)";
      }
    }
  
    // Cherche un FULL HOUSE (un brelan + une paire) parmi 5 cartes.
    // Si trouvé, c’est une main puissante qui vaut 120 points.
    if (selectedCards.length === 5) {
      const valueCounts = {};
      cardValues.forEach(value => {
        valueCounts[value] = (valueCounts[value] || 0) + 1;
      });
      let hasThree = false;
      let hasTwo = false;
      for (const value in valueCounts) {
        if (valueCounts[value] === 3) {
          hasThree = true;
        } else if (valueCounts[value] === 2) {
          hasTwo = true;
        }
      }
      if (hasThree && hasTwo) {
        points += 120;
        hand = "un brelan + une paire (FULL HOUSE)";
      }
    }
  
    // Détecte un STRAIGHT FLUSH : 5 cartes consécutives de la même couleur.
    // C’est une combinaison rare qui rapporte 200 points.
    if (selectedCards.length === 5) {
      cardValues.sort((a, b) => a - b);
      let isStraight = true;
      for (let i = 1; i < 5; i++) {
        if (cardValues[i] !== cardValues[i - 1] + 1) {
          isStraight = false;
          break;
        }
      }
      const firstSuit = cardSuits[0];
      const isFlush = cardSuits.every(suit => suit === firstSuit);
      if (isStraight && isFlush) {
        points += 200;
        hand = "5 cartes consécutives de la même couleur";
      }
    }
  
    // Cherche un ROYAL FLUSH : 10, J, Q, K, A de la même couleur.
    // C’est la main la plus rare et la plus forte du jeu, elle vaut 300 points.
    if (selectedCards.length === 5) {
      const royalFlushValues = [10, 11, 12, 13, 14];
      const firstSuit = cardSuits[0];
      const isFlush = cardSuits.every(suit => suit === firstSuit);
      if (isFlush) {
        const sortedValues = cardValues.sort((a, b) => a - b);
        let isRoyal = true;
        for (let i = 0; i < 5; i++) {
          if (sortedValues[i] !== royalFlushValues[i]) {
            isRoyal = false;
            break;
          }
        }
        if (isRoyal) {
          points += 300;
          hand = "10, J, Q, K, A de la même couleur (Royal Flush)";
        }
      }
    }
    let respons = {
      points : points,
      hand : hand
    }
    // console.log(respons)
    return respons;
  }
}

  // let imageFolder = "png/";
  let imageFolder = "mods/webp2/";
  let imageExt = ".webp";
  let listeDesObjets = {
    0:{
      name: "Potion de soins",
      description: "Buvez cette potion pour récupérer 20 à 50 hp !",
      effect: [{type:'bonus',stat:'hp',values:[20,50]}]
    },
    1:{
      name: "Épée de Justice",
      description: "+25 dégats quand vous attaquez un Diable",
      effect: [{type:'damage',stat:'hp',values:[25]}]
    },
    2:{
      name: "Anneau de protection contre le mal",
      description: "-25 dégats quand un être mauvais vous fait des degats",
      effect: [{type:'protection',stat:'hp',values:[25]}]
    },
  };
  let listeDesEvenements = [
    {
      encounter:{
        name: 'Arkan, le Marchand Errant',
        picture: 'arkanlemarchand.webp',
        description: "Ancien voleur devenu marchand, Arkan s’est perdu dans le labyrinthe... et y a vu une opportunité. Il vend de tout, et surtout ce que vous n’avez pas demandé.",
        dialogue: [
          "Oh ! Des visages pas encore décomposés. Intéressant.",
          "Vous avez l’air fatigués... ça tombe bien, j’ai de quoi tenir debout !",
          "J’échange contre or, potions ou un bon fromage... surtout le fromage."
        ],
        objets: [0, 1, 2],
        ambiance: "Chaleureux & louche à la fois.",
        effet: "Permet d’acheter 1 objet aléatoire pour 3 pièces d’or."
      }
    },
    {
      rest: {
        hp: [20, 20], // points de vie récupéres
        name: "L'aventure commence dans une foret lugubre",
        description: "Un lieu lugubre",
        picture: 'intro.webp'
      }
    },
    {fight:{
      hp: 90,
      name: 'Garde de Pierre',
      picture: 'gardedepierre.webp',
      description: "Sculpté dans les âges anciens, ce gardien de pierre attend patiemment que quelqu’un ose franchir son seuil. Animé par des runes oubliées, il veille sans repos.",
      style: "Ses attaques sont lourdes, rythmées comme des tambours de guerre. Il broie tout ce qui s’approche.",
      faiblesse: "Ses mouvements sont lents. Un combattant agile peut esquiver ses coups.",
      aura: "Immobile & inébranlable.",
      round: 2,
      dps: [4,7],
      gold: 5
    }},
    {encounter:{
      name: 'Arkan, le Marchand Errant',
      picture: 'arkanlemarchand.webp',
      description: "Ancien voleur devenu marchand, Arkan s’est perdu dans le labyrinthe... et y a vu une opportunité. Il vend de tout, et surtout ce que vous n’avez pas demandé.",
      dialogue: [
        "Oh ! Des visages pas encore décomposés. Intéressant.",
        "Vous avez l’air fatigués... ça tombe bien, j’ai de quoi tenir debout !",
        "J’échange contre or, potions ou un bon fromage... surtout le fromage."
      ],
      objets: [0, 1, 2],
      ambiance: "Chaleureux & louche à la fois.",
      effet: "Permet d’acheter 1 objet aléatoire pour 3 pièces d’or."
    }},
    {fight:{
      hp: 70,
      name: 'Spectre du Couloir',
      picture: 'spectreducouloir.webp',
      description: "Errant sans fin dans les couloirs du labyrinthe, ce spectre murmure les noms de ceux qu’il a déjà fait disparaître. Sa présence glace les os.",
      style: "Il traverse les murs et surgit sans prévenir. Ses attaques drainent l’énergie vitale de ses victimes.",
      faiblesse: "La lumière pure ou les sons sacrés le repoussent momentanément.",
      aura: "Sinueux & terrifiant.",
      round: 3,
      dps: [2,8],
      gold: 6
    }},
    {fight:{
      hp: 55,
      name: 'Rats des Ombres',
      picture: 'ratsdesombres.webp',
      description: "Nés dans la crasse et la magie noire, ces rats sont les yeux du labyrinthe. Ils attaquent en meute, rapides et imprévisibles.",
      style: "Ils surgissent de tous les côtés, mordent, griffent, puis disparaissent dans les recoins.",
      faiblesse: "Une forte lumière ou une explosion sonore les fait fuir momentanément.",
      aura: "Répugnants & voraces.",
      round: 2,
      dps: [3,5],
      gold: 4
    }},
    {rest:{
      name: 'Pause',
      picture: 'pause.webp',
      description: "Les aventuriers peuvent récupérer 10 PV ou retirer un effet négatif (poison, malédiction…). Aucun ennemi ne rôde ici… pour l’instant.",
      
      ambiance: "Chaleureux & tranquille à la fois.",
      effet: "Repos."
    }},
    {fight:{
      hp: 80,
      name: 'Veilleur Sombre',
      picture: 'veilleursombre.webp',
      description: "Nul ne sait s’il était humain un jour. Il hante les couloirs, guidé par une lanterne qui murmure à l’oreille des vivants.",
      style: "Il s’avance lentement, mais sa lumière perturbe la perception et brouille les pensées.",
      faiblesse: "Il fuit face à la lumière naturelle ou aux chants sacrés.",
      aura: "Troublant & silencieux.",
      round: 3,
      dps: [3,6],
      gold: 5
    }},
    {fight:{
      hp: 65,
      name: 'Piège Vivant',
      picture: 'piegevivant.webp',
      description: "Il semblait n’être qu’un décor... jusqu’à ce que ses lames surgissent. Cette entité mécanique semble avoir conscience de sa proie.",
      style: "Il frappe en une fraction de seconde, puis se fond à nouveau dans l’environnement. Difficile à prévoir.",
      faiblesse: "Une détection magique ou un œil attentif peut l’identifier avant qu’il n’agisse.",
      aura: "Furtif & mécanique.",
      round: 2,
      dps: [4,9],
      gold: 6
    }},
    {rest:{
      name: 'Refuge souterrain',
      picture: 'refugesouterrain.webp',
      description: "Voici le refuge souterrain, paisible oasis enfoui dans les profondeurs du labyrinthe ✨🌿 Un lieu rare, hors du temps.",
      ambiance: "Chaleureux & tranquille à la fois.",
      effet: "Tous les aventuriers peuvent se soigner complètement ou récupérer un objet magique consommé."
    }},
    {encounter:{
      name: 'Mira, la Rôdeuse Oubliée',
      picture: 'miralarodeuse.webp',
      description: "Silencieuse et méfiante, Mira arpente les couloirs depuis plus longtemps qu’elle ne veut l’avouer. Elle troque des objets rares contre quelques pièces ou informations.",
      dialogue: [
        "Vous avez l’air d’avoir survécu à pas mal de choses… comme moi.",
        "Tout se vend, tout s’échange. Même un souvenir.",
        "Restez pas trop longtemps, la pierre a des oreilles ici."
      ],
      objets: ['Flèche spectrale', 'Baume de soin', 'Rune de silence'],
      ambiance: "Froide mais digne de confiance.",
      effet: "Permet d’acheter 1 objet rare pour 4 pièces d’or."
    }},
    {fight:{
      hp: 85,
      name: 'Illusionniste Fou',
      picture: 'illusionnistefou.webp',
      description: "Ancien magicien obsédé par les reflets, il s’est enfermé dans ses propres illusions. Plus rien n’est vrai, sauf sa haine.",
      style: "Il se dédouble sans cesse, créant de fausses cibles, détournant les attaques et brouillant la perception.",
      faiblesse: "Une attaque ciblant tous les ennemis à la fois peut briser ses illusions.",
      aura: "Insaisissable & instable.",
      round: 3,
      dps: [2,9],
      gold: 7
    }},
    {fight:{
      hp: 100,
      name: 'Gargouille Animée',
      picture: 'gargouilleanimee.webp',
      description: "Sculptée pour protéger les secrets du labyrinthe, cette gargouille se réveille à la moindre vibration. Sa pierre est animée d'une volonté ancienne.",
      style: "Elle plonge depuis les hauteurs, frappant avec une force brutale avant de se figer à nouveau.",
      faiblesse: "Fragile face aux attaques magiques à distance qui fissurent sa carapace.",
      aura: "Féroce & vigilante.",
      round: 3,
      dps: [5,8],
      gold: 6
    }},
    {fight:{
      hp: 120,
      name: 'Gardien de l’Œil',
      picture: 'gardiendeleil.webp',
      description: "Il ne parle pas. Il voit. Chaque mouvement, chaque pensée, il les lit. Né du cœur du labyrinthe, il veille au secret absolu.",
      style: "Ses attaques mentales désorientent, désarment. Il frappe la volonté autant que le corps.",
      faiblesse: "Les attaques brutales et directes troublent ses canalisations.",
      aura: "Mystique & implacable.",
      round: 4,
      dps: [6,10],
      gold: 10
    }},
    {win:{
      name: 'win',
      picture: 'win.webp',
      description: "Et voilà : la salle centrale du labyrinthe ! L'air est sacré, la lumière dorée — la fin du cauchemar et le début d’un nouveau mystère ",
      effet: "Un dôme ancien baigné de lumière céleste. Un artefact repose sur un piédestal, symbole d’accomplissement. Les fresques racontent une histoire oubliée… peut-être la tienne."
    }},
  ];
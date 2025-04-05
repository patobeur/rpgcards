  // let imageFolder = "png/";
  const aventure = {
    imageFolder: "mods/webp2/",
    imageItemsFolder: "mods/webp2/items/",
    imageExt: ".webp",
    listeDesObjets: [
      {
        name: "Potion de soins",
        picture:'potiondesoins.png',
        description: "Buvez cette potion pour récupérer 20 à 50 hp !",
        effect: [{
          stats: {hp:[25,50]}
        }]
      },
      {
        name: "Épée de Justice",
        picture:'epeedejustice.png',
        description: "30 à 30 de dégats suplémentaire quand vous attaquez un Diable",
        effect: [{
          attack: {hp:[25]},
          stats: {hp:[25,50]}
        }]
      },
      {
        name: "Anneau de protection contre le mal",
        picture:'anneaudeprotectioncontrelemal.png',
        description: "25pts de protection quand un être maléfique vous fait des dégats",
        effect: [{
          protection: {hp:[25]}
        }]
      },
      {
        'name': "Arc de feu",
        'picture':'arcdefeu.png',
        'description': "25pts de protection quand un être maléfique vous fait des dégats",
        'effect': [{
          'protection': {'hp':[25]}
        }]
      },
      {
        "name": "Cristal de soin rayonnant",
        "picture": "cristaldesoinrayonnant.png",
        "description": "Rend instantanément 50 points de vie et émet une lumière apaisante avant de disparaitre.",
        'once':true,
        "effect": [{
          "stats": { "hp": [50] },
          "status": { "calm": true }
        }]
      },
      {
        "name": "Binocle de Lucidité",
        "picture": "binocledelucidite.png",
        "description": "Permet de voir plus clair dans le jeu. Le joueur peut garder deux carte supplémentaire en main.",
        "effect": [{
          "stats": { "hand": 2 },
        }]
      },
      {
        "name": "Binocle de Lucidité",
        "picture": "monocledelucidite.png",
        "description": "Permet de voir plus clair dans le jeu. Le joueur peut garder une carte supplémentaire en main.",
        "effect": [{
          "stats": { "hand": 1 },
        }]
      },
      {
        "name": "Bouclier de renvoi magique",
        "picture": "bouclierderenvoimagique.png",
        "description": "Renvoie 50% des dégâts des attaques magiques vers l'attaquant.",
        "effect": [{
          "reflect": { "magic": 0.5 },
          "protection": { "magic": [20] }
        }]
      }
    ],
    listeDesEvenements: [
      // {encounter: {
      //     name: 'Arkan, le Marchand Errant',
      //     picture: 'arkanlemarchand.webp',
      //     description: "Ancien voleur devenu marchand, Arkan s’est perdu dans le labyrinthe... et y a vu une opportunité. Il vend de tout, et surtout ce que vous n’avez pas demandé.",
      //     dialogue: [
      //       "Oh ! Des visages pas encore décomposés. Intéressant.",
      //       "Vous avez l’air fatigués... ça tombe bien, j’ai de quoi tenir debout !",
      //       "J’échange contre or, potions ou un bon fromage... surtout le fromage."
      //     ],
      //     objets: [0, 1, 2],
      //     ambiance: "Chaleureux & louche à la fois.",
      //     effet: "Permet d’acheter 1 objet aléatoire pour 3 pièces d’or."
      //   }
      // },
      {rest: {
          bonus: {
            hp: [0, 0, 0.25], // min, max or pourcent
          },
          name: "L'aventure commence dans une foret lugubre",
          description: "Préparez vous à entrer dans le Labyrinthe perdu.",
          picture: 'intro.webp',
          continu: 'Entrer dans le labyrinthe.'
        }
      },
      {fight: {
          reward: {
            score: [100, 100],
            or: [5, 10]
          },
          stats: {
            hp: {
              cur: 10,
              max: 40
            }
          },
          attack: {
            cycle: [0, 1],
            dps: [4, 7]
          },
          prefixName: "Le",
          accroche: 'Le Garde de Pierre vous barre la route. Vous allez devoir en découdre.',
          name: 'Garde de Pierre',
          picture: 'gardedepierre.webp',
          description: "Sculpté dans les âges anciens, ce gardien de pierre attend patiemment que quelqu’un ose franchir son seuil. Animé par des runes oubliées, il veille sans repos.",
          style: "Ses attaques sont lourdes, rythmées comme des tambours de guerre. Il broie tout ce qui s’approche.",
          faiblesse: "Ses mouvements sont lents. Un combattant agile peut esquiver ses coups.",
          aura: "Immobile & inébranlable.",
        }
      },
      {encounter: {
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
      {fight: {
          reward: {
            score: [100, 100],
            or: [5, 10]
          },
          stats: {
            hp: {
              cur: 40,
              max: 40
            }
          },
          attack: {
            cycle: [0, 1],
            dps: [4, 7]
          },
          prefixName: "Le",
          accroche: 'Le Spectre du Couloir tourne la tête vers vous !',
          name: 'Spectre du Couloir',
          picture: 'spectreducouloir.webp',
          description: "Errant sans fin dans les couloirs du labyrinthe, ce spectre murmure les noms de ceux qu’il a déjà fait disparaître. Sa présence glace les os.",
          style: "Il traverse les murs et surgit sans prévenir. Ses attaques drainent l’énergie vitale de ses victimes.",
          faiblesse: "La lumière pure ou les sons sacrés le repoussent momentanément.",
          aura: "Sinueux & terrifiant."
        }
      },
      {rest: {
          name: 'Pause 4',
          bonus: {
            hp: [20, 20], // points de vie récupéres
            score: [200, 200],
          },
          picture: 'pause.webp',
          description: "Les aventuriers peuvent récupérer 10 PV ou retirer un effet négatif (poison, malédiction…). Aucun ennemi ne rôde ici… pour l’instant.",

          ambiance: "Chaleureux & tranquille à la fois.",
          effet: "Repos."
        }
      },
      {fight: {
          reward: {
            score: [100, 100],
            or: [5, 10]
          },
          stats: {
            hp: {
              cur: 40,
              max: 40
            }
          },
          attack: {
            cycle: [0, 1],
            dps: [4, 7]
          },
          prefixName: "Le",
          accroche: "Le Veilleur Sombre n'a pas l'air comode !",
          name: 'Veilleur Sombre',
          picture: 'veilleursombre.webp',
          description: "Nul ne sait s’il était humain un jour. Il hante les couloirs, guidé par une lanterne qui murmure à l’oreille des vivants.",
          style: "Il s’avance lentement, mais sa lumière perturbe la perception et brouille les pensées.",
          faiblesse: "Il fuit face à la lumière naturelle ou aux chants sacrés.",
          aura: "Troublant & silencieux.",
        }
      },
      {fight: {
          reward: {
            score: [100, 100],
            or: [5, 10]
          },
          stats: {
            hp: {
              cur: 40,
              max: 40
            }
          },
          attack: {
            cycle: [0, 1],
            dps: [4, 7]
          },
          prefixName: "Le",
          accroche: "Le Piège Vivant à l'air inactif depuis des miliers d'années.",
          name: 'Piège Vivant',
          picture: 'piegevivant.webp',
          description: "Il semblait n’être qu’un décor... jusqu’à ce que ses lames surgissent. Cette entité mécanique semble avoir conscience de sa proie.",
          style: "Il frappe en une fraction de seconde, puis se fond à nouveau dans l’environnement. Difficile à prévoir.",
          faiblesse: "Une détection magique ou un œil attentif peut l’identifier avant qu’il n’agisse.",
          aura: "Furtif & mécanique.",
        }
      },
      {rest: {
          name: 'Refuge souterrain',
          picture: 'refugesouterrain.webp',
          description: "Voici le refuge souterrain, paisible oasis enfoui dans les profondeurs du labyrinthe ✨🌿 Un lieu rare, hors du temps.",
          ambiance: "Chaleureux & tranquille à la fois.",
          effet: "Tous les aventuriers peuvent se soigner complètement ou récupérer un objet magique consommé."
        }
      },
      {encounter:{
          prefixName: "",
          accroche: "Mira, la Rôdeuse Oubliée... mais pas pour tout le monde !",
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
        }
      },
      {fight: {
          reward: {
            score: [100, 100],
            or: [5, 10]
          },
          stats: {
            hp: {
              cur: 40,
              max: 40
            }
          },
          attack: {
            cycle: [0, 1],
            dps: [4, 7]
          },
          prefixName: "L'",
          accroche: "L'Illusionniste Fou manque de self controle on dirait !",
          name: 'Illusionniste Fou',
          picture: 'illusionnistefou.webp',
          description: "Ancien magicien obsédé par les reflets, il s’est enfermé dans ses propres illusions. Plus rien n’est vrai, sauf sa haine.",
          style: "Il se dédouble sans cesse, créant de fausses cibles, détournant les attaques et brouillant la perception.",
          faiblesse: "Une attaque ciblant tous les ennemis à la fois peut briser ses illusions.",
          aura: "Insaisissable & instable.",
        }
      },
      {fight: {
          reward: {
            score: [100, 100],
            or: [5, 10]
          },
          stats: {
            hp: {
              cur: 40,
              max: 40
            }
          },
          attack: {
            cycle: [1, 0],
            dps: [4, 7]
          },
          prefixName: "La",
          accroche: "La Gargouille Animée semble vous fixer du regard !",
          name: 'Gargouille Animée',
          picture: 'gargouilleanimee.webp',
          description: "Sculptée pour protéger les secrets du labyrinthe, cette gargouille se réveille à la moindre vibration. Sa pierre est animée d'une volonté ancienne.",
          style: "Elle plonge depuis les hauteurs, frappant avec une force brutale avant de se figer à nouveau.",
          faiblesse: "Fragile face aux attaques magiques à distance qui fissurent sa carapace.",
          aura: "Féroce & vigilante.",
        }
      },
      {fight: {
          reward: {
            score: [200, 200],
            or: [20, 30]
          },
          stats: {
            hp: {
              cur: 80,
              max: 120
            }
          },
          attack: {
            cycle: [1, 0, 1],
            dps: [15, 25]
          },
          prefixName: "Le",
          accroche: "Le Gardien de l’Œil ne parle pas, il garde !",
          name: 'Gardien de l’Œil',
          picture: 'gardiendeleil.webp',
          description: "Il ne parle pas. Il voit. Chaque mouvement, chaque pensée, il les lit. Né du cœur du labyrinthe, il veille au secret absolu.",
          style: "Ses attaques mentales désorientent, désarment. Il frappe la volonté autant que le corps.",
          faiblesse: "Les attaques brutales et directes troublent ses canalisations.",
          aura: "Mystique & implacable.",
          round: 4,
          dps: [6, 10],
          gold: 10
        }
      },
      {win: {
          name: 'win',
          picture: 'win.webp',
          description: "Et voilà : la salle centrale du labyrinthe ! L'air est sacré, la lumière dorée — la fin du cauchemar et le début d’un nouveau mystère ",
          effet: "Un dôme ancien baigné de lumière céleste. Un artefact repose sur un piédestal, symbole d’accomplissement. Les fresques racontent une histoire oubliée… peut-être la tienne."
        }
      },
    ]
  }
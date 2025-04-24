const fight = [
    {fight: {
        reward: {
        score: [300, 350],
        or: [40, 55]
        },
        stats: {
        hp: {
            cur: 110,
            max: 150
        }
        },
        attack: {
        cycle: [1, 1, 0, 1], // attaque 3 rounds sur 4
        dps: [35, 50],
        type: 'magie'
        },
        lv: 3,
        prefixName: "Le",
        accroche: "Chaque œil voit… et chaque œil tue.",
        name: "Beholder",
        picture: "beholder.png",
        description: "Entité flottante venue d’un autre plan, le Beholder est un cauchemar vivant. Son œil central neutralise la magie, tandis que ses tentacules oculaires déclenchent des rayons mortels.",
        style: "Il attaque avec des sorts variés : désintégration, paralysie, peur, et plus encore. Son œil central projette un cône anti-magie.",
        faiblesse: "Peu mobile, sa vision est son point fort… mais aussi sa faille.",
        aura: "Terreur cosmique & domination mentale."
    }},
    {fight: {
        reward: {
        score: [420, 500],
        or: [60, 80]
        },
        stats: {
        hp: {
            cur: 160,
            max: 200
        }
        },
        attack: {
        cycle: [1, 1, 1, 0], // attaque 3 rounds sur 4
        dps: [45, 60],
        type: 'ombre'
        },
        lv: 4,
        prefixName: "L’",
        accroche: "Un œil pour les gouverner tous, une haine pour les anéantir.",
        name: "Archi-Beholder",
        picture: "beholder2.png",
        description: "Ce Beholder est une abomination supérieure. Née d'une corruption profonde du labyrinthe, son œil crache la haine pure, et ses tentacules projettent des sorts tordus par la magie noire.",
        style: "Il altère les perceptions, maudit ses ennemis, et dévore leur volonté avec une magie d’ombre impitoyable.",
        faiblesse: "Son orgueil l’aveugle : il ignore les menaces mineures et sous-estime les petites créatures rapides.",
        aura: "Haine absolue & domination psychique."
    }},
    {fight: {
          reward: {
            score: [25, 40],
            or: [3, 6]
          },
          stats: {
            hp: {
              cur: 15,
              max: 25
            }
          },
          attack: {
            cycle: [1, 0], // attaque un round sur deux
            dps: [5, 10],
            type: 'tranchant'
          },
          lv: 1,
          prefixName: "Le",
          accroche: "Rapide, sournois, et jamais seul très longtemps.",
          name: "Gobelin du Labyrinthe",
          picture: "giantrat.png", // nom de fichier utilisé tel quel
          description: "Petit mais vicieux, le gobelin rôde dans les tunnels obscurs. Il attaque souvent en embuscade, profitant de l'effet de surprise.",
          style: "Attaques rapides avec une lame rouillée. Il harcèle puis s’enfuit si les choses tournent mal.",
          faiblesse: "Très faible en combat frontal. La lumière vive le rend confus.",
          aura: "Perfide & opportuniste."
    }},
    {fight: {
        reward: {
        score: [55, 75],
        or: [6, 10]
        },
        stats: {
        hp: {
            cur: 25,
            max: 35
        }
        },
        attack: {
        cycle: [0, 1], // attaque 1 tour sur 2
        dps: [10, 15],
        type: 'perforant'
        },
        lv: 1,
        prefixName: "La",
        accroche: "Ils ne viennent jamais seuls. Ils sifflent, crient, et frappent en hurlant.",
        name: "Meute Gobeline",
        picture: "meutegobeline.png",
        description: "Un groupe de jeunes gobelins formés à l’attaque rapide et coordonnée. Ils adorent l'embuscade et les couloirs étroits où ils prennent l'avantage en surnombre.",
        style: "Ils frappent ensemble, harcèlent, reculent, puis reviennent. Leur coordination est surprenante.",
        faiblesse: "Ils paniquent si un ou deux tombent rapidement. La peur les disperse facilement.",
        aura: "Bruyante & féroce."
    }},
    {fight: {
        reward: {
        score: [80, 110],
        or: [10, 14]
        },
        stats: {
        hp: {
            cur: 40,
            max: 60
        }
        },
        attack: {
        cycle: [1, 1, 0], // attaque 2 tours sur 3
        dps: [14, 20],
        type: 'tranchant'
        },
        lv: 2,
        prefixName: "L’",
        accroche: "Une bande de gobelins en armure… Ce n’est plus de la rigolade.",
        name: "Escouade Gobeline",
        picture: "escouadegobeline.png",
        description: "Dirigés par un chef brutal, ces gobelins sont mieux équipés que la moyenne. Casques, haches, chaînes… ils n’ont plus rien d’improvisé.",
        style: "Ils avancent en formation, se couvrent, et attaquent avec méthode. Leur coordination vient d’une hiérarchie simple mais efficace.",
        faiblesse: "Désorganisés sans leur chef. Un bon tir bien placé peut semer le chaos dans leurs rangs.",
        aura: "Brutalité disciplinée & menace rampante."
    }},
    {fight: {
      reward: {
        score: [100, 130],
        or: [12, 16]
      },
      stats: {
        hp: {
          cur: 45,
          max: 65
        }
      },
      attack: {
        cycle: [1, 1, 0], // attaque 2 tours sur 3
        dps: [15, 22],
        type: 'perforant'
      },
      lv: 2,
      prefixName: "La",
      accroche: "Des gobelins armés, casqués, prêts à défendre leur territoire.",
      name: "Patrouille Gobeline",
      picture: "patrouillegobeline.png",
      description: "Groupe bien entraîné, mené par un chef rusé. Ils sillonnent les couloirs du labyrinthe pour en garder le contrôle.",
      style: "Utilisent le terrain à leur avantage, enchaînent les attaques rapides, et bloquent les issues.",
      faiblesse: "Leur coordination s'effondre si leur chef tombe.",
      aura: "Ordre militant & hargne."
    }},
    {fight: {
        reward: {
        score: [250, 300],
        or: [40, 60]
        },
        stats: {
        hp: {
            cur: 180,
            max: 220
        }
        },
        attack: {
        cycle: [1, 0, 1, 0], // attaque un tour sur deux
        dps: [40, 55],
        type: 'écrasement'
        },
        lv: 4,
        prefixName: "Le",
        accroche: "Une montagne de muscles et de chaînes… avec un seul œil brillant de rage.",
        name: "Cyclope Enchaîné",
        picture: "cyclopeenchaine.png",
        description: "Prisonnier oublié du labyrinthe, il erre, fou de rage et de douleur. Sa hache géante tranche tout sur son passage.",
        style: "Frappe lente mais dévastatrice. Peut briser les murs, et étourdir plusieurs cibles.",
        faiblesse: "Sa lenteur et sa mauvaise vision périphérique le rendent vulnérable aux attaques latérales.",
        aura: "Rage brute & force titanesque."
    }},
    {fight: {
          reward: {
            score: [150, 180],
            or: [25, 35]
          },
          stats: {
            hp: {
              cur: 95,
              max: 110
            }
          },
          attack: {
            cycle: [1, 1], // attaque chaque tour
            dps: [20, 30],
            type: 'nécrotique'
          },
          lv: 3,
          prefixName: "La",
          accroche: "Une silhouette drapée de bandelettes, ses yeux brillent d’un mal ancien.",
          name: "Momie Éveillée",
          picture: "momieeveillee.png",
          description: "Gardienne d’un ancien sanctuaire du labyrinthe, cette momie est animée par une magie noire. Sa simple présence fait frémir l’air.",
          style: "Ses attaques infligent des malédictions : lenteur, affaiblissement, saignement magique.",
          faiblesse: "Vulnérable au feu et à la lumière divine.",
          aura: "Malédiction & éternité."
    }},
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
        picture: 'golemdepierre.png',
        description: "Sculpté dans les âges anciens, ce gardien de pierre attend patiemment que quelqu’un ose franchir son seuil. Animé par des runes oubliées, il veille sans repos.",
        style: "Ses attaques sont lourdes, rythmées comme des tambours de guerre. Il broie tout ce qui s’approche.",
        faiblesse: "Ses mouvements sont lents. Un combattant agile peut esquiver ses coups.",
        aura: "Immobile & inébranlable.",
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
        picture: 'spectreducouloir.png',
        description: "Errant sans fin dans les couloirs du labyrinthe, ce spectre murmure les noms de ceux qu’il a déjà fait disparaître. Sa présence glace les os.",
        style: "Il traverse les murs et surgit sans prévenir. Ses attaques drainent l’énergie vitale de ses victimes.",
        faiblesse: "La lumière pure ou les sons sacrés le repoussent momentanément.",
        aura: "Sinueux & terrifiant."
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
        lv:1,
        prefixName: "Le",
        accroche: "Le Veilleur Sombre n'a pas l'air comode !",
        name: 'Veilleur Sombre',
        picture: 'veilleursombre.png',
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
        lv:1,
        prefixName: "Le",
        accroche: "Le Piège Vivant à l'air inactif depuis des miliers d'années.",
        name: 'Piège Vivant',
        picture: 'piegevivant.png',
        description: "Il semblait n’être qu’un décor... jusqu’à ce que ses lames surgissent. Cette entité mécanique semble avoir conscience de sa proie.",
        style: "Il frappe en une fraction de seconde, puis se fond à nouveau dans l’environnement. Difficile à prévoir.",
        faiblesse: "Une détection magique ou un œil attentif peut l’identifier avant qu’il n’agisse.",
        aura: "Furtif & mécanique.",
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
        lv:1,
        prefixName: "L'",
        accroche: "L'Illusionniste Fou manque de self controle on dirait !",
        name: 'Illusionniste Fou',
        picture: 'illusionnistefou.png',
        description: "Ancien magicien obsédé par les reflets, il s’est enfermé dans ses propres illusions. Plus rien n’est vrai, à part... Vous.",
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
        picture: 'gargouilleanimee.png',
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
          cycle: [1, 0, 1], // indique 2 round sur 3
          dps: [25, 35]
        },
        "lv":2,
        prefixName: "Le",
        accroche: "Le Gardien de l’Œil ne parle pas, il garde !",
        name: 'Gardien de l’Œil',
        picture: 'gardiendeloeil.png',
        description: "Il ne parle pas. Il voit. Chaque mouvement, chaque pensée, il les lit. Né du cœur du labyrinthe, il veille au secret absolu.",
        style: "Ses attaques mentales désorientent, désarment. Il frappe la volonté autant que le corps.",
        faiblesse: "Les attaques brutales et directes troublent ses canalisations.",
        aura: "Mystique & implacable.",
      }
    },
    {fight: {
        "reward": {
          "score": [70, 70],
          "or": [8, 15]
        },
        "stats": {
          "hp": {
            "cur": 12,
            "max": 30
          }
        },
        "attack": {
          "cycle": [0, 1],// indique 1 round sur 2
          "dps": [12, 25],
          "type":'feu'
        },
        "lv":2,
        "prefixName": "Le",
        "accroche": "Vous pensiez ouvrir un coffre... mais c’est un piège gluant à grandes dents !",
        "name": "Mimic",
        "picture": "mimic.png",
        "description": "Créature polymorphe des profondeurs, le Mimic imite à la perfection les coffres pour attirer les imprudents. Une fois refermé, il digère lentement ses proies.",
        "style": "Ses attaques sont collantes, puissantes, et souvent accompagnées d’un effet de glue paralysante.",
        "faiblesse": "Très lent lorsqu’il se déplace et vulnérable aux attaques à distance.",
        "aura": "Silencieux & carnassier."
      }
    },
    {fight: {
          reward: {
            score: [120, 160],
            or: [10, 18]
          },
          stats: {
            hp: {
              cur: 60,
              max: 90
            }
          },
          attack: {
            cycle: [0, 1, 1], // attaque 2 rounds sur 3
            dps: [15, 22],
            type: 'acide'
          },
          lv: 2,
          prefixName: "Les",
          accroche: "Ils rampent lentement, silencieusement… jusqu’à vous dissoudre complètement.",
          name: "Cubes Gélatineux",
          picture: "gelatinouscubes.png",
          description: "Créatures amorphes et translucides, les cubes gélatineux nettoient les couloirs du labyrinthe de toute matière organique. Les os de leurs victimes flottent encore en eux.",
          style: "Ils englobent leurs ennemis, les digèrent lentement avec leur acidité, et absorbent les objets sur leur passage.",
          faiblesse: "Vulnérables aux attaques de froid et facilement contournables à distance.",
          aura: "Lenteur implacable & digestion silencieuse."
        }
    },
    {fight: {
          reward: { score: [40, 60], or: [5, 9] },
          stats: { hp: { cur: 25, max: 35 } },
          attack: { cycle: [0, 1], dps: [8, 12], type: "tranchant" },
          lv: 1,
          prefixName: "Le",
          accroche: "Petit, vif, et écailleux. Il vous surveille…",
          name: "Kobold",
          picture: "kobold.png",
          description: "Créature souterraine aux origines draconiques lointaines. Il défend son territoire avec acharnement et attaque en meute.",
          style: "Frappe rapide et s'enfuit vite. Son agilité le rend difficile à toucher.",
          faiblesse: "Très faible physiquement, il panique s'il est seul.",
          aura: "Agité & territorial."
        }
    },
    {fight: {
          reward: { score: [200, 250], or: [30, 45] },
          stats: { hp: { cur: 100, max: 140 } },
          attack: { cycle: [1, 1, 0], dps: [28, 40], type: "feu" },
          lv: 3,
          prefixName: "Le",
          accroche: "Un chevalier noir au regard incandescent. Une légende tombée dans l’oubli.",
          name: "Chevalier Cendré",
          picture: "chevaliercendre.png",
          description: "Ancien paladin consumé par le feu sacré qu’il servait. Il erre désormais, porteur d’une lame en fusion.",
          style: "Attaques puissantes et enflammées, zone brûlante autour de lui.",
          faiblesse: "Faible à l’eau et à la glace.",
          aura: "Cendres, regret & damnation."
        }
    },
    {fight: {
          reward: { score: [220, 260], or: [35, 50] },
          stats: { hp: { cur: 90, max: 130 } },
          attack: { cycle: [1, 1, 0], dps: [30, 42], type: "mental" },
          lv: 3,
          prefixName: "Le",
          accroche: "Un ancien gardien, animé par une conscience magique.",
          name: "Sentinelle Cyclopéenne",
          picture: "sentinellecyclopeenne.png",
          description: "Chevalier mystique à l’unique œil magique. Son regard pénètre l’âme.",
          style: "Altération mentale, confusion, attaques spectrales.",
          faiblesse: "Très sensible aux projectiles bien ciblés.",
          aura: "Froide vigilance & oubli ancien."
        }
    },
    {fight: {
          reward: { score: [100, 140], or: [12, 18] },
          stats: { hp: { cur: 60, max: 85 } },
          attack: { cycle: [1, 0, 1], dps: [18, 25], type: "physique" },
          lv: 2,
          prefixName: "La",
          accroche: "Ils puent, grognent, et frappent fort.",
          name: "Tribu des Troglodytes",
          picture: "tribudestroglodytes.png",
          description: "Créatures primitives, armées de morceaux de ferraille et poussées par la rage et la faim.",
          style: "Attaques simples mais coordonnées. Ils harcèlent sans répit.",
          faiblesse: "Facilement manipulables et peu intelligents.",
          aura: "Brute & rustre."
        }
    },
    {fight: {
          reward: { score: [80, 100], or: [10, 15] },
          stats: { hp: { cur: 50, max: 70 } },
          attack: { cycle: [1, 1], dps: [16, 22], type: "tranchant" },
          lv: 2,
          prefixName: "La",
          accroche: "Ils avancent sans peur, animés par une volonté impie.",
          name: "Légion Squelettique",
          picture: "legionsquelettique.png",
          description: "Armée d’ossements réanimée par une ancienne nécromancie. Ils n’ont pas de pitié, pas de repos.",
          style: "Frappe rythmée, défense en formation. Difficulté à les repousser.",
          faiblesse: "Faibles à la lumière divine et aux armes contondantes.",
          aura: "Silence & obéissance macabre."
        }
    },
    {fight: {
          reward: { score: [180, 230], or: [25, 38] },
          stats: { hp: { cur: 70, max: 100 } },
          attack: { cycle: [1, 0], dps: [24, 30], type: "tranchant" },
          lv: 3,
          prefixName: "Le",
          accroche: "Un squelette ailé aux allures de démon antique.",
          name: "Guerrier Ailé d’Os",
          picture: "guerrierailedos.png",
          description: "Ressuscité avec des ailes noires comme la nuit, ce squelette plane avant d’abattre sa lame maudite.",
          style: "Esquive aérienne, frappe en piqué, peut désarçonner l’ennemi.",
          faiblesse: "Ses os sont fragiles sous des attaques explosives.",
          aura: "Vol & mort assurée."
        }
    },
    {fight: {
          reward: { score: [260, 300], or: [40, 55] },
          stats: { hp: { cur: 110, max: 150 } },
          attack: { cycle: [1, 1, 1], dps: [30, 45], type: "feu" },
          lv: 4,
          prefixName: "Le",
          accroche: "Il n’a plus d’âme, seulement des flammes.",
          name: "Champion Ardente",
          picture: "championardente.png",
          description: "Un ancien héros brûlé par la magie du feu, aujourd’hui revenu en armure incandescente, guidé par la vengeance.",
          style: "Puissantes attaques de feu, zone brûlante autour de lui, résistance élevée.",
          faiblesse: "Faible aux attaques d’eau et sorts de givre.",
          aura: "Feu intérieur & rage consumante."
        }
    },
    {fight: {
        reward: { score: [300, 350], or: [50, 70] },
        stats: { hp: { cur: 120, max: 160 } },
        attack: { cycle: [1, 0, 1], dps: [35, 45], type: "sombre" },
        lv: 5,
        prefixName: "Le",
        accroche: "Son regard transperce le masque, son silence pèse sur l'âme.",
        name: "Maître Sans Masque",
        picture: "maitresansmasque.png",
        description: "Gardien occulte d'une relique interdite. Sa présence seule distord la réalité alentour.",
        style: "Magie noire, malédictions, invocation de spectres.",
        faiblesse: "Lumière sacrée ou objets purificateurs.",
        aura: "Mystère & interdiction."
    }},
    {fight: {
          reward: { score: [160, 190], or: [20, 28] },
          stats: { hp: { cur: 65, max: 85 } },
          attack: { cycle: [1, 1, 0], dps: [18, 28], type: "griffes" },
          lv: 2,
          prefixName: "Les",
          accroche: "Des hurlements dans la nuit, des yeux rouges dans les bois.",
          name: "Goules Lunaires",
          picture: "gouleslunaires.png",
          description: "Ces goules errent en meute sous la pleine lune, à la recherche de chair fraîche.",
          style: "Rapidité, morsures empoisonnées, effets de peur.",
          faiblesse: "Lente récupération entre deux attaques, sensible au feu.",
          aura: "Affamé & impie."
    }},
    {fight: {
        reward: { score: [240, 280], or: [35, 45] },
        stats: { hp: { cur: 95, max: 130 } },
        attack: { cycle: [1, 0], dps: [30, 38], type: "acide" },
        lv: 4,
        prefixName: "L'",
        accroche: "Une horreur abyssale sortie des ruines englouties.",
        name: "Abomination des Profondeurs",
        picture: "abominationdesprofondeurs.png",
        description: "Créature antique surgie des abysses, suintant d’une bave corrosive et d’un regard innommable.",
        style: "Attaque à base d’acide, tentacules dévastateurs, hurlement terrifiant.",
        faiblesse: "Lente, vulnérable à la magie de l’air.",
        aura: "Abysse & dégoût."
    }},
    {fight: {
        reward: { score: [270, 300], or: [45, 60] },
        stats: { hp: { cur: 110, max: 140 } },
        attack: { cycle: [1, 1, 1], dps: [32, 40], type: "magie noire" },
        lv: 4,
        prefixName: "Le",
        accroche: "Il lit les morts. Et vous, il vous écrit dans son livre.",
        name: "Nécrosavant",
        picture: "necrosavant.png",
        description: "Ancien sage tombé dans la nécromancie. Son livre n’est jamais fermé.",
        style: "Projette des sorts d’ombre, invoque des âmes, absorbe la vie.",
        faiblesse: "Fragile en combat physique rapproché.",
        aura: "Savoir interdit & pouvoir maudit."
    }},
    {fight: {
        reward: { score: [210, 260], or: [30, 40] },
        stats: { hp: { cur: 100, max: 120 } },
        attack: { cycle: [1, 1, 0], dps: [28, 34], type: "feu" },
        lv: 3,
        prefixName: "Le",
        accroche: "Un guerrier tombé dans les flammes, relevé par la haine.",
        name: "Chevalier Ardent",
        picture: "chevalierardent.png",
        description: "Son armure fume encore, forgée par les cendres et le regret. Il ne ressent plus la douleur.",
        style: "Frappe de feu en zone, rugissements brûlants, invulnérable au feu.",
        faiblesse: "Magie de glace et sorts d'eau.",
        aura: "Cendres & rage."
    }},
    {fight: {
          reward: { score: [220, 260], or: [35, 42] },
          stats: { hp: { cur: 105, max: 130 } },
          attack: { cycle: [1, 0, 1], dps: [30, 40], type: "défensif" },
          lv: 3,
          prefixName: "Le",
          accroche: "Son bouclier ne tombe jamais.",
          name: "Gardien Obsidien",
          picture: "gardienobsidien.png",
          description: "Ancien champion devenu protecteur du Néant. Son armure absorbe la lumière.",
          style: "Parades, contre-attaques, résistance élevée.",
          faiblesse: "Sorts de foudre et attaques rapides.",
          aura: "Mur vivant & silence absolu."
    }},
    {fight: {
        reward: { score: [180, 200], or: [25, 30] },
        stats: { hp: { cur: 75, max: 100 } },
        attack: { cycle: [0, 1], dps: [20, 28], type: "lumière" },
        lv: 2,
        prefixName: "Le",
        accroche: "Il éclaire les ténèbres… et les frappe.",
        name: "Guetteur de Lanterne",
        picture: "guetteurdelanterne.png",
        description: "Ancien explorateur maudit, il rôde avec sa lanterne magique pour capturer les âmes perdues.",
        style: "Illumination aveuglante, fouet précis, sort d'immobilisation.",
        faiblesse: "Très vulnérable à l'eau et aux étourdissements.",
        aura: "Clarté & menace discrète."
    }},
    {fight: {
        reward: { score: [240, 270], or: [30, 40] },
        stats: { hp: { cur: 90, max: 120 } },
        attack: { cycle: [1, 1], dps: [28, 35], type: "ombre" },
        lv: 4,
        prefixName: "Les",
        accroche: "Ils rampent sans bruit. Mais votre santé mentale, elle, hurle déjà.",
        name: "Étrangetés Rampantes",
        picture: "etrangetesrampantes.png",
        description: "Créatures mi-cube, mi-cauchemar, totalement indéfinissables. Mieux vaut ne pas trop regarder.",
        style: "Disparition instantanée, désorientation visuelle, cris spectraux.",
        faiblesse: "Lumière pure et angles droits parfaits.",
        aura: "Malaisant & instable."
    }},
    {fight: {
        reward: { score: [280, 330], or: [40, 55] },
        stats: { hp: { cur: 100, max: 130 } },
        attack: { cycle: [1, 1, 1], dps: [36, 45], type: "magie noire" },
        lv: 5,
        prefixName: "Le",
        accroche: "Ses yeux brillent comme deux menaces divines. Il ne parle pas. Il juge.",
        name: "Maître du Masque",
        picture: "maitredumasque.png",
        description: "Nul ne sait ce qu’il y a sous le masque. Probablement quelque chose d'encore moins rassurant.",
        style: "Invisibilité temporaire, absorption mentale, distorsion de la réalité.",
        faiblesse: "Lumière sacrée concentrée.",
        aura: "Autorité & silence pesant."
    }},
    {fight: {
        reward: { score: [260, 300], or: [35, 50] },
        stats: { hp: { cur: 130, max: 160 } },
        attack: { cycle: [1, 0, 1], dps: [38, 46], type: "physique" },
        lv: 4,
        prefixName: "La",
        accroche: "Elle grogne. Elle fonce. Elle écrase. Une vraie ambiance de famille.",
        name: "Tarasque de Donjon",
        picture: "tarascon.png",
        description: "Petite cousine du dragon, elle a le tempérament d’un sanglier et la délicatesse d’un boulet de démolition.",
        style: "Charge brutale, morsure puissante, écailles renforcées.",
        faiblesse: "Très lente. Peu agile. Aucun sens de l'humour.",
        aura: "Massive & bornée."
    }},
    {fight: {
        reward: { score: [260, 310], or: [35, 48] },
        stats: { hp: { cur: 100, max: 140 } },
        attack: { cycle: [1, 0], dps: [34, 42], type: "acide" },
        lv: 4,
        prefixName: "L'",
        accroche: "Il vous regarde. Et il bave. Beaucoup trop.",
        name: "Aboleth de Couscous",
        picture: "abolethdecouscous.png",
        description: "Descendu des profondeurs, il veut asservir l’humanité… ou tout simplement goûter à votre plat du jour.",
        style: "Jet de bave acide, tentacules fouetteurs, persuasion mentale.",
        faiblesse: "Déshydratation. Épices fortes.",
        aura: "Poisseux & visqueux."
    }},
    {fight: {
        reward: { score: [150, 200], or: [25, 35] },
        stats: { hp: { cur: 80, max: 80 } },
        attack: { cycle: [1, 0,0], dps: [34, 42], type: "force" },
        lv: 2,
        prefixName: "Des'",
        accroche: "Ils vous detestent déjà !.",
        name: "Troglodytes",
        picture: "troglodytes.png",
        description: "",
        style: "",
        faiblesse: "",
        aura: ""
    }},
]
const encounter = [
  {encounter: {
      name: 'Mirage',
      picture: 'apparition.png',
      accroche: 'Apparition momentanée',
      description: "Recouvrez un de vos objets au hasard avec le premier de la pile. L’effet ne dure qu’un combat, après quoi l’objet apparu retourne dans la pile.",
      dialogue: [
        "Vous êtes là ?",
      ],
      objets: [0, 1, 2],
      ambiance: "Étrange et froide mais passagère !",
      effet: "Recouvrez un de vos objets au hasard avec le premier de la pile. L’effet ne dure qu’un combat, après quoi l’objet apparu retourne dans la pile.",
    }
  },
  {encounter: {
      name: 'Arkan, le Marchand Errant',
      picture: 'arkanlemarchand.png',
      accroche: 'Ancien voleur devenu marchand... ',
      description: "Arkan s’est perdu dans le labyrinthe et y a vu une opportunité. Il vend de tout, et surtout ce que vous n’avez pas demandé.",
      dialogue: [
        "Oh ! Des visages pas encore décomposés. Intéressant.",
        "Vous avez l’air fatigués... ça tombe bien, j’ai de quoi tenir debout !",
        "J’échange contre or, potions ou un bon fromage... surtout le fromage."
      ],
      objets: [0, 1, 2],
      ambiance: "Chaleureux & louche à la fois.",
      effet: "Permet d’acheter 1 objet aléatoire pour 3 pièces d’or.",
    }
  },
    {encounter:{
        prefixName: "",
        accroche: "Mira, la Rôdeuse Oubliée... mais pas pour tout le monde !",
        name: 'Mira, la Rôdeuse Oubliée',
        picture: 'miralarodeuse.png',
        description: "Silencieuse et méfiante, Mira arpente les couloirs depuis plus longtemps qu’elle ne veut l’avouer. Elle troque des objets rares contre quelques pièces ou informations.",
        dialogue: [
          "Vous avez l’air d’avoir survécu à pas mal de choses… comme moi.",
          "Tout se vend, tout s’échange. Même un souvenir.",
          "Restez pas trop longtemps, la pierre a des oreilles ici."
        ],
        objets: [5,8,11],
        ambiance: "Froide mais digne de confiance.",
        effet: "Permet d’acheter 1 objet rare pour 4 pièces d’or."
      }
    },
    {"encounter": {
            "name": "Savoïra la Gardienne",
            "picture": "bibliotheque.png",
            "accroche": "Les livres murmurent, elle écoute.",
            "description": "Savoïra conserve les savoirs oubliés du labyrinthe. Chaque page qu'elle vend a un prix... parfois l’âme.",
            "dialogue": [
                "Le savoir est une arme. Et j’ai tout un arsenal.",
                "Approche. Lis... si tu l’oses.",
                "Certains livres refusent d’être ouverts. Dommage pour toi."
            ],
            "objets": [12, 13, 14],
            "ambiance": "Sage & légèrement inquiétante.",
            "effet": "Propose des grimoires rares contre des secrets ou de l’or."
        }
    },
    {"encounter": {
            "name": "Liora, Dame des Bois",
            "picture": "liora.png",
            "accroche": "Un sourire végétal dans l'ombre du labyrinthe.",
            "description": "Gardienne des esprits de la forêt, Liora troque potions et bénédictions contre des objets naturels ou de l’or.",
            "dialogue": [
                "Le vent m’a parlé de vous. Étrange.",
                "Tout est échange, même les parfums de fleurs fanées.",
                "Prenez soin de la nature, et elle prendra soin de vous."
            ],
            "objets": [3, 6, 9],
            "ambiance": "Apaisante & mystique.",
            "effet": "Piochez 3 cartes. Une contre 15 PO ou une autre carte identique."
        }
    },
    {"encounter": {
            "name": "Père Alrick",
            "picture": "perealrick.png",
            "accroche": "Un flacon pour chaque bobos, un sourire pour chaque cauchemar.",
            "description": "Ancien moine herboriste, il vend ses potions en échange de pièces ou de bonnes actions.",
            "dialogue": [
                "Une potion pour la fatigue ? Ou juste un peu de chaleur ?",
                "Je ne soigne pas les regrets, mais j’ai de quoi les adoucir.",
                "L’ingrédient secret ? Un peu de foi et beaucoup d’alcool."
            ],
            "objets": [0, 2, 7],
            "ambiance": "Réconfortante & joviale.",
            "effet": "Vente de potions de soin ou bonus temporaires pour quelques pièces."
        }
    },
    {"encounter": {
            "name": "Tilda la Préparatrice",
            "picture": "tilda.png",
            "accroche": "Toujours prête, toujours polie, toujours un plan de secours.",
            "description": "Tilda vous vend tout ce qu'il faut pour survivre, sauf le courage. Ça, c’est vous.",
            "dialogue": [
                "Je vends tout sauf la sortie. Ça, faut la trouver.",
                "Vous avez de quoi payer ? Même un vieux bouton ?",
                "Mes flacons ne fuient pas. Moi non plus."
            ],
            "objets": [1, 4, 8],
            "ambiance": "Organisée & honnête.",
            "effet": "Propose objets pratiques à prix réduits, idéale pour aventuriers débutants."
        }
    },
    {"encounter": {
            "name": "Saria l’Ombreuse",
            "picture": "saria.png",
            "accroche": "Une fiole dans l’ombre, un prix dans l’oreille.",
            "description": "Marchande silencieuse dans un coin sombre du labyrinthe, ses potions ne sont pas toujours légales.",
            "dialogue": [
                "Rien vu, rien entendu, mais j’ai ce qu’il vous faut.",
                "Discret, rapide. Pas de reçus.",
                "Mes fioles brillent. Comme vos yeux quand vous en buvez."
            ],
            "objets": [10, 11, 13],
            "ambiance": "Discrète & utile.",
            "effet": "Permet d’acquérir des objets puissants à effet secondaire."
        }
    },
    {"encounter": {
            "name": "Zerk, le Brocanteur Gobelin",
            "picture": "zerk.png",
            "accroche": "Tout est à vendre, même ce qui ne l’est pas.",
            "description": "Zerk troque ses trouvailles louches contre des babioles. Rira bien qui ne se fera pas arnaquer.",
            "dialogue": [
                "Héhé, regardez cette boule ! Elle clignote !",
                "Pas de remboursement. Ni de plainte.",
                "Vous êtes mon client préféré ! Après le rat qui m’a tout volé."
            ],
            "objets": [5, 6, 7],
            "ambiance": "Comique & imprévisible.",
            "effet": "Offre des objets aléatoires, parfois maudits, parfois géniaux."
        }
    },
    {"encounter": {
            "name": "Des Pixies Éclaireuses",
            "picture": "pixieseclaireuses.png",
            "accroche": "De la lumière dans l’ombre… et du troc aussi !",
            "description": "Ces fées agiles échangent secrets contre objets lumineux. Leur rumeur guide les perdus.",
            "dialogue": [
                "Vous cherchez votre chemin ? Montrez d’abord ce que vous avez.",
                "On aime les choses qui brillent. Et les gâteaux aussi.",
                "Pas touche à nos ailes, compris ?"
            ],
            "objets": [9, 12, 14],
            "ambiance": "Joyeuse & vive.",
            "effet": "Permet d’échanger des informations contre objets magiques ou buffs de vision."
        }
    },
    {"encounter": {
            "name": "La Confrérie des Ailes",
            "picture": "pixiesconfrerie.png",
            "accroche": "Elles murmurent des offres dans un nuage de paillettes.",
            "description": "Petit groupe de fées marchandes qui se déplacent toujours en essaim. Leur prix est souvent… poétique.",
            "dialogue": [
                "Tu veux de la magie ? Dis un mot doux d’abord.",
                "On troque des secrets, mais pas les nôtres.",
                "Rien n’est gratuit. Même pas ce clin d’œil."
            ],
            "objets": [6, 8, 13],
            "ambiance": "Mystérieuse & joueuse.",
            "effet": "Offre des potions ou artefacts brillants en échange d’objets rares ou chants anciens."
        }
    },
    {encounter: {
          name: "Yldra, la Racine-Vieille",
          picture: "yldra.png",
          accroche: "Elle est là depuis toujours. Littéralement.",
          description: "Esprit millénaire logé dans l’arbre inversé, Yldra parle lentement, mais soigne profondément. Elle offre sa sève à ceux qui respectent la terre.",
          dialogue: [
            "Les racines entendent ce que les oreilles oublient.",
            "Ne piétine pas l’ombre des feuilles sacrées.",
            "Tu peux rester. L’arbre t’aime bien. Pour l’instant."
          ],
          objets: [15, 16, 17],
          ambiance: "Ancienne & végétale.",
          effet: "Offre soins et bénédictions naturelles contre offrande ou silence respectueux."
    }},
    {encounter: {
        name: "Echo",
        picture: "echo.png",
        accroche: "Ce n’est pas vraiment une personne. Mais il vous répond.",
        description: "Echo est une résonance consciente, née des voix passées. Il échange des visions contre des souvenirs.",
        dialogue: [
        "...Vous... déjà venu... ?",
        "Offre une pensée, reçois une vérité.",
        "Ton nom a-t-il déjà été prononcé ici ?"
        ],
        objets: [],
        ambiance: "Éthéré & désorientant.",
        effet: "Révèle des indices sur le labyrinthe, Pour 10 PV vous pourrez piocher 2 cartes combat et jouer celle qui vous plait."
    }},
    {encounter: {
        name: "Braska la Chope",
        picture: "braska.png",
        accroche: "Sa chope est pleine. Toujours.",
        description: "Ancien aventurier devenu tavernier, Braska connaît toutes les rumeurs et troque sa bière contre des histoires.",
        dialogue: [
        "Raconte-moi ta meilleure fuite. J’offre la tournée.",
        "La mousse parle mieux que les mots.",
        "Des monstres ? Y’en a plus ici... depuis hier."
        ],
        objets: [0, 1, 5],
        ambiance: "Chaleureuse & beuglante.",
        effet: "Restaure le moral et échange objets contre anecdotes."
    }
    },
    {encounter: {
        name: "Marnie la Surveillante",
        picture: "marnie.png",
        accroche: "Pas un bruit, pas un pas de travers. Sinon dehors !",
        description: "Ex-milicienne reconvertie en gardienne du repos. Elle offre sécurité, oreillers fermes, et ordres secs.",
        dialogue: [
            "Range tes bottes. Oui, même ici.",
            "Un peu de discipline ne tue pas. Le labyrinthe, lui, si.",
            "Pas de ronflement. Sinon, tu dors dehors."
        ],
        objets: [],
        ambiance: "Sévère mais rassurante.",
        effet: "Soigne 20 PV et donne un bonus de 20 PV jusqu’à la fin du prochain combat. Oui c’est gratuit !"
    }},
    {encounter: {
        name: "Nim, la Souris des Couloirs",
        picture: "nim.png",
        accroche: "Elle a déjà fouillé vos poches. Vous ne l’aviez pas remarqué ?",
        description: "Nim vit dans l’ombre des couloirs, troquant ce qu’elle vole contre ce qui brille. Difficile de dire si elle vous aide ou vous dépouille.",
        dialogue: [
        "Chhhht. Vous avez besoin de rien... ou de tout ?",
        "Je rends toujours ce que je vole. Parfois.",
        "Je troque ! Mais pas mes bottes. Jamais mes bottes."
        ],
        objets: [3, 5, 8],
        ambiance: "Rusée & joueuse.",
        effet: "Vend des objets aléatoires (certains volés), parfois à moitié prix, parfois... à vos frais."
    }},
    {encounter: {
        name: "Médaros, le Mage Éteint",
        picture: "medaros.png",
        accroche: "Ses yeux sont des abîmes. Il voit loin. Peut-être trop.",
        description: "Ancien maître du cercle arcanique, Médaros erre dans le labyrinthe, murmurant des vérités en échange d’objets imprégnés de magie.",
        dialogue: [
        "Le feu s’est éteint. Mais la cendre parle encore.",
        "Je t’échange une vérité contre un mensonge.",
        "Les portails sont instables... comme mon humeur."
        ],
        objets: [10, 11, 14],
        ambiance: "Mystique & fatigué.",
        effet: "Vend des artefacts puissants ou des fragments de sort en échange d’objets enchantés ou de mana."
    }},
]
const rest = [
    {rest: {
      bonus: {
        hp: [0, 0, 0.25], // min, max or pourcent
      },
      name: "L'aventure commence dans une foret lugubre",
      description: "Préparez vous à entrer dans le Labyrinthe perdu.",
      picture: 'intro.png',
      continu: 'Entrer dans le labyrinthe.'
      }
    },
    {rest: {
        name: "Enfin ! Un coin tranquille pour se poser.",
        bonus: {
          hp: [20, 20],
          score: [200, 200],
        },
        picture: "lieu2.png",
        description:
          "Aucun ennemi ne rôde ici… pour l’instant. Les aventuriers peuvent récupérer 10 PV ou retirer un effet négatif (poison, malédiction…).",
        accroche: "Les pierres ici semblent respirer plus lentement.",
        ambiance: "Chaleureux & tranquille à la fois.",
        effet: "Repos.",
    }},
    {rest: {
          name: "Oasis souterraine",
          bonus: {
            hp: [20, 20],
            score: [200, 200],
          },
          picture: "lieu1.png",
          description:
            "Voici le refuge souterrain, paisible oasis enfoui dans les profondeurs du labyrinthe. Un lieu rare, hors du temps.",
          accroche: "Le murmure de l’eau vous rappelle qu’il existe encore des merveilles.",
          ambiance: "Chaleureux & tranquille à la fois.",
          effet: "Tous les aventuriers peuvent se soigner complètement et/ou activer un objet magique.",
    }},
    {rest: {
      name: "Salle oubliée",
      bonus: {
        hp: [10, 15],
        score: [120, 150],
      },
      picture: "lieu0.png",
      description:
        "Cette pièce ancienne semble délaissée depuis des siècles. Mais son calme rassure, et ses murs murmurent des secrets anciens.",
      accroche: "Vous êtes les premiers à fouler ces dalles depuis bien longtemps.",
      ambiance: "Silencieux & poussiéreux.",
      effet: "Permet de regagner quelques PV et de retirer un effet néfaste.",
    }},
    {rest: {
          name: "Source des cristaux bleus",
          bonus: {
            hp: [25, 30],
            score: [250, 250],
          },
          picture: "lieu3.png",
          description:
            "Une eau claire et étrange coule au pied de champignons luminescents. Elle restaure le corps… et parfois l’esprit.",
          accroche: "La lumière bleue apaise les douleurs que les mots ignorent.",
          ambiance: "Mystique & rafraîchissant.",
          effet: "Rend tous les PV et peut rendre un point de magie à chaque aventurier.",
    }},
    {rest: {
      name: "Auberge de Braska",
      bonus: {
        hp: [25, 30],
        score: [250, 250],
      },
      picture: "aubergedebraska.png",
      description: "",
      accroche: ".",
      ambiance: ".",
      effet: "Rend tous les PV et peut rendre un point de magie à chaque aventurier qui en manque.",
      action : "Piochez une carte au hazard dans le pile de carte, si vous tirez plus qu'un 8 alors piochez une carte rencontre"
    }},
    {rest: {
        name: "Dortoirs de Marnie",
        bonus: {
          hp: [25, 30],
          score: [250, 250],
        },
        picture: "dortoirdemarnie.png",
        description: "",
        accroche: ".",
        ambiance: ".",
        effet: "Rend tous les PV et peut rendre un point de magie à chaque aventurier.",
    }},
    {rest: {
        name: "L'Arbre Inversé",
        bonus: {
          hp: [20, 30],
          score: [250, 300],
        },
        picture: "arbreinverse.png",
        description: "Suspendu au plafond comme un ancien dieu végétal, cet arbre émet une lumière apaisante. Ses racines effleurent l’air, vibrant doucement.",
        accroche: "Un souffle chaud émane de l’arbre... comme s’il vous reconnaissait.",
        ambiance: "Mystique & organique.",
        effet: "Soigne les PV et restaure un point d’endurance ou de magie."
      }
    },
    {rest: {
        name: "Sanctuaire baigné de lumière",
        bonus: {
          hp: [30, 30],
          score: [300, 300],
        },
        picture: "lieu4.png",
        description:
          "Un rai de lumière céleste perce les ténèbres pour illuminer un bassin sacré. L’espoir renaît ici.",
        accroche: "On jurerait entendre un chant lointain… ou votre cœur battre à nouveau.",
        ambiance: "Sacré & réconfortant.",
        effet: "Soigne tous les PV, retire tous les effets néfastes, et offre une bénédiction temporaire.",
      },
    },
]
const item = [
  {item: {
    name: "Une Compote de soins",
    picture:'potiondesoins.png',
    description: "Hum ?! ca sent la compote tomate carrotte nan ?",
    utilisation: "Buvez cette potion quand vous voulez pour récupérer 30PV !",
    effect: [{
      stats: {hp:[35,50]}
    }],
    cost:10 // po
  }},
  {item: {
    name: "Épée de Justice",
    picture:'epeedejustice.png',
    description: "De cette épée émane une aura de justice pour tous.",
    utilisation: " Ajoutez 15pts de dégâts quand vous combattez et 15pts supplémentaires contre des groupes. Il y en aura pour tous ! ",
    effect: [{
      attack: {hp:[25,30]},
      stats: {hp:[5,10]}
    }],
    cost:10 // po
  }},
  {item: {
    name: "Anneau de protection contre le mal",
    picture:'anneaudeprotectioncontrelemal.png',
    description: "",
    utilisation: "25pts de protection quand un être maléfique vous fait des dégats",
    effect: [{
      protection: {hp:[25]}
    }],
    cost:10 // po
  }},
  {item: {
    'name': "Épéee à 2 mains",
    'picture':'epee2mains.png',
    'description': "Une épéee à deux de très belle facture",
    effectDescription: "",
    'effect': [{
      'attack': {'hp':[12]}
    }],
    cost:8 // po
  }},
  {item: {
    'name': "Épée longue",
    'picture':'epeelongue.png',
    'description': "Une épée longue de très belle manufacture ! Elle est trop belle !",
    effectDescription: "",
    'effect': [{
      'attack': {'hp':[8]}
    }],
    cost:8 // po
  }},
  {item: {
    'name': "Épée courte",
    'picture':'epeecourte.png',
    'description': "Une épée courte plutôt lambda mais trop sympa. C’est drolement pratique une épée courte !",
    effectDescription: "",
    'effect': [{
      'attack': {'hp':[8]}
    }],
    cost:8 // po
  }},
  {item: {
    'name': "Une belle paire... de dagues.",
    'picture':'unepairesdedagues.png',
    'description': "Une paires de dagues de très bonne qualité",
    effectDescription: "",
    'effect': [{
      'attack': {'hp':[8]}
    }],
    "utilisation":"Une paire de dagues de très bonne qualité. Elles sont deux en plus !",
    cost:8 // po
  }},
  {item: {
    'name': "Arc de feu",
    'picture':'arcdefeu.png',
    'description': "Cet magnifique arc tire de splendide fleches de feu... Forcement !",
    effectDescription: "",
    'effect': [{
      'attack': {'hp':[25]}
    }],
    "utilisation":"Cet arc tire des fleches de feu et ajoute 25pts à vos attaques en plus d'un peu de lumière pour savoir ou va la flêche.",
    cost:55 // po
  }},
  {
    "item": {
      "id": "marteau_force_magique",
      "name": "Marteau de Force Runique",
      "picture": "marteaudeforcerunique.png",
      "type": "arme",
      "rarete": "épique",
      "description": "Forgé dans la pierre enchantée et gravé de runes anciennes, ce marteau libère une onde de choc à chaque impact.",
      "effet": {
        'attack': {'hp':[25]}
      },
      "aura": "Puissance brute & résonance magique.",
      "utilisation": "Ajoute un bonus de dégâts physiques et une chance d’étourdir l’adversaire.",
      "cost": 85
    }
  },
  {
    "item": {
      "id": "baton_de_magicienne_stellaire",
      "name": "Bâton de Magicienne Stellaire",
      "picture": "batondemagiciennestellaire.png",
      "type": "arme",
      "rarete": "épique",
      "description": "Ce bâton d’un bois ancien est orné de cristaux lunaires. Il ralentit la perception du temps autour de la cible.",
      "effet": {
        "ralentissement": {"round": -1}
      },
      "aura": "Sérénité cosmique & distorsion temporelle.",
      "utilisation": "Rend l’ennemi plus lent, lui faisant perdre un tour à chaque engagement magique.",
      "cost": 95
    }
  },  
  {item: {
    "name": "Cristal de soin rayonnant",
    "picture": "cristaldesoinrayonnant.png",
    "element": 'eau',
    "description": "Rend instantanément 50 points de vie et émet une lumière apaisante avant de disparaitre.",
    'once':true,
    "effect": [{
      "stats": { "hp": [50] },
      "status": { "calm": true }
    }],
    cost:20 // po
  }},
  {"item": {
      "id": "monocle_de_lucidite_hobbit",
      "name": "Monocle de Lucidité Hobbit",
      "picture": "monocledeluciditehobbit.png",
      "element": 'eau',
      "description": "Un monocle délicatement enchâssé dans une monture d’argent fin. Utilisé par les hobbits érudits pour anticiper les mouvements ennemis.",
      "effet": {
        "stats": { "hand": 1 },
      },
      "aura": "Sobre & perspicace.",
      "utilisation": "Permet de garder une carte supplémentaire en main pendant les combats.",
      "valeur": 45
    }
  },
  {item: {
    'id': "monocle_de_lucidite_hobbit",
    "name": "Monocle de Lucidité Hobbit",
    "picture": "monocledeluciditehobbit.jpg",
    "element": 'eau',
    "description": "Permet de voir plus net. Le joueur se soigne à chaque fin de combat !",
    "utilisation": "le porteur récupère 5pts de vie à chaque fin de combat même si il est en négatif.",
    "effect": [{
      "stats": { "hp": 5, "neg":true },
    }],
    cost:25 // po
  }},
  {"item": {
      "id": "binocle_de_lucidite_hobbit",
      "name": "Binocle de Lucidité Hobbit",
      "picture": "binocledeluciditehobbit.png",
      "type": "accessoire",
      "rarete": "rare",
      "description": "Petit mais précieux, ce binocle finement ciselé aiguise l’esprit et permet d’analyser les situations avec clarté.",
      "effet": {
        "stats": { "hand": 2 },
      },
      "aura": "Clarté & stratégie.",
      "utilisation": "Augmente de 2 la taille maximale de la main en combat, offrant plus de choix tactiques. (l’effet ne se cumule pas)",
      "cost": 48
    }
  },
  {"item": {
      "id": "bouclier_elfique_de_l_aube",
      "name": "Bouclier Elfique de l’Aube",
      "picture": "bouclierelfiquedelaube.png",
      "type": "bouclier",
      "rarete": "rare",
      "description": "Ce bouclier léger, forgé par les elfes solaires, brille d’une lueur douce qui repousse les créatures des ténèbres.",
      "effet": {
        "defense": 10,
        "protection_creatures_nuit": true,
        "charisme": +1
      },
      "aura": "Lumière douce & présence apaisante.",
      "utilisation": "Réduit de moitié les dégâts infligés par les créatures de type 'nocturne' ou 'sombres'.",
      "cost": 60
    }
  },
  {item: {
    id: "bouclier_de_rebond_magique",
    "name": "Bouclier de rebond magique",
    "picture": "bouclierderebondmagique.png",
    "element": 'terre',
    "description": "Renvoie 50% des dégâts vers l'attaquant.",
    "effect": [{
      "reflect": { "hp": [0.5] },
      "protection": { "hp": [20] }
    }],
    "utilisation": "Renvoie 50% des dégâts vers l'attaquant.",
    cost:35 // po
  }},
  {
    item: {
      id: "armure_elfique_lumineuse",
      name: "Armure Elfique Lumineuse",
      picture: "armureelfique.png",
      "element": 'air',
      type: "armure",
      rarete: "épique",
      description: "Forgée par les anciens elfes des bois, cette armure légère et souple renforce les réflexes de celui qui la porte tout en diffusant une lumière douce en fin de journée.",
      effet: {
        "reflect": { "magic": 0.5 },
        "protection": { "magic": [20] }
      },
      aura: "Élégante & protectrice.",
      utilisation: "Tant que vous avez l’armure: vous avez une attaque gratuite sans le droit de défausser en début de combat et vous récupérez 5 PV à la fin",
      cost: 75
    }
  },
  {
    "item": {
      "id": "gants_magiques_de_mailles",
      "name": "Gants Magiques de Mailles",
      "picture": "gantsmagiques.png",
      "element": 'air',
      "type": "gants",
      "rarete": "rare",
      "description": "Conçus à partir de mailles enchantées, ces gants brillent d’une lueur protectrice et confèrent à leur porteur une précision surnaturelle.",
      "effet": {
        "sorts_renvoyes": "10%"
      },
      "aura": "Tactique & luminescente.",
      "utilisation": "Vous piochez le double de carte pour en choisir une à chaque pioche.",
      "cost": 42
    }
  },
  {
    "item": {
      "id": "chapeau_magicien_magique",
      "name": "Chapeau du Magicien Oublié",
      "picture": "chapeaudemagicien.png",
      "element": 'air',
      "type": "tête",
      "rarete": "rare",
      "description": "Ce couvre-chef enchanteur appartenait à un mage qui perdait souvent ses cartes... mais jamais ses sorts. Il autorise une action de défausse supplémentaire en combat.",
      "effet": {
        "stats": { "hand": 1 },
      },
      "aura": "Excentrique & érudit.",
      "utilisation": "Permet de défausser une carte de plus lors d’un affrontement (6 max au lieu de 5).",
      "cost": 58
    }
  },
  {
    "item": {
      "id": "chapeau_de_magicienne_lunaire",
      "name": "Chapeau de Magicienne Lunaire",
      "picture": "chapeaudemagiciennelunaire.png",
      "type": "tête",
      "rarete": "épique",
      "description": "Ce chapeau à large bord, orné de broderies astrales, canalise l'énergie de la lune. Il amplifie la concentration et la capacité à manipuler les arcanes.",
      "effet": {
        "protection": { "hp": [20] },
        "stats": { "defausse": 1 }
      },
      "aura": "Mystique & élégante.",
      "utilisation": "Permet de défausser une carte de plus lors d’un affrontement (6 max au lieu de 5).",
      "cost": 72
    }
  }
]
const other = [
  {other: {
      name: 'Covers',
      picture: 'decknuit.png',
      description: "Les Covers",
      accroche: '',
    }
  },
  {other: {
      name: 'Covers',
      picture: 'decknuit2.png',
      description: "Les Covers",
      accroche: '',
    }
  },
  {other: {
      name: 'Pin-Up',
      picture: 'pinup.png',
      description: "Les RPG Pin-Up",
      accroche: '',
    }
  },
  {other: {
      name: 'Pin-Up',
      picture: 'pinup1.png',
      description: "Les RPG Pin-Up",
      accroche: '',
    }
  },
  {other: {
      name: 'Pin-Up',
      picture: 'pinup2.png',
      description: "Les RPG Pin-Up",
      accroche: '',
    }
  },
  {other: {
      name: 'Pin-Up',
      picture: 'rpgcards.png',
      description: "Les RPG Pin-Up",
      accroche: '',
    }
  },
  {other: {
      name: 'Covers',
      picture: 'rpgcards4.png',
      description: "Les Covers",
      accroche: '',
    }
  },
  {other: {
      name: 'Elements',
      picture: 'Elements.png',
      description: "Les Elements",
      accroche: '',
    }
  },
  {other: {
    name: 'Rest',
    picture: 'vierge.png',
    description: "Les cartes 'Lieu'",
    effet: "effet",
    accroche: '',
  }},
  {other: {
      name: '',
      picture: 'rpgcardschampi.png',
      description: "Les cartes 'Encounter'",
      effet: "",
      accroche: "",
    }
  },
];

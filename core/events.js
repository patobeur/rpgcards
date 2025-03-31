  // let imageFolder = "png/";
  let imageFolder = "webp/";
  let imageExt = ".webp";
  let listeDesEvenements = [
    {
      rest: {
        hp: [5, 20], // points de vie récupéres
        name: 'vous vous-reposez dans un coin tranquille !',
        description: "un lieu agréable",
        picture: 'rest_0.webp'
      }
    },
    {fight:{
      hp:130,
      name: 'Ursule, le Minotaure',
      picture: 'opp_0.webp',
      description: "Ancien gardien d’un labyrinthe oublié, Ursule erre désormais sans maître ni raison. Mais son instinct frappe toujours juste.",
      style: "Il charge soudainement, brisant toute stratégie en un souffle. Sa rage est ancienne, brute et sauvage.",
      faiblesse: "Les illusions ou les attaques à distance le rendent confus, le forçant à ralentir.",
      aura: "Féroce & imprévisible.",
      round: 3,
      dps: [3,6],
      gold: 6
    }},
    {fight:{
      hp:110,
      name: 'Les Gombis Zobelins',
      picture: 'opp_1.webp',
      description: "Ils étaient déjà bêtes vivants. Morts, ils sont juste... plus nombreux. Et tout aussi imprévisibles.",
      style: "Ils attaquent en désordre, parfois en groupe, parfois un seul. Certains tombent tout seuls. Mais d’autres mordent très fort.",
      faiblesse: "La lumière vive et les bruits soudains les désorientent, les faisant trébucher les uns sur les autres.",
      aura: "Chaotique & déglinguée.",
      round: 2,
      dps: [1,6], // variable selon combien attaquent en même temps
      gold: 4
    }},
    {
      rest: {
        hp: [15, 20], // points de vie récupéres
        name: 'vous vous-reposez dans un coin tranquille !',
        description: "un lieu agréable",
        picture: 'rest_1.webp'
      }
    },
    {fight:{
      hp:150,
      name: 'Le shaman Patchit Anuk (feu et froid)',
      picture: 'opp_2.webp',
      description: "Petit mais redoutable, Patchit Anuk canalise à la fois le feu destructeur et le froid mordant. Son regard est celui d’un esprit en équilibre précaire.",
      style: "Il alterne des souffles de givre qui figent, et des jets de flammes qui consument. Son rythme est imprévisible, son esprit instable.",
      faiblesse: "Le silence total ou les champs magiques harmonieux le déstabilisent.",
      aura: "Élémentaire & instable.",
      round: 4,
      dps: [3,6],
      gold: 8
    }},
    {fight:{
      hp:150,
      name: 'Geondon, le Golem de Lave',
      picture: 'opp_3.webp',
      description: "Forgé dans les entrailles d’un volcan oublié, Geondon est plus montagne que monstre. Il avance lentement… mais rien ne l’arrête.",
      style: "Ses coups sont rares mais dévastateurs. À chaque impact, le sol se fissure, et la chaleur devient insupportable.",
      faiblesse: "Son cœur de lave est instable : le geler ou le faire douter le fragilise.",
      aura: "Tellurique & écrasante.",
      round: 4,
      dps: [3,6],
      gold: 8
    }},
    {
      rest: {
        hp: [15, 20], // points de vie récupéres
        name: 'vous vous-reposez dans un coin tranquille !',
        description: "un lieu agréable",
        picture: 'rest_1.webp'
      }
    },
    {
      fight: {
        hp: 80,
        name: 'Portegueule de braise',
        picture: 'opp_4.webp',
        description: "Créature de caverne, née de la cendre d’un ancien dragon. Il gronde sans bruit.",
        style: "Attaque rapide, souffle brûlant par vagues. Il ne laisse pas de répit.",
        faiblesse: "Le froid extrême ralentit sa furie.",
        aura: "Instable & flamboyante.",
        round: 2,
        dps: [2, 5],
        gold: 4
      }
    },
    {
      fight: {
        hp: 100,
        name: 'Incendiaire spectral',
        picture: 'opp_5.webp',
        description: "Il n’a plus de peau, seulement des cendres qui tombent en silence. Jadis homme, désormais hantise de tout ce qui brûle mal. Son regard ne juge pas. Il consume.",
        style: "Chaque attaque laisse une brûlure persistante. Il frappe sans hâte, mais chaque coup semble résonner dans les os. Il aime que ça dure.",
        faiblesse: "L’eau pure ou les émotions sincères peuvent troubler sa concentration incandescente.",
        aura: "Chaotique & douloureuse.",
        round: 3, // attaque tous les 3 round
        dps: [0, 3], // degats
        gold: 5, // gain
      }
    },
    {fight:{
      hp:120,
      name: 'La Veuve-Tisseuse',
      picture: 'opp_6.webp',
      description: "Elle ne tue pas. Elle attend. Et lentement, vous vous effacez.",
      style: "Ses fils ralentissent le temps autour d’elle. Plus on lutte, plus on se prend les pieds dans l’invisible.",
      faiblesse: "L’élan, la vitesse, la clarté. Un coup franc peut déchirer sa toile.",
      aura: "Silencieuse & oppressante.",
      round:5,
      dps: [0,2],
      gold: 7
    }},
    {
      rest: {
        hp: [25, 30], // points de vie récupéres
        name: 'vous vous-reposez dans un coin tranquille !',
        description: "un lieu agréable",
        picture: 'rest_3.webp'
      }
    },
    {
      fight: {
        hp: 90,
        name: 'Épine-Cœur',
        picture: 'opp_6b.webp',
        description: "Née dans les profondeurs d’une forêt qui n’existe plus, elle se nourrit d’émotions perdues.",
        style: "Ralentie, hypnotique — chaque tour est une danse fatale.",
        faiblesse: "Les sons clairs ou les éclats de vérité peuvent fendre sa carapace.",
        aura: "Troublante & végétale.",
        round: 4, // attaque tous les 4 rounds
        dps: [1, 4],
        gold: 6
      }
    },
    {
      fight: {
        hp: 90,
        name: 'Sorcier',
        picture: 'opp_7.webp',
        description: "Née dans les profondeurs d’une forêt qui n’existe plus, elle se nourrit d’émotions perdues.",
        style: "Ralentie, hypnotique — chaque tour est une danse fatale.",
        faiblesse: "Les sons clairs ou les éclats de vérité peuvent fendre sa carapace.",
        aura: "Troublante & végétale.",
        round: 4, // attaque tous les 4 rounds
        dps: [1, 4],
        gold: 6
      }
    },
    {
      fight: {
        hp: 85,
        name: 'Silrik, le Voleur Dépouillé',
        picture: 'opp_8.webp',
        description: "Il vous accuse d’avoir pris ce qui lui revient. Il n’a plus de patience. Juste une dague et une rancune tenace.",
        style: "Rapide, agressif, imprévisible. Il frappe sans prévenir, se faufile, disparaît, puis revient avec plus de colère encore.",
        faiblesse: "Les lumières vives et les pièges qu’il n’a pas posés lui-même le rendent nerveux.",
        aura: "Nerveuse & revancharde.",
        round: 2,
        dps: [2, 4],
        gold: 3
      }
    },
    {
      fight: {
        hp: 90,
        name: 'Larmel, Esprit de l’Adversaire Tombé',
        picture: 'opp_12.webp',
        description: "Ce n’est pas lui. C’est un souvenir de lui. Un écho d’un combat que vous n’avez pas fini.",
        style: "Attaques répétitives et calmes, comme une pluie fine. Il ne parle pas. Il revient.",
        faiblesse: "Les noms. Prononcez le sien, et il tremble.",
        aura: "Fantomatique & persistante.",
        round: 2,
        dps: [1, 3],
        gold: 5
      }
    },

    {
      win: true
    }
  ];
# 🎮 RPG-CARDS

## ⚙️ Objectif du projet

**RPG-CARDS** est un **jeu de cartes tactique** au tour par tour mêlant **jeu de rôle (RPG)** et **deck-building**. Le joueur affronte une série d’ennemis à l’aide de cartes aux effets variés (attaque, défense, soins, buffs...), avec une interface interactive et des mécaniques de stratégie simples mais efficaces.

---

## 🧩 Structure générale

### `index.html`

Structure principale de l’interface :

- `#score` : état du jeu ou informations de progression.
- `#enemy` : panneau d’affichage des **informations de l’ennemi** (nom, PV, round, description, style, aura, faiblesse).
- `#playerCards` : zone d’affichage des **cartes en main** du joueur.
- `#buttons` : contient les boutons d’action :
  - `Attaquer`
  - `Défausser`
- `#deck` et `#discardPile` : affiche le **nombre de cartes restantes** dans le deck et dans la pile de défausse.
- `#game-messages` : zone d'affichage des messages et événements du jeu.

---

## 📁 Scripts JavaScript

### Modules inclus :

- **`cartes.js`** : définit les **types de cartes** disponibles (effets, styles, caractéristiques générales).
- **`player.js`** : contient les **cartes du joueur**, sa main, le deck et la pile de défausse.
- **`enemys.js`** : liste les **ennemis à affronter**, avec leurs caractéristiques (nom, HP, style, aura, faiblesse…).
- **`front.js`** : gère **l’affichage dynamique du jeu**, met à jour le DOM en fonction des actions.
- **`events.js`** : capture les **événements utilisateur** (clics sur cartes, boutons, éléments ennemis).
- **`main.js`** : gère la **logique centrale** du jeu :
  - déroulement des tours
  - interaction entre les cartes et les ennemis
  - progression de la partie

---

## 📦 Détails des fonctionnalités

### 🎴 `cartes.js`

- Définit la structure des cartes.
- Chaque carte possède :
  - un **nom**
  - un **type d’effet** (attaque, défense, soin…)
  - des **valeurs** numériques
  - un **style**, une **aura**, ou des conditions spéciales

### 🧑‍🎤 `player.js`

Ce fichier contient un **objet `player`** qui représente l’état du joueur au fil du jeu. Il ne gère **ni le deck**, **ni la main**, mais uniquement les **statistiques générales** :

- **Propriétés** :
  - `score` : score total accumulé
  - `currentStep` : étape actuelle du jeu
  - `hp` : points de vie du joueur
  - `turns` : nombre de coups joués
  - `round` : round en cours

- **Méthodes** :
  - `reset()` : réinitialise toutes les valeurs du joueur (score, HP, round, etc.)
  - `refreshScoreDiv()` : met à jour dynamiquement l’affichage des statistiques du joueur (`#score`)

### 👾 `enemys.js`

Ce fichier contient un **objet `enemys`**, responsable de la gestion de l’ennemi actuel :

- **Propriétés** :
  - `currentEnemy` : objet représentant l’ennemi en cours (avec `name`, `hp`, `description`, `style`, etc.)
  - `currentRound` : numéro du round de l’ennemi

- **Méthodes** :
  - `reset()` : réinitialise l’état de l’ennemi
  - `set(fight)` : définit un nouvel ennemi à partir d’un objet `fight` (issu de la liste des ennemis)
  - `updateEnemyHP()` : met à jour dynamiquement les PV affichés
  - `displayInfo()` : remplit toutes les zones d’information sur l’ennemi dans l’interface (`name`, `description`, `style`, `aura`, `faiblesse`, image, etc.)

### 💡 `front.js`

- Affiche dynamiquement :
  - les cartes du joueur
  - l’état de l’ennemi
  - les compteurs de deck et défausse
- Révèle progressivement les **caractéristiques cachées** de l’ennemi (via clic sur des icônes)

### 🎮 `events.js`

- Gère les **interactions utilisateur** :
  - liste des étapes de l'aventure
  - liste des objets disponibles pendant l'aventure
  - toutes les infos sur les ennemies, les repos, les arrets au marchand, les arrets au marchand,

### 🧠 `main.js`

- Contrôle le **déroulement global du jeu** :
  - Initialisation de la partie
  - Gestion des tours
  - Calcul des dégâts ou effets selon les cartes jouées
  - Passage automatique à l’étape suivante après un/une enemie vaincu

---

## ✨ Fonctionnalités clés

- ⚔️ **Combats contre des ennemis uniques**, chacun ayant :
  - des **caractéristiques** (aura, faiblesse, style…)
  - une **progression par round**
- 🃏 **Système de deck** :
  - des combinaisons de cartes avec effets offensifs, défensifs ou contextuels
  - interaction avec les styles/faiblesses ennemis pour infliger plus de dégâts ou moins :/
- 🔁 **Tour par tour** : le joueur joue une fois par tour.
- 🔄 Possibilité de **défausser jusqu'à 5 cartes** pour la remplacer.
- 🎯 **Stratégie** basée sur la combinaison carte/style/faiblesse.
- 📊 Interface évolutive, feedback en direct, système de messages.
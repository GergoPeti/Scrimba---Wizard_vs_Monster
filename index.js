'use strict';

const heroWizard = {
  elementId: 'hero',
  name: 'Wizard',
  avatar: 'images/wizard.png',
  health: 60,
  diceScore: 6,
};

const monsterOrc = {
  elementId: 'monster',
  name: 'Orc',
  avatar: 'images/orc.png',
  health: 10,
  diceScore: 4,
};

const renderCharacter = function (elementId, name, avatar, health, diceScore) {
  return (document.getElementById(
    `${elementId}`
  ).innerHTML = `<div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src=${avatar}/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container"><div class="dice"> ${diceScore} </div></div>
    </div>`);
};

renderCharacter(
  heroWizard.elementId,
  heroWizard.name,
  heroWizard.avatar,
  heroWizard.health,
  heroWizard.diceScore
);
renderCharacter(
  monsterOrc.elementId,
  monsterOrc.name,
  monsterOrc.avatar,
  monsterOrc.health,
  monsterOrc.diceScore
);

// document.getElementById("hero").innerHTML =
//     `<div class="character-card">
//         <h4 class="name"> Wizard </h4>
//         <img class="avatar" src="images/wizard.png"/>
//         <p class="health">health: <b> 60 </b></p>
//         <div class="dice-container"><div class="dice"> 6 </div></div>
//     </div>`;

// document.getElementById("monster").innerHTML =
//     `<div class="character-card">
//         <h4 class="name"> Orc </h4>
//         <img class="avatar" src="images/orc.png"/>
//         <p class="health">health: <b> 10 </b></p>
//         <div class="dice-container"><div class="dice"> 4 </div></div>
//     </div>`;

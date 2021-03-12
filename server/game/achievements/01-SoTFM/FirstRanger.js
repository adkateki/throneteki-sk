const Achievement = require('../../achievement.js');

class FirstRanger extends Achievement {
     check(){
        return this.owner.faction.name === "The Night's Watch" && this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='The Wall').length==0;
     }
}

FirstRanger.code='00013';
module.exports = FirstRanger;

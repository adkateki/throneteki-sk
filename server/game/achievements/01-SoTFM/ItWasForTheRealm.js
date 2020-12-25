const Achievement = require('../../achievement.js');

class ItWasForTheRealm extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='Varys').length==3;
     }
}

ItWasForTheRealm.code='00005';
module.exports = ItWasForTheRealm;

const Achievement = require('../../achievement.js');

class AllSinnersAreEqualBeforeTheGods extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='The High Sparrow').length>=1;
     }
}

AllSinnersAreEqualBeforeTheGods.code='00003';
module.exports = AllSinnersAreEqualBeforeTheGods;

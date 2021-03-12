const Achievement = require('../../achievement.js');

class BattleOfBlackwaterBay extends Achievement {
     check(){
        return this.owner.faction.name==="House Lannister" && this.owner.game.getOpponents(this.owner).some(opponent => opponent.faction.name==="House Baratheon");
     }
}

BattleOfBlackwaterBay.code='00030';
module.exports = BattleOfBlackwaterBay;

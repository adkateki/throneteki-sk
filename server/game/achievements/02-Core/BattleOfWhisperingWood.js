const Achievement = require('../../achievement.js');

class BattleOfWhisperingWood extends Achievement {
     check(){
        return this.owner.faction.name==="House Stark" && this.owner.game.getOpponents(this.owner).some(opponent => opponent.faction.name==="House Lannister");
     }
}

BattleOfWhisperingWood.code='00029';
module.exports = BattleOfWhisperingWood;

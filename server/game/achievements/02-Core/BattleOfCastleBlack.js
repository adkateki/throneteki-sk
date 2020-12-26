const Achievement = require('../../achievement.js');

class BattleOfCastleBlack extends Achievement {
     check(){
        return this.owner.faction.name==="The Night's Watch" && this.owner.game.getOpponents(this.owner).some(opponent => opponent.agenda.name==="The Free Folk");
     }
}

BattleOfCastleBlack.code='00034';
module.exports = BattleOfCastleBlack;

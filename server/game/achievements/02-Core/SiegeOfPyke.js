const Achievement = require('../../achievement.js');

class SiegeOfPyke extends Achievement {
     check(){
        return this.owner.faction.name==="House Baratheon" && this.owner.game.getOpponents(this.owner).some(opponent => opponent.faction.name==="House Greyjoy");
     }
}

SiegeOfPyke.code='00031';
module.exports = SiegeOfPyke;

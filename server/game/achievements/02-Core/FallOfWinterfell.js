const Achievement = require('../../achievement.js');

class FallOfWinterfell extends Achievement {
     check(){
        return this.owner.faction.name==="House Greyjoy" && this.owner.game.getOpponents(this.owner).some(opponent => opponent.faction.name==="House Stark");
     }
}

FallOfWinterfell.code='00032';
module.exports = FallOfWinterfell;

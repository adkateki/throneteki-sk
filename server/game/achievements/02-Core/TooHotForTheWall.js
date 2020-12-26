const Achievement = require('../../achievement.js');

class TooHotForTheWall extends Achievement {
     check(){
        return this.owner.faction.name==="House Martell" && this.owner.game.getOpponents(this.owner).some(opponent => opponent.faction.name==="The Night's Watch");
     }
}

TooHotForTheWall.code='00036';
module.exports = TooHotForTheWall;

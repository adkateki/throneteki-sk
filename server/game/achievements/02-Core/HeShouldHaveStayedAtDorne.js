const Achievement = require('../../achievement.js');

class HeShouldHaveStayedAtDorne extends Achievement {
     check(){
        return this.owner.faction.name==="House Targaryen" && this.owner.game.getOpponents(this.owner).some(opponent => opponent.faction.name==="House Martell");
     }
}

HeShouldHaveStayedAtDorne.code='00033';
module.exports = HeShouldHaveStayedAtDorne;

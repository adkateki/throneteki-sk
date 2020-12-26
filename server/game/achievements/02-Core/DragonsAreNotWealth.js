const Achievement = require('../../achievement.js');

class DragonsAreNotWealth extends Achievement {
     check(){
        return this.owner.faction.name==="House Tyrell" && this.owner.game.getOpponents(this.owner).some(opponent => opponent.faction.name==="House Targaryen");
     }
}

DragonsAreNotWealth.code='00035';
module.exports = DragonsAreNotWealth;

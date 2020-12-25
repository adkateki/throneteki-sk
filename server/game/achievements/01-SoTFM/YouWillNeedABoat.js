const Achievement = require('../../achievement.js');

class YouWillNeedABoat extends Achievement {
     check(){
        return this.owner.faction.name=="House Baratheon" &&this.owner.game.allCards.filter(card => card.owner === this.owner && card.hasTrait('Smuggler')).length>=10;
     }
}

YouWillNeedABoat.code='00016';
module.exports = YouWillNeedABoat;

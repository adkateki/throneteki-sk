const Achievement = require('../../achievement.js');

class GodsgriefBaker extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='Hot Pie').length>=1;
     }
}

GodsgriefBaker.code='00002';
module.exports = GodsgriefBaker;

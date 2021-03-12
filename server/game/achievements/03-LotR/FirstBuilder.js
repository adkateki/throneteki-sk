const Achievement = require('../../achievement.js');

class FirstBuilder extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.getType() === 'character')>0 && this.owner.game.allCards.filter(card => card.owner === this.owner && card.getType() === 'character' && !card.hasTrait('Builder')).length==0;
     }
}

FirstBuilder.code='00042';
module.exports = FirstBuilder;

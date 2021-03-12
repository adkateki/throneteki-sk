const Achievement = require('../../achievement.js');

class TheRealKingOfTheCastle extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='Balerion').length>=1;
     }
}

TheRealKingOfTheCastle.code='00004';
module.exports = TheRealKingOfTheCastle;

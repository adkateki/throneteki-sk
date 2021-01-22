const Achievement = require('../../achievement.js');

class TheQueenOfThorns extends Achievement {
     check(){
        return this.countNumberOfCardsOf("The Queen of Thorns").length===3;
     }
     countNumberOfCardsOf(cardName){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name===cardName);
     }
}

TheQueenOfThorns.code='00043';
module.exports = TheQueenOfThorns;

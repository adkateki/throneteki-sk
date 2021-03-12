const Achievement = require('../../achievement.js');

class TheBleedingStar extends Achievement {
     check(){
        return this.countNumberOfCardsOf("The Dragon's Tail").length===3;
     }
     countNumberOfCardsOf(cardName){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name===cardName);
     }
}

TheBleedingStar.code='00052';
module.exports = TheBleedingStar;

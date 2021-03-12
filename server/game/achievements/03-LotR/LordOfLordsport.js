const Achievement = require('../../achievement.js');

class HeadOfHouseBotley extends Achievement {
     check(){
        return this.countNumberOfCardsOf("Lordsport").length===3;
     }
     countNumberOfCardsOf(cardName){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name===cardName);
     }
}

HeadOfHouseBotley.code='00045';
module.exports = HeadOfHouseBotley;

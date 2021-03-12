const Achievement = require('../../achievement.js');

class LordOfTheRainwood extends Achievement {
     check(){
        return this.countNumberOfCardsOf("Ser Davos Seaworth").length===3 && this.countNumberOfCardsOf("Stannis Baratheon").length===3;
     }
     countNumberOfCardsOf(cardName){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name===cardName);
     }
}

LordOfTheRainwood.code='00039';
module.exports = LordOfTheRainwood;

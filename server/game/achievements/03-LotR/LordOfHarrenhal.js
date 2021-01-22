const Achievement = require('../../achievement.js');

class LordOfHarrenhal extends Achievement {
     check(){
        return this.countNumberOfCardsOf("Harrenhal").length>=1 && ( this.countNumberOfCardsOf("Littlefinger").length>=1 ||
                                                               this.countNumberOfCardsOf("Janos Slynt").length>=1 ||
                                                               this.countNumberOfCardsOf("Roose Bolton").length>=1 ||
                          				       this.countNumberOfCardsOf("Vargo Hoat").length>=1 );
     }
     countNumberOfCardsOf(cardName){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name===cardName);
     }
}

LordOfHarrenhal.code='00055';
module.exports = LordOfHarrenhal;

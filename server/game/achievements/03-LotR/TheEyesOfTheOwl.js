const Achievement = require('../../achievement.js');

class TheEyesOfTheOwl extends Achievement {
     check(){
        return this.countNumberOfCardsOf("Mya Stone").length>=1;
     }
     countNumberOfCardsOf(cardName){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name===cardName);
     }
}

TheEyesOfTheOwl.code='00047';
module.exports = TheEyesOfTheOwl;

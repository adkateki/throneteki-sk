const Achievement = require('../../achievement.js');

class Athmithrar extends Achievement {
     check(){
        return this.countNumberOfCardsOf("The Horse Gate").length===3;
     }
     countNumberOfCardsOf(cardName){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name===cardName);
     }
}

Athmithrar.code='00044';
module.exports = Athmithrar;

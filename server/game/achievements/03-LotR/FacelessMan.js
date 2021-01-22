const Achievement = require('../../achievement.js');

class FacelessMan extends Achievement {
     check(){
        return this.countNumberOfCardsOf("Faceless Man").length===3;
     }
     countNumberOfCardsOf(cardName){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name===cardName);
     }
}

FacelessMan.code='00049';
module.exports = FacelessMan;

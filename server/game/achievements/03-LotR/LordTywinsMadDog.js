const Achievement = require('../../achievement.js');

class LordTywinsMadDog extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.code==='14027').length===3;
     }
}

LordTywinsMadDog.code='00041';
module.exports = LordTywinsMadDog;

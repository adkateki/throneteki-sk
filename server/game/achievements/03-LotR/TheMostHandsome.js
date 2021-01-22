const Achievement = require('../../achievement.js');

class TheMostHandsome extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.code==='14004').length===3;
     }
}

TheMostHandsome.code='00057';
module.exports = TheMostHandsome;

const Achievement = require('../../achievement.js');

class TheLordOfHighgarden extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='Highgarden').length==3;
     }
}

TheLordOfHighgarden.code='00019';
module.exports = TheLordOfHighgarden;

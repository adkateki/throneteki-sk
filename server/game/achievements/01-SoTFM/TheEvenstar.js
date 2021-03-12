const Achievement = require('../../achievement.js');

class TheEvenstar extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name === 'The Evenstar').length==3;
     }
}

TheEvenstar.code='00007';
module.exports = TheEvenstar;

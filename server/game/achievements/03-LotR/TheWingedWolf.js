const Achievement = require('../../achievement.js');

class TheWingedWolf extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.code==='06081').length===3;
     }
}

TheWingedWolf.code='00059';
module.exports = TheWingedWolf;

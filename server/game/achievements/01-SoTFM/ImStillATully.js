const Achievement = require('../../achievement.js');

class ImStillATully extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='The Blackfish').length==3;
     }
}

ImStillATully.code='00017';
module.exports = ImStillATully;

const Achievement = require('../../achievement.js');

class TheyFollowTheMan extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='Mance Rayder').length==3;
     }
}

TheyFollowTheMan.code='00009';
module.exports = TheyFollowTheMan;

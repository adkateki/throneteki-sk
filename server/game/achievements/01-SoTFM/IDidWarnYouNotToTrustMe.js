const Achievement = require('../../achievement.js');

class IDidWarnYouNotToTrustMe extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='Littlefinger').length>=1;
     }
}

IDidWarnYouNotToTrustMe.code='00006';
module.exports = IDidWarnYouNotToTrustMe;

const Achievement = require('../../achievement.js');

class SixTimesIsTooMany extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='Littlefinger').length==3;
     }
}

SixTimesIsTooMany.code='00008';
module.exports = SixTimesIsTooMany;

const Achievement = require('../../achievement.js');

class BringMeHisHead extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.name==='Joffrey Baratheon').length==3;
     }
}

BringMeHisHead.code='00014';
module.exports = BringMeHisHead;

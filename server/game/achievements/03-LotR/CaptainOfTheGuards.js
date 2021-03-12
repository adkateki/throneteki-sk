const Achievement = require('../../achievement.js');

class CaptainOfTheGuards extends Achievement {
     check(){
        return this.owner.game.allCards.filter(card => card.owner === this.owner && card.hasTrait('Guard')).length>=10;
     }
}

CaptainOfTheGuards.code='00040';
module.exports = CaptainOfTheGuards;

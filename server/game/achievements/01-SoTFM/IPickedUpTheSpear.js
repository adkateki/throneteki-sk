const Achievement = require('../../achievement.js');
const logger = require('../../../log');

class IPickedUpTheSpear extends Achievement {
     check(){
        return this.owner.faction.name==='House Martell' && this.owner.game.round < 5;
     }
}

IPickedUpTheSpear.code='00015';
module.exports = IPickedUpTheSpear;

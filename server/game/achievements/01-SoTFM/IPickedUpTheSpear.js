const Achievement = require('../../achievement.js');
const logger = require('../../../log');

class TheEvenstar extends Achievement {
     check(){
        logger.info('round'+this.owner.game.round);
        return this.owner.faction.name==='House Martell' && this.owner.game.round < 5;
     }
}

TheEvenstar.code='00015';
module.exports = TheEvenstar;

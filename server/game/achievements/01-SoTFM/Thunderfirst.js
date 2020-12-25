const Achievement = require('../../achievement.js');
const logger = require('../../../log');

class TheEvenstar extends Achievement {
     check(){
        return this.owner.plotDeck.filter(plot=>plot.getClaim()==1).length>=5 && this.owner.agenda.name === 'The Free Folk';
     }
}

TheEvenstar.code='00012';
module.exports = TheEvenstar;

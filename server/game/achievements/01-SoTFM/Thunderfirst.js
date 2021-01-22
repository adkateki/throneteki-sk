const Achievement = require('../../achievement.js');
const logger = require('../../../log');

class Thunderfirst extends Achievement {
     check(){
        return this.owner.plotDeck.filter(plot=>plot.getClaim()==1).length>=5 && this.owner.agenda && this.owner.agenda.name === 'The Free Folk';
     }
}

Thunderfirst.code='00012';
module.exports = Thunderfirst;

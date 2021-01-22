const Achievement = require('../../achievement.js');
const logger = require('../../../log');

class Homelander extends Achievement {
     check(){
        return this.owner.plotDeck.filter(plot=>plot.hasTrait('Kingdom')).length>=6;
     }
}

Homelander.code='00050';
module.exports = Homelander;

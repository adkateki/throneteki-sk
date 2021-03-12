const Achievement = require('../../achievement.js');
const logger = require('../../../log');
class TheLionStillHasClaws extends Achievement {
     check(){
        return this.owner.agenda && this.owner.agenda.name==="\"The Rains of Castamere\""; 
     }
}

TheLionStillHasClaws.code='00010';
module.exports = TheLionStillHasClaws;



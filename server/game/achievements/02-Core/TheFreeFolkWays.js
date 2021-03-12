const Achievement = require('../../achievement.js');

class TheFreeFolkWays extends Achievement {
     check(){
        return this.owner.agenda && this.owner.agenda.name==="The Free Folk";
     }
}

TheFreeFolkWays.code='00037';
module.exports = TheFreeFolkWays;

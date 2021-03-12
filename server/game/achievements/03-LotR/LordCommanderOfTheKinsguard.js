const Achievement = require('../../achievement.js');

class LordCommanderOfTheKingsguard extends Achievement {
     check(){
        return this.owner.agenda && this.owner.agenda.name==="The White Book"; 
     }
     
}

LordCommanderOfTheKingsguard.code='00051';
module.exports = LordCommanderOfTheKingsguard;

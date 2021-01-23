const Achievement = require('../../achievement.js');

class WinterIsComing extends Achievement {
     check(){
        return this.owner.faction.name==="House Stark" && this.owner.agenda && this.owner.agenda.name !== "The Free Folk";
     }
}

WinterIsComing.code='00021';
module.exports = WinterIsComing;

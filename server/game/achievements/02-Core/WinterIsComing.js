const Achievement = require('../../achievement.js');

class WinterIsComing extends Achievement {
     check(){
        return this.owner.faction.name==="House Stark";
     }
}

WinterIsComing.code='00021';
module.exports = WinterIsComing;

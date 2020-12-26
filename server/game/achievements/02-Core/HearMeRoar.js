const Achievement = require('../../achievement.js');

class HearMeRoar extends Achievement {
     check(){
        return this.owner.faction.name==="House Lannister";
     }
}

HearMeRoar.code='00022';
module.exports = HearMeRoar;

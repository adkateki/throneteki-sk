const Achievement = require('../../achievement.js');

class HearMeRoar extends Achievement {
     check(){
        return this.owner.faction.name==="House Lannister" && this.owner.agenda && this.owner.agenda.name !== "The Free Folk";;
     }
}

HearMeRoar.code='00022';
module.exports = HearMeRoar;

const Achievement = require('../../achievement.js');

class OursIsTheFury extends Achievement {
     check(){
        return this.owner.faction.name==="House Baratheon" && this.owner.agenda && this.owner.agenda.name !== "The Free Folk";;
     }
}

OursIsTheFury.code='00024';
module.exports = OursIsTheFury;

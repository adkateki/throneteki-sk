const Achievement = require('../../achievement.js');

class OursIsTheFury extends Achievement {
     check(){
        return this.owner.faction.name==="House Baratheon";
     }
}

OursIsTheFury.code='00023';
module.exports = OursIsTheFury;

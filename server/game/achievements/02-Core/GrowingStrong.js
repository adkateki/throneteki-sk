const Achievement = require('../../achievement.js');

class GrowinStrong extends Achievement {
     check(){
        return this.owner.faction.name==="House Tyrell" && this.owner.agenda && this.owner.agenda.name !== "The Free Folk";;
     }
}

GrowinStrong.code='00026';
module.exports = GrowinStrong;

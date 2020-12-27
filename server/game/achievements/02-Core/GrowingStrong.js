const Achievement = require('../../achievement.js');

class GrowinStrong extends Achievement {
     check(){
        return this.owner.faction.name==="House Tyrell";
     }
}

GrowinStrong.code='00026';
module.exports = GrowinStrong;

const Achievement = require('../../achievement.js');

class GrowinStrong extends Achievement {
     check(){
        return this.owner.faction.name==="House Tyrell";
     }
}

GrowinStrong.code='00027';
module.exports = GrowinStrong;

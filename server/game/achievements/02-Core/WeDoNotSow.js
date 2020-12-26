const Achievement = require('../../achievement.js');

class WeDoNotSow extends Achievement {
     check(){
        return this.owner.faction.name==="House Greyjoy";
     }
}

WeDoNotSow.code='00025';
module.exports = WeDoNotSow;

const Achievement = require('../../achievement.js');

class WeDoNotSow extends Achievement {
     check(){
        return this.owner.faction.name==="House Greyjoy" && this.owner.agenda && this.owner.agenda.name !== "The Free Folk";;
     }
}

WeDoNotSow.code='00025';
module.exports = WeDoNotSow;

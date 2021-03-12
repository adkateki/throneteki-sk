const Achievement = require('../../achievement.js');

class UnbowedUnbentUnbroken extends Achievement {
     check(){
        return this.owner.faction.name==="House Martell" && this.owner.agenda && this.owner.agenda.name !== "The Free Folk";;
     }
}

UnbowedUnbentUnbroken.code='00028';
module.exports = UnbowedUnbentUnbroken;

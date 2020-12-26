const Achievement = require('../../achievement.js');

class UnbowedUnbentUnbroken extends Achievement {
     check(){
        return this.owner.faction.name==="House Martell";
     }
}

UnbowedUnbentUnbroken.code='00026';
module.exports = UnbowedUnbentUnbroken;

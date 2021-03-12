const Achievement = require('../../achievement.js');

class FireAndBlood extends Achievement {
     check(){
        return this.owner.faction.name==="House Targaryen" && this.owner.agenda && this.owner.agenda.name !== "The Free Folk";;
     }
}

FireAndBlood.code='00023';
module.exports = FireAndBlood;

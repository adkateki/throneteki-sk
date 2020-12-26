const Achievement = require('../../achievement.js');

class FireAndBlood extends Achievement {
     check(){
        return this.owner.faction.name==="House Targaryen";
     }
}

FireAndBlood.code='00024';
module.exports = FireAndBlood;

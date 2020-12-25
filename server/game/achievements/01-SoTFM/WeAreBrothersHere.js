const Achievement = require('../../achievement.js');

class WeAreBrothersHere extends Achievement {
     check(){
        return this.owner.agenda.name==="The Brotherhood Without Banners"; 
     }
}

WeAreBrothersHere.code='00011';
module.exports = WeAreBrothersHere;

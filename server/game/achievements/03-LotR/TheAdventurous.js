const Achievement = require('../../achievement.js');

class TheAdventurous extends Achievement {
     check(){
        return this.owner.agenda && this.owner.agenda.name==="The Long Voyage"; 
     }
     
}

TheAdventurous.code='00046';
module.exports = TheAdventurous;

const Achievement = require('../../achievement.js');

class DefenderOfTheCitadel extends Achievement {
     check(){
        return this.owner.agenda && this.owner.agenda.name==="The Conclave"; 
     }
     
}

DefenderOfTheCitadel.code='00058';
module.exports = DefenderOfTheCitadel;

const Achievement = require('../../achievement.js');

class Jhat extends Achievement {
     check(){
        return this.owner.agenda && this.owner.agenda.name==="Moonsingers"; 
     }
     
}

Jhat.code='00056';
module.exports = Jhat;

const Achievement = require('../../achievement.js');

class Bittersteel extends Achievement {
     check(){
        return this.owner.agenda && this.owner.agenda.name==="The Golden Company"; 
     }
     
}

Bittersteel.code='00054';
module.exports = Bittersteel;

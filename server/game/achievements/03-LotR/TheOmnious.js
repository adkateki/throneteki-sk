const Achievement = require('../../achievement.js');

class TheOmnious extends Achievement {
     check(){
        return this.owner.agenda && this.owner.agenda.name==="Dark Wings, Dark Words"; 
     }
     
}

TheOmnious.code='00053';
module.exports = TheOmnious;

const Achievement = require('../../achievement.js');

class SonOfTheFirstMen extends Achievement {
     check(){
        return !this.owner.agenda;
     }
}

SonOfTheFirstMen.code='00001';
module.exports = SonOfTheFirstMen;

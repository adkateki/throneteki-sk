const Achievement = require('../../achievement.js');

class SonOfTheFirstMen extends Achievement {
     check(){
        return !this.owner.agenda;
     }
}

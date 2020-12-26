const Achievement = require('../../achievement.js');

class MoreBeastThanMan extends Achievement {
     check(){
        return this.owner.agenda.name==="The Free Folk" && this.owner.game.getOpponents(this.owner).some(opponent => { 
          return opponent.getNumberOfCardsInPlay( card => card.getType() === 'character')<=2;
         });
     }
}

MoreBeastThanMan.code='00038';
module.exports = MoreBeastThanMan;

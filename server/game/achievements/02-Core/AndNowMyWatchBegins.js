const Achievement = require('../../achievement.js');

class AndNowMyWatchBegins extends Achievement {
     check(){
        return this.owner.faction.name==="The Night's Watch" && this.owner.agenda && this.owner.agenda.name !== "The Free Folk";
     }
}

AndNowMyWatchBegins.code='00027';
module.exports = AndNowMyWatchBegins;

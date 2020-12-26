const Achievement = require('../../achievement.js');

class AndNowMyWatchBegins extends Achievement {
     check(){
        return this.owner.faction.name==="The Night's Watch";
     }
}

AndNowMyWatchBegins.code='00027';
module.exports = AndNowMyWatchBegins;

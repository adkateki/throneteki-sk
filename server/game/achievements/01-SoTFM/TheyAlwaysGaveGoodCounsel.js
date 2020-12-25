const Achievement = require('../../achievement.js');

class TheyAlwaysGaveGoodCounsel extends Achievement {
     check(){
        return this.owner.faction.name=="House Targaryen" && this.owner.game.allCards.filter(card => card.owner === this.owner && (card.name==='Missandei' || card.name==='Jorah Mormont')).length==0;
     }
}

TheyAlwaysGaveGoodCounsel.code='00020';
module.exports = TheyAlwaysGaveGoodCounsel;

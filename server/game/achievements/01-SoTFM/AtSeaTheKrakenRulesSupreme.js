const Achievement = require('../../achievement.js');
class AtSeaTheKrakenRulesSupreme extends Achievement {
     check(){
        let gjChars=this.owner.game.allCards.filter(card => card.owner === this.owner && card.name.includes('Greyjoy') && card.getType('character'));
        let gjNames=gjChars.map(character=>character.name);
        return Array.from(new Set(gjNames)).length == 1;
     }
}

AtSeaTheKrakenRulesSupreme.code='00018';
module.exports = AtSeaTheKrakenRulesSupreme;

const Achievement = require('../../achievement.js');
class SpellForged extends Achievement {
     check(){
        let valyrianSteelCards=this.owner.game.allCards.filter(card => card.owner === this.owner && card.hasTrait('Valyrian Steel') && card.getType('attachment'));
        let valyrianSteelNames=valyrianSteelCards.map(attachment=>attachment.name);
        return Array.from(new Set(valyrianSteelNames)).length >= 2;
     }
}

SpellForged.code='00048';
module.exports = SpellForged;

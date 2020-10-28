const DrawCard = require('../../drawcard.js');
const GameActions = require('../../GameActions');
class CrownOfTheIronThrone extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ faction: 'baratheon', unique: true });
        this.whileAttached({
            effect: ability.effects.addTrait('King')
        });
    }



}

CrownOfTheIronThrone.code = '50060';

module.exports = CrownOfTheIronThrone;

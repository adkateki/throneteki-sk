const DrawCard = require('../../drawcard.js');

class DragonFear extends DrawCard {
    setupCardAbilities(ability) {
        this.whileAttached({
            condition: () => this.parent.isParticipating() && this.controller.anyCardsInPlay(card => card.hasTrait('Dragon')),
            effect: ability.effects.modifyStrength(-2)
        });
    }
}

DragonFear.code = '50058';

module.exports = DragonFear;

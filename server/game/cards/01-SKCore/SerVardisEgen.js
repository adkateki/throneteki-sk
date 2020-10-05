const DrawCard = require('../../drawcard.js');

class SerVardisEgen extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => !this.kneeled && this.hasOtherDefendingArryn(),
            match: this,
            effect: ability.effects.consideredToBeDefending()
        });
    }

    hasOtherDefendingArryn() {
        return this.controller.anyCardsInPlay(card => card.isDefending() &&
                                                      card.hasTrait('House Arryn') &&
                                                      card.getType() === 'character' &&
                                                      card !== this);
    }
}

SerVardisEgen.code = '50023';

module.exports = SerVardisEgen;

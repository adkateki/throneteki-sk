const DrawCard = require('../../drawcard.js');

class HouseUllerGuard extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.hasTrait('Guard') && card.getType() === 'character',
            effect: ability.effects.modifyStrength(1)
        });
    }
}

HouseUllerGuard.code = '50089';

module.exports = HouseUllerGuard;

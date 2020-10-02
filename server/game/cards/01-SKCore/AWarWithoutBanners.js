const DrawCard = require('../../drawcard');

class AWarWithoutBanners extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: card => card.getType() === 'faction',
            targetController: 'any',
            effect: ability.effects.cannotBeKneeled
        });

    }
}

AWarWithoutBanners.code = '50002';

module.exports = AWarWithoutBanners;


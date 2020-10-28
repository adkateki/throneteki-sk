const DrawCard = require('../../drawcard.js');

class MellarioOfNorvos extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            targetController: 'current',
            effect: ability.effects.reduceAmbushCardCost(1, card => true)
        });
    }
}

MellarioOfNorvos.code = '50049';

module.exports = MellarioOfNorvos;

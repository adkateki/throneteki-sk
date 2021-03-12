const DrawCard = require('../../drawcard.js');

class Discouraged extends DrawCard {
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.removeIcon('power')
        });
        this.whileAttached({
            effect: ability.effects.removeIcon('intrigue')
        });
        this.whileAttached({
            effect: ability.effects.removeIcon('military')
        });
    }
}

Discouraged.code = '50050';

module.exports = Discouraged;

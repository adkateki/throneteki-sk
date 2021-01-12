const DrawCard = require('../../drawcard.js');

class HuntingSpear extends DrawCard {
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: [
                ability.effects.dynamicStrength(() => this.parent.power)
            ]
        });
    }
}

HuntingSpear.code = '50100';

module.exports = HuntingSpear;

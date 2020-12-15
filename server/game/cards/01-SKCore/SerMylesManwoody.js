const DrawCard = require('../../drawcard');

class SerMylesManwoody extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => !this.controller.firstPlayer,
            match: this,
            effect: ability.effects.doesNotKneelAsAttacker()
        });
    }
}

SerMylesManwoody.code = '50069';

module.exports = SerMylesManwoody;

const DrawCard = require('../../drawcard.js');

class SerMylesManwoody extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.game.currentPhase !== 'setup' && this.game.currentPhase !== 'plot' && !this.controller.firstPlayer,
            match: this,
			effect: ability.effects.doesNotKneelAsAttacker()
		});
    }
}

SerMylesManwoody.code = '500069';

module.exports = SerMylesManwoody;
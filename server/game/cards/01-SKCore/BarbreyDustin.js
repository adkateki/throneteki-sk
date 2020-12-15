const DrawCard = require('../../drawcard.js');

class BarbreyDustin extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => !this.kneeled,
            targetController: 'any',
            effect: ability.effects.cannotTriggerCardAbilities(ability => ability.card.hasTrait('Maester') )
        });
    }

}

BarbreyDustin.code = '50073';

module.exports = BarbreyDustin;

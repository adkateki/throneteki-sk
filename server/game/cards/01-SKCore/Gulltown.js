const DrawCard = require('../../drawcard.js');

class Gulltown extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: card => card === this,
            targetController: 'current',
            effect: ability.effects.cannotSetup()
        });

        this.plotModifiers({
            gold: 1,
            initiative: -1
        });
    }
}

Gulltown.code = '50004';

module.exports = Gulltown;

const DrawCard = require('../../drawcard.js');

class Gulltown extends DrawCard {
    setupCardAbilities() {
        this.persistentEffect({
            targetController: 'current',
            effect: ability.effects.cannotSetup(card => card == this)
        });

        this.plotModifiers({
            gold: 1,
            initiative: -1
        });
    }
}

Gulltown.code = '50004';

module.exports = Gulltown;

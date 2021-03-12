const DrawCard = require('../../drawcard.js');

class OldSteward extends DrawCard {
    setupCardAbilities() {
        this.plotModifiers({
            reserve: 1
        });
    }
}

OldSteward.code = '50052';

module.exports = OldSteward;

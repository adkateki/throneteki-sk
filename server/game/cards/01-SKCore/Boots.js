const DrawCard = require('../../drawcard.js');

class Boots extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ unique: true, printedCostOrLower: 3 });
        this.whileAttached({
	  effect: ability.effects.addIcon('military'),
        });
        this.whileAttached({
	  effect: ability.effects.doesNotKneelAsAttacker({ challengeType: 'military' })
        });
    }
}

Boots.code = '50068';

module.exports = Boots;

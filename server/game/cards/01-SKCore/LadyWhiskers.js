const DrawCard = require('../../drawcard.js');

class LadyWhiskers extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ unique: true, printedCostOrLower: 3 });
        this.whileAttached({
            effect: ability.effects.addKeyword('stealth')
        });
        this.whileAttached({
	    match: (card) => card.name === 'Tommen Baratheon',
            effect: ability.effects.addKeyword('insight')
        });
    }
}

LadyWhiskers.code = '50007';

module.exports = LadyWhiskers;

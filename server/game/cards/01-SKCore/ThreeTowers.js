const DrawCard = require('../../drawcard.js');

class ThreeTowers extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onRemovedFromChallenge: event => event.card.location === 'play area'
            },
            cost: ability.costs.kneelSelf(),
            handler: (context) => {
		this.untilEndOfPhase(ability => ({
		    match: context.event.card,
		    effect: ability.effects.modifyStrength(-3)
		}));
                this.game.addMessage('{0} uses {1} to give -3 STR to {2}', this.controller, this, context.event.card);
            }
        });
    }
}

ThreeTowers.code = '50036';

module.exports = ThreeTowers;

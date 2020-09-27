const DrawCard = require('../../drawcard.js');

class Greyguard extends DrawCard {
    setupCardAbilities(ability) {
	this.action({
	    cost: ability.costs.kneelSelf(),		
            target: {
                cardCondition: card => card.location === 'play area' && card.isFaction('thenightswatch') &&
                                       card.getType() === 'character'
            },
	    handler: () => {
                ability.effects.immuneTo(card => card.controller !== this.controller && card.getType() === 'character')
	    } 
        });
    }
}

Greyguard.code = 'SK01012';

module.exports = Greyguard;

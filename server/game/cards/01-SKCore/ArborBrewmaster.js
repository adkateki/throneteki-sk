const DrawCard = require('../../drawcard.js');

class ArborBrewmaster extends DrawCard {
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onCardLeftPlay: event => event.card === this 
            },
	    target:{
            	activePromptTitle: 'Select a card in play',
		cardCondition: card => card.location === 'play area'
            },
            handler: (context) => {
                this.untilEndOfPhase(ability => ({
                    match: context.target,
                    effect: ability.effects.modifyStrength(1)
                }));
		if(this.controller.canGainGold()) {
		  this.game.addGold(this.controller, 1);
		}
                this.game.addMessage('{0} uses {1} to give {2} +1 STR until the end of the phase and gain 1 gold', this.controller, this, context.target);

            }
        });
    }
}

ArborBrewmaster.code = '50095';

module.exports = ArborBrewmaster;

const DrawCard = require('../../drawcard.js');
const GameActions = require('../../GameActions');
const {Tokens} = require('../../Constants');

class KingsLandingSmuggler extends DrawCard {
    setupCardAbilities() {
        this.interrupt({
            when: {
                onCardLeftPlay: event => event.card === this 
            },
	    target:{
            	activePromptTitle: 'Select a card in play',
		cardCondition: card => card.location === 'play area'
            },
            handler: (context) => {
                this.game.addMessage('{0} uses {1} to place a gold from the treasury on {2}', this.controller, this, context.target);
                this.game.resolveGameAction(
                    GameActions.placeToken(() => ({ card: context.target, token: Tokens.gold, source: this })),
                    context
                );

            }
        });
    }
}

KingsLandingSmuggler.code = '50003';

module.exports = KingsLandingSmuggler;

const PlotCard = require('../../plotcard');
const {Tokens} = require('../../Constants');
const GameActions = require('../../GameActions');

class CityOfShadows extends PlotCard {
    setupCardAbilities(ability) {
        this.whenRevealed({
            target: {
                numCards: 2,
                activePromptTitle: 'Select up to 2 cards',
                cardCondition: (card, context) => context.player === card.controller && card.location === 'hand'
            },
            handler: context => {

		let numberTarget=0;
                for(let card of context.target) {
                    numberTarget++;
		    context.player.putIntoShadows(card, false, () => {
		       this.game.resolveGameAction(
			   GameActions.placeToken(() => ({ card: card, token: Tokens.shadow, source: this })),
			   context
		       );

		       if(!card.isShadow()) {
			   this.lastingEffect(ability => ({
			       condition: () => card.location === 'shadows',
			       targetLocation: 'any',
			       match: card,
			       effect: ability.effects.addKeyword(`Shadow (${card.getPrintedCost()})`)
			   }));
		       }
		   });

		}
                this.game.addMessage('{0} uses {1} to put {2} cards into shadow', context.player, this, numberTarget);
                

            }
        });




    }
}

CityOfShadows.code = '50061';

module.exports = CityOfShadows;


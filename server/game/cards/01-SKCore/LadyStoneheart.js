const DrawCard = require('../../drawcard.js');
const GameActions = require('../../GameActions');

class LadyStoneheart extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => !this.controller.anyCardsInPlay(card => card.getType() === 'character' && card.isLoyal()),
            match: this,
            effect: [
                ability.effects.addKeyword('intimidate')
            ]            
        });
        this.interrupt({
            when: {
                onCharacterKilled: event => event.card.hasTrait('Brotherhood') || event.card.hasTrait('R\'hllor') && event.card.controller === this.controller
            },
            location: 'dead pile',
            message: '{player} puts {source} into play form dead pile',
            handler: (context) => {
		this.game.resolveGameAction(
		    GameActions.putIntoPlay(() => ({
			card: this
		    })).then(preThenContext => ({
                         // If the card is in the "dupe" location, then a "character" wasn't put into play
                         condition: () => this.location === 'play area',
                         message: 'Then {player} raises the claim value of his or her revealed plot card by 1 until the end of the phase.',
                         handler: thenContext => {
			     this.untilEndOfPhase(ability => ({
				match: card => card === this.controller.activePlot,
				effect: ability.effects.modifyClaim(1)
			      }));                                 
                         }    
                    })),
		    context
		);


            }
        });
    }
}

LadyStoneheart.code = '50083';

module.exports = LadyStoneheart;

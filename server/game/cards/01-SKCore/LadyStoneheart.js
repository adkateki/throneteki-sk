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
            handler: (context) => {
		this.game.resolveGameAction(
		    GameActions.putIntoPlay(() => ({
			card: this
		    })).then({
                         handler: thenContext => {
			     this.untilEndOfPhase(ability => ({
				match: card => card === this.controller.activePlot,
				effect: ability.effects.modifyClaim(1)
			      }));                                 
                         }    
                    }),
		    context
		);


                this.game.addMessage('{0} puts {1} into play and raises the claim value of his or her revealed plot card by1 until the end of the phase.', this.controller, this);
            }
        });
    }
}

LadyStoneheart.code = '50083';

module.exports = LadyStoneheart;

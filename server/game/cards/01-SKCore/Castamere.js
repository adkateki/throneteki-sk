const DrawCard = require('../../drawcard.js');

class Castamere extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardEntersPlay: event => this.game.currentPhase === 'challenge' && event.card.getType() === 'character'
            },
            cost: ability.costs.kneelSelf(),
            handler: (context) => {
                context.event.card.controller.returnCardToHand(context.event.card, true);
                this.game.addMessage('{0} uses {1} to return {2} to its owners hand.', this.controller, this, context.event.card);
            }
        });
    }
}

Castamere.code = '50048';

module.exports = Castamere;



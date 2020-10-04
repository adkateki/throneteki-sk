const DrawCard = require('../../drawcard.js');

class RedSmiths extends DrawCard {
    setupCardAbilities() {
        this.reaction({
            when: {
                onCardOutOfShadows: event => event.card === this
            },
            target: {
                cardCondition: card => (
                    card.location === 'play area' &&
                    card.getType() === 'character' &&
                    card.getPrintedCost() <= 1)
            },
            handler: context => {
                context.target.owner.returnCardToHand(context.target);
                this.game.addMessage('{0} uses {1} to return {2} to {3}\'s hand', this.controller, this, context.target, context.target.controller);
            }
        });
    }
}

RedSmiths.code = '50027';

module.exports = RedSmiths;

const DrawCard = require('../../drawcard.js');

class TyrionLannister extends DrawCard {
    setupCardAbilities() {
        this.reaction({
            when: {
                'onCardDiscarded:aggregate': event => (
                    event.events.some(discardEvent => (
                        discardEvent.cardStateWhenDiscarded.controller === this.controller &&
                        discardEvent.cardStateWhenDiscarded.location === 'hand' &&
                        discardEvent.card.isFaction('targaryen') &&
                        !this.game.claim.isApplying && 
                        !this.game.reserve.isApplying
                    )) 
                )
            },
            limit: ability.limit.perPhase(1),
            handler: context => {
                this.controller.drawCardsToHand(1);
                this.game.addMessage('{0} uses {1} to draw 1 card in reaction to a card being discarded from his or her hand', this.controller, this);
            }
        });
    }
}

TyrionLannister.code = '50057';

module.exports = TyrionLannister;

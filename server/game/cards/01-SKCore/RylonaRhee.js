const DrawCard = require('../../drawcard.js');

class RylonaRhee extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlaced: event => event.card.location === 'discard pile' &&
                                       event.player === this.controller &&
                                       event.card.getType() === 'event' &&
                                       event.card.hasTrait('Song')
            },
       	    cost: ability.costs.payGold(1),
            handler: (context) => {
                let card = context.event.card;
                context.player.moveCard(card, 'draw deck');
		this.controller.shuffleDrawDeck();
                this.game.addMessage('{0} uses {1} and pay 1 gold to shuffle {2} back to their deck', context.player, this, card);
            }
        });
    }
}

RylonaRhee.code = '50077';

module.exports = RylonaRhee;

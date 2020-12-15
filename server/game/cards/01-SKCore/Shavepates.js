const DrawCard = require('../../drawcard.js');

class Shavepates extends DrawCard {
    setupCardAbilities() {
        this.interrupt({
	    when: {
		onCardLeftPlay: event => event.card === this
            },
            title: 'Shuffle attachment from discard pile back into deck',
            target: {
                cardCondition: card => card.controller === this.controller && card.location === 'discard pile' && card.getType() === 'attachment'
            },
            handler: context => {
                this.shuffleCard(context.target);
            }
        });
    }

    shuffle() {
        this.shuffleCard(this.selectedCard);

        return true;
    }

    shuffleCard(card) {
        this.controller.moveCard(card, 'draw deck');
        this.controller.shuffleDrawDeck();

        this.game.addMessage('{0} uses {1} to move {2} from their discard pile and shuffle it into their deck', this.controller, this, card);
    }
}

Shavepates.code = '50018';

module.exports = Shavepates;

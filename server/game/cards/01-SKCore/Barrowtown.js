const DrawCard = require('../../drawcard');

class Barrowtown extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onSacrificed: event => event.card.controller === this.controller
            },
	    limit: ability.limit.perPhase(1),
            handler: () => {
                this.controller.drawCardsToHand(1);
                this.game.addMessage('{0} draw a card for {1} in reaction to a card being sacrificed', this.controller, this);
            }
        });
    }
}

Barrowtown.code = '50034';

module.exports = Barrowtown;

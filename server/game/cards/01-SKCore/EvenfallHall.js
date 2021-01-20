const DrawCard = require('../../drawcard.js');

class EvenfallHall extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: event => event.card.hasTrait('Song') && event.card.controller === this.controller && this.controller.canDraw()
            },
            limit: ability.limit.perRound(2),
            handler: () => {
                this.controller.drawCardsToHand(1);
                this.game.addMessage('{0} uses {1} to draw 1 card', this.controller, this);
            }
        });
    }
}

EvenfallHall.code = '50063';

module.exports = EvenfallHall;

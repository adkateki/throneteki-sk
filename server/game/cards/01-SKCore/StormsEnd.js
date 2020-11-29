const DrawCard = require('../../drawcard.js');

class StormsEnd extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPowerGained: event => event.card.controller === this.controller && ( event.card.getType() === 'character' || event.card.getType() === 'location' )
            },
            limit: ability.limit.perRound(2),
            handler: context => {
                this.controller.drawCardsToHand(1);
                this.game.addMessage('{0} uses {1} to draw 1 card', this.controller, this);
            }
        });
    }
}

StormsEnd.code = '50080';

module.exports = StormsEnd;

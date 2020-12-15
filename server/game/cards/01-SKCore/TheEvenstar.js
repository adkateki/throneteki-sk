const DrawCard = require('../../drawcard.js');

class TheEvenstar extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardPlayed: event => event.card.hasTrait('Song') && event.card.controller === this.controller
            },
            limit: ability.limit.perPhase(2),
            handler: () => {
                this.controller.standCard(this);
                this.game.addMessage('{0} stands {1} after an event Song is played', this.controller, this);
            }
        });
    }
}

TheEvenstar.code = '50044';

module.exports = TheEvenstar;



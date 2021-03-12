const DrawCard = require('../../drawcard.js');

class SerKevanLannister extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardEntersPlay: event => (
                    event.card.controller === this.controller && event.card.isFaction('lannister') && (event.card.getType() === 'location' || event.card.getType() === 'attachment')
                )
            },
            limit: ability.limit.perPhase(2),
            handler: () => {
                this.controller.standCard(this);
                this.game.addMessage('{0} stands {1}', this.controller, this);
            }
        });
    }
}

SerKevanLannister.code = '50087';

module.exports = SerKevanLannister;

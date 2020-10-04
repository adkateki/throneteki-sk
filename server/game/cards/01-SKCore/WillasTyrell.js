const DrawCard = require('../../drawcard.js');

class WillasTyrell extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardsDrawn: event =>
                    event.reason === 'insight' &&
                    event.source.controller === this.controller &&
                    event.cards[0].isLoyal() &&
                    this.controller.canDraw()
            },
            cost: ability.costs.revealSpecific(context => context.event.cards[0]),
            handler: context => {
		this.modifyPower(1);
                this.game.addMessage('{0} uses {1} ', context.player, this);
            }
        });
    }

}

WillasTyrell.code = '50035';

module.exports = WillasTyrell;

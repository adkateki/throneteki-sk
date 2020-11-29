const DrawCard = require('../../drawcard.js');

class FaliaFlowers extends DrawCard {
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onCardDiscarded: event => event.card.owner === this.controller && event.originalLocation === 'play area' && event.card.getType() === 'location' && event.card.hasTrait('Warship') 
            },
            cost: ability.costs.sacrificeSelf(),
            handler: context => {
                this.game.addMessage('{0} sacrifices {1} to return {2} to their hand',
                    context.player, this, context.event.card);
                context.replaceHandler(() => {
                    context.event.cardStateWhenDiscarded = context.event.card.createSnapshot();
                    this.controller.moveCard(context.event.card, 'hand');
                });
            }
        });
    }
}

FaliaFlowers.code = '50065';

module.exports = FaliaFlowers;

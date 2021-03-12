const DrawCard = require('../../drawcard.js');

class Reek extends DrawCard {
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onSacrificed: event => event.card.getType() === 'character' && event.card !== this && event.card.controller === this.controller
            },
            cost: ability.costs.sacrificeSelf(),
            handler: context => {
                this.game.addMessage('{0} sacrifices {1} to return {2} to their hand', context.player, this, context.event.card);
                context.replaceHandler(() => {
                    context.event.cardStateWhenSacrificed = context.event.card.createSnapshot();
                    this.controller.returnCardToHand(context.event.card, false);
                });
            }
        });
    }
}

Reek.code = '50093';

module.exports = Reek;

const DrawCard = require('../../drawcard.js');

class PlankyTown extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Discard 1 gold from ' + this.name,
            cost: ability.costs.discardGold(),
            target: {
                cardCondition: card => (
                    card.location === 'play area' &&
                    card.controller === this.controller &&
                    card !== this &&
                    card.getType() === 'attachment')
            },
            handler: context => {
                context.target.owner.returnCardToHand(context.target);
                this.game.addMessage('{0} discards 1 gold from {1} to return {2} to their hand',
                    this.controller, this, context.target);
            }
        });
    }
}

PlankyTown.code = '50070';

module.exports = PlankyTown;
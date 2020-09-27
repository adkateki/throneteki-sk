const DrawCard = require('../../drawcard');

class SmugglingVessel extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Kneel Smuggler and Smuggling Vessel',
            cost: [
                ability.costs.kneelSelf(),
                ability.costs.kneel(card => card.getType() === 'character' && card.hasTrait('Smuggler'))
            ],
            targets: {
                location: {
                    activePromptTitle: 'Select a location',
                    cardCondition: card => card.location === 'play area' && card.getType() === 'location' && !card.kneeled,
                    gameAction: 'kneel'
                }
            },
            handler: context => {
                this.game.addMessage('{0} uses {1} to kneel {2}', context.player, this, context.targets.location);
                context.targets.location.controller.kneelCard(context.targets.location);
            }
        });
    }
}

SmugglingVessel.code = 'SK01019';

module.exports = SmugglingVessel;

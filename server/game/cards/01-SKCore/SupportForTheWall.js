const PlotCard = require('../../plotcard.js');

class SupportForTheWall extends PlotCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: card => card.getType() === 'character' && card.hasTrait('Army'),
            targetController: 'any',
            effect: [
                ability.effects.modifyStrength(1)
            ]
        });
        this.action({
            title: 'Stand an Army character',
            phase: 'challenges',
            target: {
                cardCondition: card => card.location === 'play area' && card.hasTrait('Army') &&
                                       card.getType() === 'character' && card.kneeled
            },
            handler: context => {
                context.target.controller.standCard(context.target);
                this.game.addMessage('{0} uses {1} to stand {2}',
                    context.player, this, context.target);
            },
            limit: ability.limit.perRound(1)
        });
    }
}

SupportForTheWall.code = '50022';

module.exports = SupportForTheWall;

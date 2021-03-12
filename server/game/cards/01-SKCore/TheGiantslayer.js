const DrawCard = require('../../drawcard.js');

class TheGiantslayer extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                afterChallenge: event => event.challenge.winner === this.controller &&
                    this.isParticipating()
            },
            cost: ability.costs.kill(),
            limit: ability.limit.perPhase(1),
            handler: context => {
                this.untilEndOfChallenge(ability => ({
                    match: card => card === this.controller.activePlot,
                    effect: ability.effects.modifyClaim(1)
                }));
                this.game.addMessage('{0} kills {1} to raise the claim on their plot card by 1 until the end of the challenge', context.player, context.costs.kill);
            }
           
        });
    }
}

TheGiantslayer.code = '50059';

module.exports = TheGiantslayer;




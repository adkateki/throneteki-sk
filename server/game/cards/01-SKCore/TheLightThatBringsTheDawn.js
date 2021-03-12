const DrawCard = require('../../drawcard.js');

class TheLightThatBringsTheDawn extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                afterChallenge: event => event.challenge.winner === this.controller && !event.challenge.isAttackerTheWinner()
            },
            target: {
                cardCondition: card => card.location === 'play area' && card.getType() === 'character' && !card.isUnique()
            },
            handler: context => {
		context.target.controller.standCard(context.target);
                this.untilEndOfPhase(ability => ({
                    match: context.target,
                    effect: ability.effects.takeControl(context.player)
                }));
                this.game.addMessage('{0} uses {1} to stand and control {2} until the end of the phase',
                    this.controller, this, context.target);
            }
        });
    }
}

TheLightThatBringsTheDawn.code = '50032';

module.exports = TheLightThatBringsTheDawn;

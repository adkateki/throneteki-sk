const DrawCard = require('../../drawcard.js');

class MaesterColemon extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Blank an attachment',
            target: {
                activePrompTitle: 'Select an attachment',
                cardCondition: card => card.location === 'play area' && ['attachment'].includes(card.getType())
            },
            limit: ability.limit.perRound(1),
            handler: context => {
                this.untilEndOfPhase(ability => ({
                    match: context.target,
                    effect: ability.effects.blankExcludingTraits
                }));

                this.game.addMessage('{0} uses {1} to treat the text box of {2} as blank until the end of the phase',
                    context.player, this, context.target);
            }
        });
    }
}

MaesterColemon.code = '50043';

module.exports = MaesterColemon;


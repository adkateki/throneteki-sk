const DrawCard = require('../../drawcard');

class LewysTheFishwife extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardEntersPlay: event => event.card === this
            },
            target: {
                cardCondition: card => card.location === 'play area' && card.getType() === 'character' && card.getPower() > 0 && (card.hasTrait('Lord') || card.hasTrait('Lady'))
            },
            handler: context => {
                this.untilEndOfPhase(ability => ({
                    match: context.target,
                    effect: ability.effects.blankExcludingTraits
                }));
                this.game.addMessage('{0} uses {1} to treat the text box of {2} as blank until the end of the phase', context.player, this, context.target);
            }
        });
    }
}

LewysTheFishwife.code = '50079';

module.exports = LewysTheFishwife;

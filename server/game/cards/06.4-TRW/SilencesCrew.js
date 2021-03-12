const DrawCard = require('../../drawcard.js');
const {Tokens} = require('../../Constants');
const GameActions = require('../../GameActions');

class SilencesCrew extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: this,
            effect: ability.effects.dynamicStrength(() => this.tokens[Tokens.gold] * 2)
        });

        this.reaction({
            when: {
                onCardDiscarded: event => event.isPillage && event.source === this &&
                                    (event.card.getType() === 'location' || event.card.getType() === 'attachment')
            },
            handler: (context) => {
                this.game.resolveGameAction(
                    GameActions.placeToken(() => ({ card: this, token: Tokens.gold, source: this })),
                    context
                );
                this.game.addMessage('{0} moves 1 gold token from the treasury to {1}', this.controller, this);
            }
        });
    }
}

SilencesCrew.code = '06071';

module.exports = SilencesCrew;

const DrawCard = require('../../drawcard.js');
const GameActions = require('../../GameActions');
class BigBlackTomcat extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ unique: true, printedCostOrLower: 3, loyal: false });
        this.whileAttached({
            effect: ability.effects.addKeyword('intimidate'),
        });
        this.whileAttached({
            effect: ability.effects.addIcon('power')
        });
        this.forcedInterrupt({
            when: {
                onPhaseEnded: event => event.phase === 'challenge'
            },
            message: '{player} is forced to sacrifice {source}',
            handler: context => {
                this.game.resolveGameAction(
                    GameActions.sacrificeCard({ card: this }),
                    context
                );
            }
        });
    }
}


BigBlackTomcat.code = '50064';

module.exports = BigBlackTomcat;

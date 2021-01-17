const DrawCard = require('../../drawcard.js');

class YezzanZoQaggaz extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Put character into play',
            phase: 'challenge',
            condition: () => (
                this.isParticipating()
            ),
            target: {
                cardCondition: card => card.location === 'discard pile' && card.controller === this.controller &&
                                       card.getType() === 'character' && (card.hasTrait('Ally') || card.gasTrait('Mercenary')) && this.controller.canPutIntoPlay(card)
            },
            cost: [
                ability.costs.discardGold()
            ],
            handler: context => {
                context.player.putIntoPlay(context.target, 'play', { kneeled: true });
                this.game.currentChallenge.addParticipantToSide(this.controller, context.target);
		this.atEndOfChallenge(ability => ({
		    match: context.target,
                    effect: ability.effects.moveToBottomOfDeckIfStillInPlay(true)
		}));

                this.game.addMessage('{0} discards 1 gold from {1} to put {2} into play from their discard pile knelt participating on their side',
                    context.player, this, context.target);
            }
        });
    }
}

YezzanZoQaggaz.code = '50097';

module.exports = YezzanZoQaggaz;

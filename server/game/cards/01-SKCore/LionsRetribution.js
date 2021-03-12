const DrawCard = require('../../drawcard.js');

class LionsRetribution extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            max: ability.limit.perChallenge(1),
            when: {
                afterChallenge: event => event.challenge.challengeType === 'intrigue' && event.challenge.winner === this.controller &&
                                         event.challenge.attackingPlayer === this.controller && event.challenge.strengthDifference >= 5
            },
            chooseOpponent: opponent => opponent.hand.length !== 0,
            handler: context => {
                this.game.addMessage('{0} plays {1} to look at {2}\'s hand', context.player, this, this.game.currentChallenge.loser);
                this.game.promptForSelect(context.player, {
                    activePromptTitle: 'Select a card',
                    source: this,
                    revealTargets: true,
                    cardCondition: card => card.location === 'hand' && card.controller === this.game.currentChallenge.loser,
                    onSelect: (player, card) => this.onCardSelected(player, card)
                });
            }

        });
    }
    onCardSelected(player, card) {
        let otherPlayer = card.controller;

        otherPlayer.discardCards([card], true, () => {
            let charMessage = '';

            if(card.getType() === 'character') {
                charMessage = ' and place it in the dead pile';
                otherPlayer.moveCard(card, 'dead pile');
            }

            this.game.addMessage('{0} then uses {1} to discard {2} from {3}\'s hand{4}',
                player, this, card, otherPlayer, charMessage);
        });
        return true;
    }
}

LionsRetribution.code = '50008';

module.exports = LionsRetribution;

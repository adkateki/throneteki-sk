const DrawCard = require('../../drawcard.js');

class BuildersHammer extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                afterChallenge: event => event.challenge.winner === this.controller && !event.challenge.isAttackerTheWinner() && event.challenge.isDefending(this.parent)
            },
             cost: ability.costs.discardGold(),
	     handler: context => {
                this.game.promptForDeckSearch(this.controller, {
                    numCards: 10,
                    activePromptTitle: 'Select a card',
                    cardCondition: card => card.isFaction('thenightswatch'),
                    cardType: ['attachment', 'location'],
                    onSelect: (player, card) => this.cardSelected(player, card),
                    onCancel: player => this.doneSelecting(player),
                    source: this
                });
            }
        });
    }

    cardSelected(player, card) {
        this.game.addMessage('{0} uses {1} to search their deck and add {2} to their hand', this.controller, this, card);
        this.controller.moveCard(card, 'hand');
    }

    doneSelecting(player) {
        this.game.addMessage('{0} uses {1} to search their deck, but does not find any card',
            player, this);
    }
}

BuildersHammer.code = '50072';

module.exports = BuildersHammer;

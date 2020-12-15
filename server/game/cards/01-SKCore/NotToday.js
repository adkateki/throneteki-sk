const DrawCard = require('../../drawcard.js');

class NotToday extends DrawCard {
    setupCardAbilities() {
        this.interrupt({
            canCancel: true,
            when: {
                onCharacterKilled: event => event.card.controller ===this.controller && event.card.isUnique()
            },
            handler: context => {
		let card = context.event.card;
 		context.player.moveCard(card, 'discard pile');
                this.game.addMessage('{0} uses {1} to move {2} to their discard pile', context.player, this, card);
                this.game.promptForDeckSearch(context.player, {
                    numCards: 10,
                    activePromptTitle: 'Select a character with the same title',
                    cardCondition: card => card.getType() === 'character' && card.name === context.event.card.name,
                    onSelect: (player, card) => this.cardSelected(player, card),
                    onCancel: player => this.doneSelecting(player),
                    source: this
                });
            }
        });
    }
    cardSelected(player, card) {
        this.game.addMessage('{0} uses {1} to search their deck and put {2} into play', player, this, card);
        player.putIntoPlay(card);
    }

    doneSelecting(player) {
        this.game.addMessage('{0} uses {1} to search their deck, but does not put any card into play', player, this);
    }


}

NotToday.code = '50024';

module.exports = NotToday;

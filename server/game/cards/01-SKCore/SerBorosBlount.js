const DrawCard = require('../../drawcard.js');

class SerBorosBlount extends DrawCard {
    setupCardAbilities() {
        this.reaction({
            when: {
                onCardEntersPlay: event => event.card === this
            },
            handler: () => {
                this.game.promptForDeckSearch(this.controller, {
                    activePromptTitle: 'Select a card',
                    cardCondition: card => card.getType() === 'character' && card.hasTrait('Kingsguard'),
                    onSelect: (player, card) => this.cardSelected(player, card),
                    onCancel: player => this.doneSelecting(player),
                    source: this
                });
            }
        });
    }


    cardSelected(player, card) {
        player.moveCard(card, 'hand');

        if(!this.controller.anyCardsInPlay(card => card.getType() === 'character' && card.hasTrait('King')) || !player.canPutIntoPlay(card)) {
            this.game.addMessage('{0} uses {1} to search their deck and add {2} to their hand',
                player, this, card);
            return;
        }

        this.revealedCard = card;

        let buttons = [
            { text: 'Keep in hand', method: 'keepInHand' },
            { text: 'Put in play', method: 'putInPlay' }
        ];

        this.game.promptWithMenu(player, this, {
            activePrompt: {
                menuTitle: 'Put card into play?',
                buttons: buttons
            },

            source: this
        });
    }

    doneSelecting(player) {
        this.game.addMessage('{0} uses {1} to search their deck, but does not add any card to their hand',
            player, this);
    }
    keepInHand(player) {
        if(!this.revealedCard) {
            return false;
        }

        this.game.addMessage('{0} uses {1} to search their deck and add {2} to their hand',
            player, this, this.revealedCard);
        this.revealedCard = null;

        return true;
    }
    putInPlay(player) {
        if(!this.revealedCard) {
            return false;
        }

        this.game.addMessage('{0} uses {1} to search their deck and put {2} into play',
            player, this, this.revealedCard);
        player.putIntoPlay(this.revealedCard);
        this.revealedCard = null;
        this.atEndOfPhase(ability => ({
            match: this.revealedCard,
            effect: ability.effects.discardIfStillInPlay(true)
        }));

        return true;
    }

SerBorosBlount.code = '50028';

module.exports = SerBorosBlount;

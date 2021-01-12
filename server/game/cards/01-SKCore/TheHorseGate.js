const DrawCard = require('../../drawcard.js');

class TheHorseGate extends DrawCard {
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onCardReturnedToHand: event =>
                    event.allowSave &&
                    event.card.getType() === 'character' &&
                    (event.card.hasTrait('Bloodrider') &&
                    event.card.owner === this.controller //check for owner of the returned card in case dothraki/army card got stolen by the opponent

            },
            cost: [
                ability.costs.discardGold(),
                ability.costs.kneelSelf()
            ],
            handler: context => {
                this.game.addMessage('{0} discards 1 gold from {1} and kneels it to save {2} ',
                    context.player, this, context.event.card);
                context.event.saveCard();
            }
        });
    }
}

TheHorseGate.code = '15005';

module.exports = TheHorseGate;

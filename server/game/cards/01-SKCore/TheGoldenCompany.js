const DrawCard = require('../../drawcard.js');

class TheGoldenCompany extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardEntersPlay: event => (
                    event.card.controller === this.controller &&
                    event.playingType === 'marshal' &&
                    (event.card.hasTrait('Bastard') || event.card.hasTrait('Companion') || event.card.hasTrait('Mercenary')) &&
                    event.card.getType() === 'character')

            },
            handler: () => {
                this.untilEndOfPhase(ability => ({
                    targetController: 'current',
                    effect: ability.effects.reduceNextMarshalledCardCost(1, card => card.getType() === 'character' && card.hasTrait('Bastard') || card.hasTrait('Companion') || card.hasTrait('Mercenary'))
                }));

                this.game.addMessage('{0} uses {1} to reduce the cost of the next {2} card they marshal this phase by 1',
                    this.controller, this, 'Bastard, Companion or Mercenary');
            }
        });
    }
}

TheGoldenCompany.code = '50081';

module.exports = TheGoldenCompany;

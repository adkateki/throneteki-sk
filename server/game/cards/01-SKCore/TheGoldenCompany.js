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
                    effect: ability.effects.reduceCost({
                        playingTypes: 'marshal',
                        amount: 1,
                        match: card => card.getType() === 'character' && card.hasTrait('Bastard') || card.hasTrait('Companion') || card.hasTrait('Mercenary')
                    })
                }));

                this.game.addMessage('{0} uses {1} to reduce the cost for him to marshall {2} characters this phase by 1',
                    this.controller, this, 'Bastard, Companion or Mercenary');
            }
        });
    }
}

TheGoldenCompany.code = '50081';

module.exports = TheGoldenCompany;

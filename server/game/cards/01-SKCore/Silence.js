const DrawCard = require('../../drawcard.js');

class Silence extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: card => card.name === 'Euron Greyjoy',
            effect: ability.effects.addKeyword('insight')
        });
        this.interrupt({
            when: {
                onPillage: event => event.source.getType() === 'character' && event.source.controller === this.controller
            },
            cost: [
                ability.costs.kneelSelf()
            ],
            message: '{player} kneels {source} to discard 2 cards with pillage instead of 1',
            handler: context => {
                context.event.numCards += 2;
            }
        });
    }
}

Silence.code = '50006';

module.exports = Silence;

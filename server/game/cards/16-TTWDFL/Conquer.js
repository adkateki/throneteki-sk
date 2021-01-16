const DrawCard = require('../../drawcard');

class Conquer extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ type: 'location', unique: true });

        this.whileAttached({
            effect: ability.effects.takeControl(() => this.controller)
        });
    }
}

Conquer.code = '16004';

module.exports = Conquer;

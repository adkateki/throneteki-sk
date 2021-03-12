const DrawCard = require('../../drawcard');

class Conquer extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ type: 'location', unique: false });

        this.whileAttached({
            effect: ability.effects.takeControl(() => this.controller)
        });
    }
}

Conquer.code = '16004';

module.exports = Conquer;

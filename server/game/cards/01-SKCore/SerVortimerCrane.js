const DrawCard = require('../../drawcard');
const EventPlayedTracker = require('../../EventTrackers/EventPlayedTracker');

class SerVortimerCrane extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: card => card.getType() === 'character' && card.controller === this.controller && card.hasTrait('Knight'),
            effect: ability.effects.modifyStrength(1)
        });

    }

}

SerVortimerCrane.code = 'SK01015';

module.exports = SerVortimerCrane;

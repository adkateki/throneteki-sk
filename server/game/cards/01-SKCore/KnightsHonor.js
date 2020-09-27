const DrawCard = require('../../drawcard.js');

class KnightsHonor extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ controller: 'current', trait: ['Knight'] });
        this.whileAttached({
            effect: [
                ability.effects.modifyStrength(1),
		ability.effects.addKeyword('renown')
            ]
        });
        
    }

}

KnightsHonor.code = 'SK01016';

module.exports = KnightsHonor;

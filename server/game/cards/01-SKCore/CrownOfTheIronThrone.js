const DrawCard = require('../../drawcard.js');
class CrownOfTheIronThrone extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ faction: 'baratheon', unique: true });
        this.whileAttached({
            effect: ability.effects.contributesToDominanceWhileKneeling()
        });
    }



}

CrownOfTheIronThrone.code = '50060';

module.exports = CrownOfTheIronThrone;

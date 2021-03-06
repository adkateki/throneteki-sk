const DrawCard = require('../../drawcard.js');

class GilbertFarring extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.hasMorePowerThanAnOpponent(),
            match: this,
            effect: [
                ability.effects.addKeyword('Renown'),
                ability.effects.modifyStrength(2)
            ]
        });
    }

    hasMorePowerThanAnOpponent() {
        let opponents = this.game.getOpponents(this.controller);
        return opponents.some(opponent => this.controller.faction.power > opponent.faction.power);
    }
}

GilbertFarring.code = '50039';

module.exports = GilbertFarring;

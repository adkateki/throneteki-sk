const DrawCard = require('../../drawcard.js');

class SerAddamMarbrand extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.opponentHoldsLessCards(),
            match: this,
            effect: [
                ability.effects.addIcon('intrigue'),
                ability.effects.addIcon('power'),
                ability.effects.addKeyword('Renown')
            ]
        });
    }

    opponentHoldsLessCards() {
        let challenge = this.game.currentChallenge;

        if(!challenge) {
            return false;
        }

        return challenge.attackingPlayer === this.controller &&
               this.controller.hand.length > challenge.defendingPlayer.hand.length;
    }
}

SerAddamMarbrand.code = '50088';

module.exports = SerAddamMarbrand;

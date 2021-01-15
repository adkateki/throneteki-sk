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
        let opponents = this.game.getOpponents(this.controller);
        return opponents.every(opponent => {
            return this.controller.hand.length > opponent.hand.length;
        });
    }
}

SerAddamMarbrand.code = '50088';

module.exports = SerAddamMarbrand;

const DrawCard = require('../../drawcard.js');

class GreyWorm extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.opponentHasMoreChars(),
            match: this,
            effect: ability.effects.doesNotKneelAsDefender()
        });
    opponentHasMoreChars() {
        let opponents = this.game.getOpponents(this.controller);
        return opponents.some(opponent => {
            return opponent.getNumberOfCardsInPlay(card => card.getType() === 'character') > this.controller.getNumberOfCardsInPlay(card => card.getType() === 'character');
        });
    }
    }
}

GreyWorm.code = 'SK01017';

module.exports = GreyWorm;

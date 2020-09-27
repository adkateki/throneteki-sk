const DrawCard = require('../../drawcard');

class BoltonMarauders extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCharacterKilled: event => event.cardStateWhenKilled.controller === this.controller,
                onSacrificed: event => event.card.getType() === 'character' && event.cardStateWhenSacrificed.controller === this.controller
            },
            handler: context => {
                this.untilEndOfPhase(ability => ({
                    match: this,
                    effect: ability.effects.modifyStrength(2)
                }));
                this.game.addMessage('{0} gains +2 STR', this);
            }
        });
    }
}

BoltonMarauders.code = 'SK01013';

module.exports = BoltonMarauders;

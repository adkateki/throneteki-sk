const DrawCard = require('../../drawcard.js');

class BornOutOfFire extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Reduce next marshal/ambush cost',
            handler: context => {
                this.untilEndOfPhase(ability => ({
                    targetController: 'current',
                    effect: ability.effects.reduceNextMarshalledPlayedOrAmbushedCardCost(4, card => card.getType() === 'character' && card.hasTrait('Dragon'))
                }));

                this.game.addMessage('{0} uses {1} to reduce the next Dragon card they marshal or ambush by 4',
                    context.player, this);
            }
        });
    }
}

BornOutOfFire.code = '50078';

module.exports = BornOutOfFire;

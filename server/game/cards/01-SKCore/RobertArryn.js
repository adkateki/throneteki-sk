const DrawCard = require('../../drawcard');

class RobertArryn extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardEntersPlay: event => event.card.hasTrait('Lady') && this.canGainPower()
            },
            message: '{player} uses {source} to give him 1 power',
            handler: context => {
                this.modifyPower(1);
            },
            limit: ability.limit.perRound(1)
        });
     }
}

RobertArryn.code = '50084';

module.exports = RobertArryn;

const DrawCard = require('../../drawcard.js');

class ShadowTowerRanger extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Give STR',
            cost: ability.costs.kneelSelf(),
            target: {
                cardCondition: card => card.getType() === 'character' && card.isFaction('thenigthswatch')
            },
            message: {
                format: '{player} kneels {source} to give {target} +{strength} STR until the end of the phase',
                args: {
                    strength: () => this.getStrength()
                }
            },
            handler: context => {
                let str = this.getStrength();
                this.untilEndOfPhase(ability => ({
                    match: context.target,
                    effect: ability.effects.modifyStrength(str)
                }));
            }
        });
    }
}

ShadowTowerRanger.code = '50091';

module.exports = ShadowTowerRanger;

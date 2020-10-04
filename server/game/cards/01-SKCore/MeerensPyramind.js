const DrawCard = require('../../drawcard.js');

class MeereensPyramid extends DrawCard {

    setupCardAbilities(ability) {
        this.action({
            title: 'Kill if STR 0',
            phase: 'any',
            cost: ability.costs.kneelSelf(),
            target: {
                cardCondition: card => card.location === 'play area' && card.getType() === 'character'
            },
            handler: context => {
                this.untilEndOfPhase(ability => ({
                    match: context.target,
                    effect: ability.effects.killByStrength(0)
                }));                
            }			
        });		
    }
}

MeereensPyramid.code = '50038';

module.exports = MeereensPyramid;

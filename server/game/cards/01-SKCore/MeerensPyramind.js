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
                this.game.addMessage('{0} use {1} to choose {2}. It will be killed if its STR is 0.',
                    context.player, this, context.target);
            }			
        });		
    }
}

MeereensPyramid.code = '50038';

module.exports = MeereensPyramid;

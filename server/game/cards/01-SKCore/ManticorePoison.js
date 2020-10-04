const DrawCard = require('../../drawcard');

class ManticorePoison extends DrawCard {
    setupCardAbilities() {
        this.action({
            target: {
                type: 'select',
                cardCondition: card.location === 'play area' && card => card.getType() === 'character' && card.getPrintedCost() <= 4,
            },
            phase: 'taxation',
            handler: context => {
                this.atEndOfPhase(ability => ({
                    match: context.target,
                    effect: ability.effects.poison
                }));
            }
            
        });
    }

    
}

ManticorePoison.code = '50030';

module.exports = ManticorePoison;

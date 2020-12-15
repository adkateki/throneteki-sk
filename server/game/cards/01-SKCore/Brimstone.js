const DrawCard = require('../../drawcard.js');

class Brimstone extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: (card) => card.hasTrait('Sand Snake') && card.getType() === 'character',
            effect: ability.effects.modifyStrength(1)
        });
        this.action({
            title: 'Give icon',
            target: {
                cardCondition: card => card.location === 'play area' &&
                                       card.getType() === 'character'
            },
	    cost: ability.costs.kneelSelf(),
            handler: context => {
                this.game.promptForIcon(this.controller, this, icon => {
                    this.untilEndOfPhase(ability => ({
                        match: context.target,
                        effect: ability.effects.addIcon(icon)
                    }));

                    this.game.addMessage('{0} uses {1} to give {2} {3} icon to {4}',
                        this.controller, this, icon === 'intrigue' ? 'an' : 'a', icon, context.target);
                });
            }
        });
    }
}

Brimstone.code = '50010';

module.exports = Brimstone;

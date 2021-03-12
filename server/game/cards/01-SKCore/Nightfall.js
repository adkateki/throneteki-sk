const DrawCard = require('../../drawcard');

class Nightfall extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ faction: 'greyjoy', unique: true });

        this.whileAttached({
            match: card => card.name === 'The Knight',
            effect: ability.effects.addKeyword('Pillage')
        });

        this.reaction({
            when: {
                afterChallenge: event => event.challenge.isMatch({ winner: this.controller, unopposed: true }) && this.parent.isAttacking()
            },
            target: {
                cardCondition: card => card.getType() === 'character' && card.location === 'play area'
            },
            handler: context => {
		this.untilEndOfPhase(ability => ({
		    match: context.target,
		    effect: ability.effects.cannotBeDeclaredAsDefender()
		}));
                this.game.addMessage('{0} uses {1} to make {2} unable to be declared as a defender',
                    context.player, this, context.target);
            }
        });
    }
}

Nightfall.code = '50085';

module.exports = Nightfall;

const DrawCard = require('../../drawcard.js');

class ObellaSand extends DrawCard {
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onCardLeftPlay: event => event.card === this
            },
            target: {
                cardCondition: card => card.location === 'play area' && card.controller !== this.controller &&
                                       card.getType() === 'character'
            },
            handler: context => {
                this.game.promptForIcon(this.controller, this, icon => {
                    let sandSnakes = this.controller.filterCardsInPlay(card => card.getType() === 'character' && card.hasTrait('Sand Snake'));
                    this.untilEndOfPhase(ability => ({
                        match: context.target,
                        effect: ability.effects.removeIcon(icon)
                    }));

                    this.untilEndOfPhase(ability => ({
                        match: sandSnakes,
                        effect: ability.effects.addIcon(icon)
                    }));

                    this.game.addMessage('{0} uses {1} to remove {2} {3} icon from {4} and have each Sand Snake character they control gain it',
                        this.controller, this, icon === 'intrigue' ? 'an' : 'a', icon, context.target);
                });
            }
        });
    }
}

ObellaSand.code = 'SK01009';

module.exports = ObellaSand;

const DrawCard = require('../../drawcard.js');

class GreyWind extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ faction: 'stark', unique: true });
        this.whileAttached({
            effect: ability.effects.addKeyword('Intimidate')
        });
        this.whileAttached({
            effect: ability.effects.modifyStrength(1)
        });

        this.interrupt({
            when: {
                onCarhacterKilled: event => event.card === this 
            },
            cost: ability.costs.removeSelfFromGame(),
            target: {
                cardCondition: card => card.location === 'play area' && card.getType() === 'character' && card.getStrength() <= 3,
                gameAction: 'kill'
            },          
            handler: context => {
                this.game.addMessage('{0} removes {1} to kill {2}', this.controller, this, context.target);
                this.game.killCharacter(context.target);

            }
        });
    }
}

GreyWind.code = '50014';

module.exports = GreyWind;

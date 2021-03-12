const DrawCard = require('../../drawcard.js');

class WeGuardTheWay extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                afterChallenge: event => event.challenge.loser === this.controller
            },
            target: {
                cardCondition: card => card.location === 'play area' && card.getType() === 'character' && card.getStrength() <= this.controller.getNumberOfUsedPlots()
            },
            handler: context => {
                context.target.owner.returnCardToHand(context.target, false);
                this.game.addMessage('{0} uses {1} to return {2} to {3}\'s hand',
                    context.player, this, context.target, context.target.owner);
            }
        });
    }
}

WeGuardTheWay.code = '50090';

module.exports = WeGuardTheWay;

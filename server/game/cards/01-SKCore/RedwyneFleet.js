const DrawCard = require('../../drawcard.js');

class RedwyneFleet extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                afterChallenge: event =>
                    event.challenge.winner === this.controller &&
                    this.hasSingleParticipatingChar()
            },
            cost: ability.costs.sacrificeSelf(),
	    target: {
                cardCondition: card => card.location === 'play area' && card.getType() === 'character' && card.isParticipating() && card.kneeled,
                gameAction: 'stand'
	    },
            handler: context => {
                context.player.standCard(context.target);
		    if(this.controller.canGainGold()) {
                      this.game.addGold(this.controller, 1);
                      this.game.addMessage('{0} uses {1} to stand {2} and gain 1 gold', this.controller, this, context.target);
		    }   
            }
        });
    }
    hasSingleParticipatingChar() {
        if(this.game.currentChallenge.attackingPlayer === this.controller) {
            return this.game.currentChallenge.attackers.length === 1;
        }
        return this.game.currentChallenge.defenders.length === 1;
    }


}

RedwyneFleet.code = '50076';

module.exports = RedwyneFleet;

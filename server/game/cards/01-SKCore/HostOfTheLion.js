const DrawCard = require('../../drawcard.js');

class HostOfTheLion extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.isAttacking() && this.opponentHoldsLessCards(),
            match: this,
            effect: ability.effects.modifyStrength(4)
        });
	this.action({
            title: 'Stand HostOfTheLion',
            phase: 'challenge',
            limit: ability.limit.perPhase(2),
            cost: ability.costs.payGold(3),
            handler: () => {
                this.controller.standCard(this);
                this.game.addMessage('{0} pays 3 gold to stand {1}', this.controller, this);
            }
         });

    }
    opponentHoldsLessCards() {
        let challenge = this.game.currentChallenge;

        if(!challenge) {
            return false;
        }

        return challenge.attackingPlayer === this.controller &&
               this.controller.hand.length > challenge.defendingPlayer.hand.length;
    }
}

HostOfTheLion.code = '50067';

module.exports = HostOfTheLion;

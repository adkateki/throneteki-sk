const DrawCard = require('../../drawcard.js');

class SerJacelynBywater extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.opponentHoldsLessCards(),
            match: this,
            effect: ability.effects.doesNotKneelAsDefender()
        });
        this.forcedReaction({
            when: {
                afterChallenge: event => event.challenge.loser === this.controller && event.challenge.challengeType === 'intrigue'
            },
            handler: () => {
                this.game.addMessage('{0} is forced by {1} to kneel {1}', this.controller, this);
                this.controller.kneelCard(this);
            }
        });
	
    }
    opponentHoldsLessCards() {
        let challenge = this.game.currentChallenge;

        if(!challenge) {
            return false;
        }

        return challenge.defendingPlayer === this.controller &&
               this.controller.hand.length > challenge.attackingPlayer.hand.length;
    }

}

SerJacelynBywater.code = '50047';

module.exports = SerJacelynBywater;


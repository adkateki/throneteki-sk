const DrawCard = require('../../drawcard.js');

class CrownOfTheIronThrone extends DrawCard {
    setupCardAbilities(ability) {
        this.forcedInterrupt({
            when: {
                onDominanceDetermined: event => this.controller !== event.winner 
            },
            handler: (context) => {
                this.game.resolveGameAction(
                    GameActions.sacrificeCard({ card: this }),
                    context
                );
                context.replaceHandler(() => {
		    //save the winner of dominance on the game object in order to use this information in determining the winner of the game after the time limit has expired
		    this.game.winnerOfDominanceInLastRound = this.controller;
		    if(this.dominanceWinner.canGainFactionPower()) {
			this.game.addMessage('{0} uses {1} to win dominance', this.controller, this);
			this.game.addPower(this.dominanceWinner, 1);
		    } else {
			this.game.addMessage('{0} uses {1} to win dominance, but cannot gain power for their faction', this.controller, this);
		    }
                });               
            }
        });
    }


}

CrownOfTheIronThrone.code = '50060';

module.exports = CrownOfTheIronThrone;

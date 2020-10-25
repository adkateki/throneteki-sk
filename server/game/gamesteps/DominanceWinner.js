const BaseStep = require('./basestep');

class DominanceWinner extends BaseStep {
    constructor(game, dominanceWinner) {
        super(game);
	this.dominanceWinner = dominanceWinner;
    }

    continue() {
        if(this.dominanceWinner) {
            //save the winner of dominance on the game object in order to use this information in determining the winner of the game after the time limit has expired
            this.game.winnerOfDominanceInLastRound = this.dominanceWinner;
            if(this.dominanceWinner.canGainFactionPower()) {
                this.game.addMessage('{0} wins dominance ({1} vs {2})', this.dominanceWinner, highestDominance, lowestDominance);
                this.game.addPower(this.dominanceWinner, 1);
            } else {
                this.game.addMessage('{0} wins dominance, but cannot gain power for their faction', this.dominanceWinner);
            }
        } else {
            this.game.addMessage('There was a tie for dominance');
            this.game.addMessage('No one wins dominance');
        }
	return true;
    }


}

module.exports = DominanceWinner;

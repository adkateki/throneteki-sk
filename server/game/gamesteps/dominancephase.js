const Phase = require('./phase.js');
const SimpleStep = require('./simplestep.js');
const ActionWindow = require('./actionwindow.js');
const DominanceWinner = require('./DominanceWinner.js');

class DominancePhase extends Phase {
    constructor(game) {
        super(game, 'dominance');
        this.initialise([
            new SimpleStep(game, () => this.determineWinner()),
            new ActionWindow(this.game, 'After dominance determined', 'dominance')
        ]);
    }

    determineWinner() {
        var highestDominance = 0;
        var lowestDominance = 0;
        var dominanceWinner = undefined;

        for(let player of this.game.getPlayers()) {
            var dominance = player.getDominance();

            lowestDominance = dominance;

            if(dominance === highestDominance) {
                dominanceWinner = undefined;
            }

            if(dominance > highestDominance) {
                lowestDominance = highestDominance;
                highestDominance = dominance;
                dominanceWinner = player;
            } else {
                lowestDominance = dominance;
            }
        }

//        this.game.raiseEvent('onDominanceDetermined', { winner: dominanceWinner});
        this.game.raiseEvent('onDominanceDetermined', { winner: dominanceWinner }, () => {
            this.game.queueStep(new DominanceWinner(this.game, dominanceWinner));
        });
    }
}

module.exports = DominancePhase;

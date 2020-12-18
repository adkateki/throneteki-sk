const AllPlayerPrompt = require('./allplayerprompt');
const RematchPrompt = require('./RematchPrompt');
const ReportPrompt = require('./ReportPrompt');

class GameWonPrompt extends AllPlayerPrompt {
    constructor(game, winner) {
        super(game);
        this.winner = winner;
        this.clickedButton = {};
    }

    completionCondition(player) {
        return !!this.clickedButton[player.name] || this.game.disableWonPrompt;
    }

    activePrompt() {
        return {
            promptTitle: 'Game Won',
            menuTitle: this.winner === null ? 'Game ends in a draw' : this.winner.name + ' has won the game!',
            buttons: [
                { arg: 'continue', text: 'Continue Playing' },
                { arg: this.game.getNumberOfPlayers()>1 && !this.isTourney ? 'report' : 'rematch', text: this.game.getNumberOfPlayers()>1 && !this.isTourney ? 'Report the game' : 'Rematch' }
            ]
        };
    }

    waitingPrompt() {
        return { menuTitle: this.game.getPlayers().filter(player=>!player.left)<2 ? 'Waiting for opponent to choose to continue' : 'No opponent on the other side' };
    }

    onMenuCommand(player, arg) {

        this.clickedButton[player.name] = true;

        if(arg === 'rematch') {
            this.game.addMessage('{0} would like a rematch', player);
            this.game.queueStep(new RematchPrompt(this.game, player));

            return true;
        }
        if(arg === 'report') {
            this.game.addMessage('{0} would like to report', player);
            if(this.game.getPlayers().filter(player => !player.left )==1){
               !this.game.reported && this.game.queueStep(new ReportPrompt(this.game, player));
	    }
            else{
               !this.game.reported && this.game.report();
            }

            return true;
        }
        if(arg === 'continue') {
            this.game.addMessage('{0} would like to continue.', player);

            return true;
        }

        return true;
    }
}

module.exports = GameWonPrompt;

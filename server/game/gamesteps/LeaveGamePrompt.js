const AllPlayerPrompt = require('./allplayerprompt');
const ReportPrompt = require('./ReportPrompt');

class GameWonPrompt extends AllPlayerPrompt {
    constructor(game, playerLeft) {
        super(game);
        this.playerLeft = playerLeft;
        this.clickedButton = {};
    }

    completionCondition(player) {
        return !!this.clickedButton[player.name] || this.game.disableWonPrompt;
    }

    activePrompt() {
        return {
            promptTitle: this.playerLeft.name + 'has left the game',
            menuTitle: 'No opponent on the other side',
            buttons: [{ arg: 'report', text: 'Claim your achievements'}, {arg:'continue', text: 'Continue without claim'}]
        };
    }

    waitingPrompt(player) {
        return { menuTitle: 'Leave the game'};
    }

    onMenuCommand(player, arg) {

        this.clickedButton[player.name] = true;

        if(arg === 'report') {
            this.game.addMessage('{0} reports the game', player);
            player.mustReport = false;
            this.game.recordWinner(player,'concede');
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

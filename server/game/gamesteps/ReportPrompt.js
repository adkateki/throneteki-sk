const AllPlayerPrompt = require('./allplayerprompt');

class ReportPrompt extends AllPlayerPrompt {
    constructor(game, requestingPlayer) {
        super(game);

        this.requestingPlayer = requestingPlayer;
        this.completedPlayers = new Set([requestingPlayer]);
        this.cancelled = false;
    }

    completionCondition(player) {
        return this.cancelled || this.completedPlayers.has(player);
    }

    activePrompt() {
        return {
            menuTitle: `${this.requestingPlayer.name} would like to report the game result. Allow?`,
            buttons: [
                { arg: 'yes', text: 'Yes' },
                { arg: 'no', text: 'No' }
            ]
        };
    }

    waitingPrompt() {
        return {
            menuTitle: 'Waiting for opponent to agree to report'
        };
    }

    onMenuCommand(player, arg) {
        if(arg === 'yes') {
            this.game.addAlert('info', '{0} agrees to report the game', player);
            this.completedPlayers.add(player);
        } else {
            this.game.addAlert('info', '{0} would not like to report, wait for TO.', player);
            this.cancelled = true;
        }

        return true;
    }

    onCompleted() {
        if(this.cancelled) {
            return;
        }

        this.game.report();
        this.game.addAlert('sucess', '{0} reports the game', this.requestingPlayer);
    }
}

module.exports = ReportPrompt;

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
        let reportPrompt = this.game.getNumberOfPlayers()>1 && this.game.event._id!='none' && this.game.headless;
        let continueButton = { arg: 'continue', text: 'Continue Playing' };
        let mainButton = reportPrompt ? { arg: 'report', text: 'Report the game' } : { arg: 'rematch', text: 'Rematch'};
        return {
            promptTitle: 'Game Won',
            menuTitle: this.winner === null ? 'Game ends in a draw' : this.winner.name + ' has won the game!',
            buttons: [ reportPrompt ? mainButton : (continueButton, mainButton) ]
        };
    }

    waitingPrompt(player) {
        let reportPrompt = this.game.getNumberOfPlayers()>1 && this.game.event._id!='none';
        if(reportPrompt && player.mustReport) return { menuTitle: 'Waiting for opponent to report the game also'};
        return { menuTitle: 'Waiting for opponent to choose to continue'};
       // return { menuTitle: this.game.getPlayers().filter(player=>!player.left).length>=2 ? 'Waiting for opponent to choose to continue' : 'No opponent on the other side' };
    }

    onMenuCommand(player, arg) {

        this.clickedButton[player.name] = true;

        if(arg === 'rematch') {
            this.game.addMessage('{0} would like a rematch', player);
            this.game.queueStep(new RematchPrompt(this.game, player));

            return true;
        }
        if(arg === 'report') {
            this.game.addMessage('{0} reports the game', player);
            player.mustReport = false;
            let availablePlayers = this.game.getPlayers().filter( avPlayer => !avPlayer.left);
            let reportedPlayers = availablePlayers.filter( avPlayer => avPlayer.mustReport ).length==0; 
            if(reportedPlayers && !this.game.reported){ 
                 this.game.report(); 
                 this.game.addMessage('Game succesfully reported. Winner takes his achievements.');
            }
            
         //   if(this.game.getPlayers().filter(player => !player.left ).length>=2){
         //      !this.game.reported && this.game.queueStep(new ReportPrompt(this.game, player));
	 //   }
         //   else{
         //      !this.game.reported && this.game.report();
         //   }

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

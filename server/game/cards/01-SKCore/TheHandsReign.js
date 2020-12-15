const PlotCard = require('../../plotcard');

class TheHandsReign extends PlotCard {
    setupCardAbilities(ability) {
        this.forcedReaction({
	   when: {
	      onCardPlayed: event => event.card.getType() === 'event'
	   },
           handler: (context) => {
                for(let opponent of this.game.getOpponents(context.event.card.controller)) {
		    this.game.promptWithMenu(opponent, this, {
			activePrompt: {
			    menuTitle: 'Draw 1 card & gain 1 power from ' + this.name + '?',
			    buttons: [
				{ text: 'Yes', method: 'drawAndPower' },
				{ text: 'No', method: 'pass' }
			    ]
			},
			source: this
		    });
                }
            }
        });
    }
    drawAndPower(otherPlayer) {
        if(otherPlayer.canDraw()) {
            otherPlayer.drawCardsToHand(1);
            this.game.addMessage('{0} uses {1} to draw 1 card', otherPlayer, this);
        }
        if(otherPlayer.canGainFactionPower()) {
            this.game.addPower(otherPlayer, 1);
            this.game.addMessage('{0} uses {1} to gain 1 power', otherPlayer,this);
        }
        return true;
    }

    pass(otherPlayer) {
        this.game.addMessage('{0} declines to draw 1 card and gain 1 power', otherPlayer);

        return true;
    }
}

TheHandsReign.code = '50062';

module.exports = TheHandsReign;

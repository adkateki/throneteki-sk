const PlotCard = require('../../plotcard.js');
const ChallengeTypes = require('../../ChallengeTypes');

class BattleOfCastleBlack extends PlotCard {
    setupCardAbilities() {
        this.whenRevealed({
            handler: context => {
                this.remainingPlayers = this.game.getPlayersInFirstPlayerOrder();
                this.proceedToNextStep();
            }
        });
    }
    proceedToNextStep() {
        while(this.remainingPlayers.length > 0) {
            let currentPlayer = this.remainingPlayers.shift();
	    this.game.promptWithMenu(currentPlayer, this, {
		activePrompt: {
		    menuTitle: 'Select a challenge type',
		    buttons: ChallengeTypes.asButtons({ method: 'extraChallengeType' })
		},
		source: this
	    });
        } 
    }
    extraChallengeType(player, challengeType) {
        this.game.addMessage('{0} choose {1} as the extra challenge for {2}',
            player, this, challengeType);

        this.lastingEffect(ability => ({
            until: {
                onCardEntersPlay: event => event.card.getType() === 'plot' && event.card.controller === player
            },
            targetController: 'current',
            effect: ability.effects.mayInitiateAdditionalChallenge(challengeType)
        }));

        return true;
    }
}

BattleOfCastleBlack.code = '50021';

module.exports = BattleOfCastleBlack;

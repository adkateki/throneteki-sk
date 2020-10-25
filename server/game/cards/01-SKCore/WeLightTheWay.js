const DrawCard = require('../../drawcard.js');

class WeLightTheWay extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Raise claim by 1',
            max: ability.limit.perChallenge(1),
            condition: () => this.game.isDuringChallenge() && this.game.currentChallenge.attackingPlayer === this.controller && this.game.currentChallenge.attackers.length === 1,
            handler: () => {
                this.untilEndOfChallenge(ability => ({
                    match: card => card === this.controller.activePlot,
                    effect: ability.effects.modifyClaim(1)
                }));

                this.game.addMessage('{0} plays {1} to raise the claim value on their revealed plot card by 1 until the end of the challenge',
                    this.controller, this);
            }
        });
    }
}

WeLightTheWay.code = '50056';

module.exports = WeLightTheWay;

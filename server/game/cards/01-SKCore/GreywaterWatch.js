const PlotCard = require('../../plotcard.js');

class GreywaterWatch extends PlotCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Kneel a character to have it participate in the current challenge',
            phase: 'challenge',
            condition: () => this.game.isDuringChallenge(),
            cost: [
                ability.costs.kneelSelf(),
                ability.costs.kneel(card => card.getType() === 'character' && card.isFaction('stark') && card.canParticipateInChallenge()),
            ]
            handler: context => {
                let card = context.costs.kneel;
                this.game.currentChallenge.addParticipantToSide(context.player, card);

                this.game.addMessage('{0} uses {1} to kneel {2} and add them to the challenge', context.player, this, card);
            }
        });
    }

}

GreywaterWatch.code = '50053';

module.exports = GreywaterWatch;

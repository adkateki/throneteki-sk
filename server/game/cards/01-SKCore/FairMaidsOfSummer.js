const DrawCard = require('../../drawcard.js');

class FairMaidsOfSummer extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Give summer trait to revealed plot',
	    cost: ability.costs.kneelFactionCard(),
            handler: context => {
                this.untilEndOfPhase(ability => ({
                    match: card => card === card.controller.activePlot && card.controller === this.controller,
                    effect: ability.effects.addTrait('Summer')

                }));
                this.game.addMessage('{0} plays {1} to give Summer trait to his or her revealed plot card',
                    context.player, this);
                if(context.player.drawCardsToHand(1).length > 0) {
                    this.game.addMessage('{0} draws 1 card for {1}', context.player, this);
                }
            }
        });
    }
}

FairMaidsOfSummer.code = '50096';

module.exports = FairMaidsOfSummer;


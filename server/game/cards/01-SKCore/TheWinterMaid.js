const DrawCard = require('../../drawcard.js');

class TheWinterMaid extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Give winter trait to revealed plot',
	    cost: ability.costs.kneelFactionCard(),
            handler: context => {
                this.untilEndOfPhase(ability => ({
                    match: card => card === card.controller.activePlot && card.controller === this.controller,
                    effect: ability.effects.addTrait('Winter')

                }));
                this.game.addMessage('{0} plays {1} to give Winter trait to his or her revealed plot card',
                    context.player, this);
                if(context.player.drawCardsToHand(1).length > 0) {
                    this.game.addMessage('{0} draws 1 card for {1}', context.player, this);
                }
            }
        });
    }
}

TheWinterMaid.code = '50054';

module.exports = TheWinterMaid;




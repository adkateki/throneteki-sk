const DrawCard = require('../../drawcard.js');

class Orkmont extends DrawCard {
    setupCardAbilities(ability) {
        this.interrupt({
            when: {
                onCompareInitiative: () => true
            },
            cost: ability.costs.kneelSelf(),
            handler: () => {
                let initiativeBonus = this.game.getPlayers().some(player => player.activePlot && player.activePlot.hasTrait('Winter')) ? 3 : 1;
                this.game.addMessage('{0} uses {1} to increase initiative on their plot by {2}', this.controller, this, initiativeBonus);
                this.untilEndOfPhase(ability => ({
                    match: card => card === this.controller.activePlot,
                    effect: ability.effects.modifyInitiative(initiativeBonus)
                }));
                this.game.once('onInitiativeDetermined', event => {
                    if(event.winner === this.controller && this.controller.canDraw()) {
			let bottomCard = this.controller.drawDeck.slice(-1)[0];
			this.controller.moveCard(bottomCard, 'hand');
			this.game.addMessage('{0} uses {1} to draw the bottom card of their deck',
                           this.controller, this);
                    }
                });
            }
        });
    }
}

Orkmont.code = '50066';

module.exports = Orkmont;

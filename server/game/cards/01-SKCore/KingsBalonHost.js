const DrawCard = require('../../drawcard.js');

class KingsBalonHost extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.controller.firstPlayer,
            match: this,
            effect: ability.effects.modifyStrength(2)
        });
        this.reaction({
            when: {
                onCardEntersPlay: event => event.card === this
            },
            handler: () => {
                for(let opponent of this.game.getOpponents(this.controller)) {
		    if(this.game.anyPlotHasTrait('War')) {
                        opponent.discardFromDraw(3);

                        this.game.addMessage('{0} uses {1} to discard 3 cards from each opponent\'s deck', this.controller, this);
		    }else{
                        opponent.discardFromDraw(1);
                        this.game.addMessage('{0} uses {1} to discard 1 card from each opponent\'s deck', this.controller, this);
		    }
                }
                
            }
        });
    }
}

KingsBalonHost.code = '50045';

module.exports = KingsBalonHost;

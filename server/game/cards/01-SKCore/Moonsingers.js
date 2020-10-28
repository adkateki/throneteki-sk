const AgendaCard = require('../../agendacard.js');

class Moonsingers extends AgendaCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onTokenPlaced: event => true
            },
            cost: ability.costs.kneelFactionCard(),
            handler: context => {
                let tokenCard=context.event.card;
                let tokenType=context.event.type;
		if(tokenCard.tokens[tokenType]<3){
	           tokenCard.modifyToken(tokenType, 2)
                }
            }
        });
	this.action({
            cost: ability.costs.kneelFactionCard(),
            handler: context => {
                let tokenCard=context.event.card;
                let tokenType=context.event.type;
		if(tokenCard.tokens[tokenType]<3){
	           tokenCard.modifyToken(tokenType, 2)
                }
            }
        })
    }

    keywordSelected(player, keyword) {
        this.untilEndOfPhase(ability => ({
            match: this.target,
            effect: ability.effects.addKeyword(keyword)
        }));

        this.game.addMessage('{0} uses {1} and kneels their faction card to have {2} gain {3} until the end of the phase',
            this.controller, this, this.target, keyword);

        return true;
    }
}

Moonsingers.code = '50041';

module.exports = Moonsingers;

const AgendaCard = require('../../agendacard.js');
const {Tokens} = require('../../Constants');

class Moonsingers extends AgendaCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onTokenPlaced: event => {
			     this.eventTokenCard=event.card;
                             this.eventToken=event.token;
			     return event.source.controller === this.controller && event.card.tokens[event.token]<3;

			},
                onGoldTransferred: event => { 
                        this.eventToken=Tokens.gold;
			if( event.target.getGameElementType() === 'card'){ 
                                 if(event.source.getGameElementType() === 'player'){
                                     this.eventTokenCard=event.target;
				     return (event.source===this.controller && event.target.tokens[Tokens.gold]<3);
				 }
                                else{
				     this.eventTokenCard=event.target;
                                     return event.source.controller === this.controller && event.target.tokens[Tokens.gold]<3;
                                 }
                        }
			
                        return false;
                }
            },
            cost: ability.costs.kneelFactionCard(),
            handler: context => {
                let tokenCard=this.eventTokenCard;
                let tokenType=this.eventToken;
	        tokenCard.modifyToken(tokenType, 2);
                this.game.addMessage('{0} uses {1} to place two extra tokens on {2}', this.controller, this, tokenCard);
            }
        });
        this.action({
            title: 'Discard a token from a card you control.',
            cost: ability.costs.kneelFactionCard(),
            target: {
                type: 'select',
                cardCondition: card => (
                  card.controller === this.controller &&
                  Object.keys(card.tokens).length !== 0
		)
            },
            handler: context => {
                this.targetCard=context.target;
		let buttons = Object.keys(context.target.tokens).map(token => {
		   return { method: 'tokenSelected', arg: token, card: context.target, text: token };
                });

                buttons.push({ text: 'Continue', method: 'continueWithoutSelecting' });

                this.game.promptWithMenu(this.controller, this, {
                    activePrompt: {
                        menuTitle: 'Select token',
                        buttons: buttons
                    },
                    source: this
                });
            }
        });
    }

    tokenSelected(player, token) {
	this.targetCard.modifyToken(token, -1);
        this.game.addMessage('{0} uses {1} and discards 1 token from {2}', player, this, this.targetCard);
        return true;
    }

    continueWithoutSelecting() {
        return true;
    }

}

Moonsingers.code = '50041';

module.exports = Moonsingers;

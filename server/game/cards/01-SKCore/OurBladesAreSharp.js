const DrawCard = require('../../drawcard');

class OurBladesAreSharp extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCharacterKilled: event => event.cardStateWhenKilled.controller === this.controller,
                onSacrificed: event => event.card.getType() === 'character' && event.cardStateWhenSacrificed.controller === this.controller
            },
            target: {
                cardCondition: (card, context) => card.location === 'play area' && card !== context.event.card
            },
            handler: context => {
                let keywords = ['Intimidate', 'Stealth', 'Renown', '+3 STR'];

                this.selectedCard = context.target;

                let buttons = keywords.map(keyword => {
                    return { text: keyword, method: 'keywordSelected', arg: keyword.toLowerCase() };
                });

                this.game.promptWithMenu(this.controller, this, {
                    activePrompt: {
                        menuTitle: 'Select a keyword',
                        buttons: buttons
                    },
                    source: this
                });
            }
        });
    }
    keywordSelected(player, keyword) {
        if(keyword === '+3 str'){
	    this.untilEndOfPhase(ability => ({
		match: this.selectedCard,
		effect: ability.effects.modifyStrength(3)
	    }));
        } else{
	    this.untilEndOfPhase(ability => ({
		match: this.selectedCard,
		effect: ability.effects.removeKeyword(keyword)
	    }));
        }
        this.game.addMessage('{0} uses {1} to give {2} to {3}', player, this, keyword, this.selectedCard);

        return true;
    }
}

OurBladesAreSharp.code = '50094';

module.exports = OurBladesAreSharp;

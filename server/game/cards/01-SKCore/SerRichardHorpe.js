const DrawCard = require('../../drawcard.js');

class SerRichardHorpe extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.power >= 1,
            match: this,
            effect: ability.effects.addKeyword('renown')
        });
        this.action({
            title: 'Move 1 power to another character',
            target: {
                type: 'select',
                activePromptTitle: 'Select a character with power',
                cardCondition: card => card.location === 'play area' && card.getType() === 'character' && card.power >=1  && card.controller === this.controller
            },
            handler: context => {
                let oldCard = context.target;
                this.game.promptForSelect(context.player, {
                    cardCondition: card => (
                        card.getType() === 'character' &&
                        card !== oldCard &&
                        card.location === 'play area'
                    ),
                    onSelect: (player, card) => {
                          this.game.movePower(oldCard, card, 1);
                          this.game.addMessage('{0} uses {1} to move 1 power fom {2} to {3}', context.player, this, oldCard, card);
                          return true;
                       }
                });
            }
        });
        
    }
}

SerRichardHorpe.code = '50099';

module.exports = SerRichardHorpe;

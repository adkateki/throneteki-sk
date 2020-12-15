const DrawCard = require('../../drawcard.js');
const {Tokens} = require('../../Constants');
const GameActions = require('../../GameActions');

class TheIronBank extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.game.currentPhase === 'marshal',
            match: this,
            effect: ability.effects.canSpendGold(spendParams => spendParams.activePlayer === this.controller)
        });
        this.reaction({
            when: {
                onIncomeCollected: event => event.player === this.controller && this.hasToken(Tokens.gold)
            },
            handler: (context) => {
                let interest = this.tokens[Tokens.gold];
               // this.modifyGold(interest);
                this.game.resolveGameAction(
                    GameActions.placeToken(() => ({ card: this, token: Tokens.gold, amount: interest, source: this })),
                    context
                );
                this.game.addMessage('{0} uses {1} to place {2} gold from the treasury on {1}', this.controller, this, interest);
            }
        });
    }
}

TheIronBank.code = '08019';

module.exports = TheIronBank;

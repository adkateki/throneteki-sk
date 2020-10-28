const DrawCard = require('../../drawcard.js');
const {flatten} = require('../../../Array');
class InvasionOfTheHarbor extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            max: ability.limit.perChallenge(1),
            when: {
                afterChallenge: event => event.challenge.winner === this.controller && event.challenge.isUnopposed()
            },
            cost: [
                ability.costs.payXGold(() => this.getMinimumCost(), () => 99)
            ],
            target: {
                activePromptTitle: 'Select a location in an opponent discard pile',
                cardCondition: (card, context) => card.location === 'discard pile' && card.controller === this.game.currentChallenge.loser && (card.getType() === 'location') && this.controller.canPutIntoPlay(card) && (context.xValue ? (card.getPrintedCost() <= context.xValue) : (card.getPrintedCost() <= this.controller.getSpendableGold()))
            },
            handler: context => {
                context.player.putIntoPlay(context.target);
                this.game.addMessage('{0} plays {1} to put {2} into play', context.player, this, context.target);
            }
        });
    }
    getMinimumCost() {
        return this.game.filterCardsInPlay(card => card.getType() === 'location' && card.location === 'discard pile')
            .map(card => card.getPrintedCost())
            .reduce(((acc, val) => Math.min(acc, val)), 0);
    }
    

}

InvasionOfTheHarbor.code = '50046';

module.exports = InvasionOfTheHarbor;


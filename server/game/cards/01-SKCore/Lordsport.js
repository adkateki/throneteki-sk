const DrawCard = require('../../drawcard');

class Lordsport extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Put attachment into play',
            cost: ability.costs.kneelSelf(),
            target: {
                cardCondition: card => (
                    card.controller === this.controller &&
                    (card.location === 'hand' || card.location === 'discard pile') &&
                    card.getType() === 'attachment' &&
                    card.isFaction('greyjoy') &&
                    this.controller.canPutIntoPlay(card)
                )
            },
            message: '{player} uses {source} and to put {target} into play',
            handler: context => {
                context.player.putIntoPlay(context.target);
            }
        });
    }
}

Lordsport.code = '50086';

module.exports = Lordsport;

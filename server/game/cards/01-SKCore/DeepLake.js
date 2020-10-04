const DrawCard = require('../../drawcard.js');

class DeepLake extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Choose character',
            phase: 'challenge',
            target: {
                cardCondition: card => card.location === 'play area' && card.getType() === 'character'
            },
            handler: context => {
                this.untilEndOfPhase(() => ({
                    match: context.target,
                    effect: [
			ability.effects.loseFaction('stark'),
			ability.effects.loseFaction('lannister'),
			ability.effects.loseFaction('tyrell'),
			ability.effects.loseFaction('martell'),
			ability.effects.loseFaction('targaryen'),
			ability.effects.loseFaction('greyjoy'),
			ability.effects.loseFaction('baratheon'),
			ability.effects.addFaction('thenightswatch')
                    ]
                }));

                this.game.addMessage('{0} use {1} to give nw affiliation to {2}',
                    context.player, this, context.target);
            }
        });
        
    }

    onCardSelected(player, card) {
        this.controller.putIntoPlay(card);
        this.game.addMessage('{0} chooses {1} for {2}', player, card, this);
        return true;
    }

    cancelSelection(player) {
        this.game.addAlert('danger', '{0} does not select a character for {1}', player, this);
        return true;
    }
}

DeepLake.code = '50031';

module.exports = DeepLake;

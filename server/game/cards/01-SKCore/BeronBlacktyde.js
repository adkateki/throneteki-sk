const DrawCard = require('../../drawcard');

class BeronBlacktyde extends DrawCard {
    setupCardAbilities() {
	this.reaction({
            when: {
                onCardEntersPlay: event => event.card === this && event.playingType === 'marshal'
            },
            target: {
                cardCondition: card => card.controller === this.controller && card.location === 'dead pile' && card.getType() === 'character' && card.isFaction('greyjoy'),
            },
	    handler: context => {
                this.game.addMessage('{0} use {1} to return {2} to hand', context.player, this, context.target);
                context.player.returnCardToHand(context.target);
            }
	});
    }
}

BeronBlacktyde.code = '50005';

module.exports = BeronBlacktyde;

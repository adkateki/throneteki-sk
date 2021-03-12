const DrawCard = require('../../drawcard.js');

class SonsOfTheHarpy extends DrawCard {
    setupCardAbilities() {
        this.interrupt({
            when: {
                onCardEntersPlay: event => event.card === this
            },
            target: {
                activePromptTitle: 'Select an attachment',
                cardCondition: card => card.location === 'play area' && card.getType() === 'attachment'
            },
            handler: context => {
                context.target.owner.discardCard(context.target);
                this.game.addMessage('{0} uses {1} to discard {2}', this.controller, this, context.target);
            }
        });
    }
}

SonsOfTheHarpy.code = '50037';

module.exports = SonsOfTheHarpy;

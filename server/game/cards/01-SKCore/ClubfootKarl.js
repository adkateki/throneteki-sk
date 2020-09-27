const DrawCard = require('../../drawcard.js');

class ClubfootKarl extends DrawCard {
    setupCardAbilities() {
        this.forcedReaction({
            when: {
                onCardEntersPlay: event => event.card === this
            },
            target: {
                cardCondition: card =>
                    card.location === 'play area'
                    && card.controller === this.controller
                    && card.getType() === 'character',
                gameAction: 'kill'
            },
            handler: context => {
                this.game.addMessage('{0} is forced by {1} to kill a character', this.controller, this);
                context.target.controller.killCharacter(context.target);
            }
        });
    }

}

ClubfootKarl.code = 'SK01011';

module.exports = ClubfootKarl;

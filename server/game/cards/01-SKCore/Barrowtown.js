const DrawCard = require('../../drawcard');

class Barrowtown extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                'onSacrificed:aggregate': event => this.hasCharacterYouControlled(event, 'cardStateWhenSacrificed'),
            },
            handler: () => {
                this.controller.drawCardsToHand(1);
            }
        });
    }

   }

Barrowtown.code = '50034';

module.exports = Barrowtown;

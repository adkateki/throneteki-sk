const DrawCard = require('../../drawcard.js');
const Conditions = require('../../Conditions');
const GameActions = require('../../GameActions');

class AlaricOfEysen extends DrawCard {
    setupCardAbilities() {
        this.reaction({
            when: {
                onCardEntersPlay: event => event.card === this
            },
            gameAction: GameActions.search({
                title: 'Select a card',
                match: { trait: 'Song' },
                message: '{player} uses {source} to search their deck and add {searchTarget} to their hand',
                cancelMessage: '{player} uses {source} to search their deck but does not find a card',
                gameAction: GameActions.addToHand(context => ({
                    card: context.searchTarget
                }))
            })
        });
    }
}

AlaricOfEysen.code = '50075';

module.exports = AlaricOfEysen;

const DrawCard = require('../../drawcard.js');
const Conditions = require('../../Conditions');
const GameActions = require('../../GameActions');

class MorynTyrell extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                onCardEntersPlay: event => event.card === this
            },
            gameAction: GameActions.search({
                title: 'Select a card',
                match: { trait: 'The Reach' },
                message: '{player} uses {source} to search their deck and add {searchTarget} to their hand',
                cancelMessage: '{player} uses {source} to search their deck but does not find a card',
                gameAction: GameActions.addToHand(context => ({
                    card: context.searchTarget
                }))
            })
        });

        this.persistentEffect({
            condition: () => this.getNumberOfTheReach() >= 3,
            match: this,
            effect: ability.effects.modifyStrength(2)
        });
    }

    getNumberOfTheReach() {
        return this.controller.getNumberOfCardsInPlay(card =>  card.getType() === 'location' && card.hasTrait('The Reach'));
    }
}

MorynTyrell.code = '50055';

module.exports = MorynTyrell;

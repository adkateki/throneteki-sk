const DrawCard = require('../../drawcard.js');

class Foamdrinker extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            match: card => card.name === 'Dagmer Cleftjaw',
            effect: ability.effects.modifyStrength(2)
        });
        this.reaction({
            when: {
                afterChallenge: event => this.controller === event.challenge.winner && event.challenge.isUnopposed()
            },
            title: 'Give character pillage',
            cost: ability.costs.kneelSelf(),
            target: {
                cardCondition: card => card.getType() === 'character' && card.location === 'play area' &&
                                       card.isParticipating() && card.isFaction('greyjoy')
            },
            handler: context => {
                this.untilEndOfPhase(ability => ({
                    match: context.target,
                    effect: ability.effects.addKeyword('Pillage')
                }));
            }
            
        });

    }
}

Foamdrinker.code = '50006';

module.exports = Foamdrinker;

const DrawCard = require('../../drawcard.js');

class TheSupportOfTheIronBank extends DrawCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Reduce Baratheon non-characters',
            phase: 'marshal',
            cost: ability.costs.kneelFactionCard(),
            handler: () => {
                this.untilEndOfPhase(ability => ({
                    effect: ability.effects.reduceCost({
                        playingTypes: ['marshal', 'play'],
                        amount: 1,
                        match: card => card.isFaction('baratheon') && card.getType() != 'character'
                    })
                }));

                this.game.addMessage('{0} plays {1} and kneels their faction card to reduce the cost of each {2} non-character they marshal or play this phase by 1',
                    this.controller, this, 'baratheon');
            }
        });
    }
}

TheSupportOfTheIronBank.code = 'SK01020';

module.exports = TheSupportOfTheIronBank;

const DrawCard = require('../../drawcard.js');

class RickardKarstarck extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.game.getPlayers().some(player => player.activePlot && player.activePlot.hasTrait('Winter')),
	    match: this,
            effect: [
                ability.effects.doesNotKneelAsAttacker()
            ]
        });
    }
}

RickardKarstarck.code = '50033';

module.exports = RickardKarstarck;

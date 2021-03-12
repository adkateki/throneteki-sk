const DrawCard = require('../../drawcard.js');

class BastardBoys extends DrawCard {
    setupCardAbilities(ability) {
        this.forcedReaction({
            when: {
                afterChallenge: event => event.challenge.winner === this.controller && this.isParticipating()
            },
            handler: context => {
                context.player.sacrificeCard(this);
            }
        });
    }
}

BastardBoys.code = '50074';

module.exports = BastardBoys;

const DrawCard = require('../../drawcard.js');

class LadyStoneheart extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.isParticipating(),
            match: card => card.getType() === 'character',
            targetController: 'any',
            effect: ability.effects.cannotBeSaved()
        });
        this.reaction({
            when: {
                onCharacterKilled: event => !event.card.isUnique()
            },
            limit: ability.limit.perPhase(1),
            handler: () => {
                this.controller.standCard(this);
                this.game.addMessage('{0} stands {1}', this.controller, this);
            }
        });
    }
}

LadyStoneheart.code = '50083';

module.exports = LadyStoneheart;

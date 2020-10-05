const DrawCard = require('../../drawcard');
const TextHelper = require('../../TextHelper');

class EuronsArmor extends DrawCard {
    setupCardAbilities(ability) {
        this.attachmentRestriction({ faction: 'greyjoy', unique: true });
        this.persistentEffect({
            match: this,
            effect: ability.effects.immuneTo(card => card.getType() === 'event')
        });
        this.interrupt({
            canCancel: true,
            when: {
                onCharacterKilled: event => event.card === this.parent && this.parent.canBeSaved() && event.allowSave,
                onCardReturnedToHand: event => event.card.getType() === 'character' && event.card === this.parent && this.parent.canBeSaved() && event.allowSave,
            },
            cost: ability.costs.kneelSelf(),
            handler: context => {
                let parent = context.cardStateWhenInitiated.parent;
                context.event.saveCard();
                this.game.addMessage('{0} kneels {1} to save {2}', this.controller, this, parent);
            }
        });


    }
}

EuronsArmor.code = '50025';

module.exports = EuronsArmor;

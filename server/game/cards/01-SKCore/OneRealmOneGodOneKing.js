const DrawCard = require('../../drawcard.js');

class OneRealmOneGodOneKing extends DrawCard {
    setupCardAbilities() {
        this.action({
            phase: 'standing'
            handler: () => {
                let str2 = this.game.filterCardsInPlay(card => card.getType() === 'character') && card.getPrintedCost() <= 2;
                if(str2.length > 0) {
                    for(let card of str2) {
                        card.controller.kneelCard(card);
                    }
                    this.game.addMessage('{0} use {1} to kneel characters with printed cost 2 or lower', this.controller,this);
                }
            }
        });
    }
}

OneRealmOneGodOneKing.code = '50040';

module.exports = OneRealmOneGodOneKing;

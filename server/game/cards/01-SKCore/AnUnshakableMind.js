const PlotCard = require('../../plotcard.js');

class AnUnshakableMind extends PlotCard {
    setupCardAbilities() {
        this.whenRevealed({
            handler: () => {
                let attachments = this.game.allCards.filter(card => card.getPrintedType() === 'attachment' && card.parent);
                for(let card of attachments) {
                    card.owner.discardCard(card);
                }
            }
        });
    }
}

AnUnshakableMind.code = 'SK01001';

module.exports = AnUnshakableMind;

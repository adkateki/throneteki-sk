const PlotCard = require('../../plotcard.js');

class CityFestival extends PlotCard {
    setupCardAbilities() {
        this.whenRevealed({
            handler: context => {
                   if(context.player.canGainGold()) {
                        let numGold = this.hasUsedCityPlot(context.player) ? 4 : 2;
                        let gold = this.game.addGold(context.player, numGold);
                    }
                    this.game.addMessage('{0} uses {1} to gain {2} gold', player, this, gold);
                }
        });
    }
    hasUsedCityPlot(player) {
        return this.game.allCards.some(card => (
            card.controller === player &&
            card.location === 'revealed plots' &&
            card.hasTrait('City')
        ));
    }
}

CityFestival.code = '50042';

module.exports = CityFestival;




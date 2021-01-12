const PlotCard = require('../../plotcard.js');
const {flatMap} = require('../../../Array');

class DestroyedBridge extends PlotCard {
    setupCardAbilities() {
        this.whenRevealed({
            handler: () => {
                let players = this.game.getPlayersInFirstPlayerOrder();
                let locations = flatMap(players, player => player.filterCardsInPlay(card => card.getType() === 'location' && card.getPrintedCost()<=2));
                for (let card of locations){
                   player.kneelCard(card); 
                }
            }
        });
    }
}

DestroyedBridge.code = '50082';

module.exports = DestroyedBridge;

const PlotCard = require('../../plotcard');

class AWarWithoutBanners extends PlotCard {
    setupCardAbilities(ability) {

        this.whenRevealed({

            message: '{player} uses {source} to kneel all faction cards',
            handler: context => {
                for(let player of this.game.getPlayersInFirstPlayerOrder()) {
                    this.controller.kneelCard(player.faction);
                }
            }
        });

    }
}

AWarWithoutBanners.code = '50002';

module.exports = AWarWithoutBanners;


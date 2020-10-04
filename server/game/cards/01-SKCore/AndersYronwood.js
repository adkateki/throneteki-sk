const DrawCard = require('../../drawcard.js');

class AndersYronwood extends DrawCard {
    setupCardAbilities(ability) {
        this.reaction({
            when: {
                afterChallenge: event => this.controller === event.challenge.loser
            },
            handler: context => {
                this.game.promptWithMenu(context.player, this, {
                    activePrompt: {
                        menuTitle: 'Select an icon for AndersYronwood',
                        buttons: ChallengeTypes.asButtons({ method: 'selectIcon' }).filter(button => ['military','intrigue', 'power'].includes(button.arg))
                    },
                    source: this
                });

            }
        });
    }
    selectIcon(player, icon) {
        this.untilEndOfPhase(ability => ({
            match: this,
            effect: ability.effects.addIcon(icon)
        }));

        this.game.addMessage('{0} gains a {1} icon',this, icon);
        return true;
    }

}

AndersYronwood.code = '50029';

module.exports = AndersYronwood;

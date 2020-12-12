/*eslint no-console:0 */
const fs = require('fs');
const path = require('path');
const _ = require('underscore');

class JsonAchievementSource {
    constructor(directory) {
        let data = this.loadAchiSetFiles(directory);
        this.achiSet = data.achiSets;
        this.achievements = data.achievements;
    }

    loadAchiSetFiles(directory) {
        let achiSets = [];
        let achievements = [];
        let files = fs.readdirSync(path.join(directory, 'achiSets'));
        for(let file of files) {
            let achiSet = JSON.parse(fs.readFileSync(path.join(directory, 'achiSets', file)));
            for(let achievement of achiSet.achievements) {
                achievement.achiSetCode = achiSet.code;
            }

            achiSets.push({ code: achiSet.code, name: achiSet.name, releaseDate: achiSet.releaseDate });
            achievements = achievements.concat(achiSet.achievements);
        }

        this.addLabelToAchievements(achievements);

        return {
            achievements: achievements,
            achiSets: achiSets
        };
    }

    addLabelToAchievements(achievements) {
        for(let achievement of achievements) {
            let achievementsByName = _.filter(achievements, filterAchievement => {
                return filterAchievement.name === achievement.name;
            });

            if(achievementsByName.length > 1) {
                achievement.label = achievement.name + ' (' + achievement.achiSetCode + ')';
            } else {
                achievement.label = achievement.name;
            }
        }
    }

    getAchievements() {
        return this.achievements;
    }

    getAchiSets() {
        return this.achiSet;
    }
}

module.exports = JsonAchievementSource;

const fs = require('fs');
const path = require('path');
const moment = require('moment');

const logger = require('../log.js');

class AchievementService {
    constructor(db) {
        this.achievements = db.get('achievements');
        this.achiSets = db.get('achiSets')
    }

    replaceAchievements(achievements) {
        return this.achievements.remove({})
            .then(() => this.achievements.insert(achievements));
    }

    replaceAchiSets(achievements) {
        return this.achiSets.remove({})
            .then(() => this.achiSets.insert(achievements));
    }


    getAllAchievements() {
        return this.achievements.find({})
            .then(result => {
                let achievements = {};

                for(let achievement of result) {
                    achievements[achievement.code] = achievement;
                }

                return achievements;
            }).catch(err => {
                logger.info(err);
            });
    }
    getAllAchievementsArray() {
        return this.achievements.find({});
    }
    getTitleAchievements() {
        return this.achievements.find({ type: 'title' })
            .then(achievements => {
                return achievements.reduce((memo, card) => {
                    memo[achievement.code] = card;
                    return memo;
                }, {});
            });
    }

    getAnyAchievements() {
        return this.achievements.find({ 
/*		$and: [
		    { agenda: { $exists: false} },
		    { faction: { $exists: false }}}
		]*/
	});

    }

    getActiveVersion(versions) {
        const now = moment();
        return versions.reduce((max, list) => {
            let effectiveDate = moment(list.date, 'YYYY-MM-DD');
            if(effectiveDate <= now && effectiveDate > moment(max.date, 'YYYY-MM-DD')) {
                return list;
            }

            return max;
        });
    }
}

module.exports = AchievementService;


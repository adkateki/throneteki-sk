const logger = require('../log.js');

class UserAchievementService {
    constructor(db) {
        this.userAchievements = db.get('userAchievements');
    }

    getById(id) {
        return this.userAchievements.findOne({ _id: id })
            .catch(err => {
                logger.error('Unable to fetch userAchievement', err);
                throw new Error('Unable to fetch userAchievement ' + id);
            });
    }

    findByUserName(userName) {
        return this.userAchievements.find({ username: userName }, { sort: { lastUpdated: -1 } })
            .then(result => {
                let userAchievements = {};

                for(let userAchievement of result) {
                    userAchievements[userAchievement.code] = userAchievement;
                }

                return userAchievements;
            }).catch(err => {
                logger.info(err);
            });
    }

    create(userAchievement) {
        let properties = {
            username: userAchievement.username,
            code: userAchievement.code,
            progress: userAchievement.progress,
            lastUpdated: new Date()
        };

        return this.userAchievements.insert(properties);
    }

    update(userAchievement) {
        let properties = {
            username: userAchievement.username,
            code: userAchievement.code,
            progress: userAchievement.progress,
            lastUpdated: new Date()
        };

        return this.userAchievements.update({ _id: userAchievement.id }, { '$set': properties });
    }

}

module.exports = UserAchievementService;


/*eslint no-console:0 */

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const AchievementService = require('../../services/AchievementService.js');

class AchievementImport {
    constructor(db, dataSource) {
        this.db = db;
        this.dataSource = dataSource;
        this.achievementService = new AchievementService(db);
    }

    async import() {
        try {
            await Promise.all([this.importAchievements(), this.importAchiSets()]);
        } catch(e) {
            console.log('Unable to fetch data', e);
        } finally {
            this.db.close();
        }
    }

    async importAchievements() {
        let achievements = await this.dataSource.getAchievements();

        await this.achievementService.replaceAchievements(achievements);

        console.info(achievements.length + ' achievements fetched');

    }


    async importAchiSets() {
        let achiSets = await this.dataSource.getAchiSets();

        await this.achievementService.replaceAchiSets(achiSets);

        console.info(achiSets.length + ' achiSets fetched');
    }
}

module.exports = AchievementImport;

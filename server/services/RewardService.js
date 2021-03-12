const _ = require('underscore');

const logger = require('../log.js');

class RewardService {
    constructor(db) {
        this.rewards = db.get('rewards');
    }
    create(username, rewardType, quantity, expirationSeconds) {
        let currentDate = new Date();
        let expirationDate = new Date(currentDate.getTime() + expirationSeconds*1000);
        let properties = {
            username: username,
            rewardType: rewardType,
            used: 0,
            available: quantity,
            expirationDate: expirationDate, 
            creationDate: currentDate,
            lastUpdated: currentDate
        };

        return this.rewards.insert(properties);
    }


    update(reward) {
        let properties = {
            username: username,
            lastUpdated: new Date()
        };

        return this.rewards.update({ username: username}, { '$set': properties}, {upsert: true});
    }

    updateAvailability(username, rewardType, quantity) {
        let properties = {
            available: quantity,
            lastUpdated: new Date()
        };

        return this.rewards.update({ username: username}, { '$set': properties}, {upsert: true});
    }

    updateUsed(id, quantity) {
        return this.rewards.update({ _id: id}, { '$set': {used: quantity}}, {upsert: true});
    }


    updateExpirationDate(username, rewardType, expirationDate) {
        let properties = {
            expirationDate: expirationDate,
            lastUpdated: new Date()
        };

        return this.rewards.update({ username: username}, { '$set': properties}, {upsert: true});
    }

    findByUsername(username) {
        return this.rewards.find({ username: username }, { sort: { lastUpdated: -1 } });
    }

    findByUsernameAndType(username, rewardType) {
        return this.rewards.find({ username: username, rewardType: rewardType }, { sort: { lastUpdated: -1 } });
    }
     
    countByUsernameAndType(username, rewardType) {
        return this.rewards.count({ username: username, rewardType: rewardType });
    }
}

module.exports = RewardService;


/*eslint no-console:0 */
const monk = require('monk');

const UserAchievementService = require('../services/UserAchievementService.js');

let db = monk('mongodb://127.0.0.1:27017/throneteki');
let userAchievementService = new UserAchievementService(db);
let userAchievement = {username: 'test', code: '00002', progress: 9, lastUpdated: new Date()}
userAchievementService.create(userAchievement);



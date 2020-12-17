const AchievementService = require('../services/AchievementService');
const logger = require('../log.js');

module.exports.init = function(server, options) {
    let achievementService = new AchievementService(options.db);

    server.get('/api/achievements', function(req, res, next) {
        achievementService.getAllAchievementsArray()
            .then(achievements => {
                res.send({ success: true, achievements: achievements });
            })
            .catch(err => {
                return next(err);
            });
    });

};

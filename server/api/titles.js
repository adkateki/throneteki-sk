const passport = require('passport');

const TitlesService = require('../services/TitlesService.js');
const { wrapAsync } = require('../util.js');
const logger = require('../log.js');

module.exports.init = function(server, options) {
    let userAchievementService = new userAchievementService(options.db);
    let achievementService = new achievementService(options.db);

    server.get('/api/usertitles', passport.authenticate('jwt', { session: false }), wrapAsync(async function(req, res) {
        TitlesService.findByUserName(req.user.username)
            .then(userAchievements => {
                res.send({ success: true, titles: userTitles });
            })
            .catch(err => {
                return next(err);
            });
    }));


};

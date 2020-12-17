const passport = require('passport');

const UserAchievementService = require('../services/UserAchievementService.js');
const { wrapAsync } = require('../util.js');
const logger = require('../log.js');

module.exports.init = function(server, options) {
    let userAchievementService = new UserAchievementService(options.db);

    server.get('/api/userachievements/:id', passport.authenticate('jwt', { session: false }), wrapAsync(async function(req, res) {
        if(!req.params.id || req.params.id === '') {
            return res.status(404).send({ message: 'No such userAchievement' });
        }

        let userAchievement = await achievementService.getById(req.params.id);

        if(!userAchievement) {
            return res.status(404).send({ message: 'No such userAchievement' });
        }

        if(userAchievement.username !== req.user.username) {
            return res.status(401).send({ message: 'Unauthorized' });
        }

        res.send({ success: true, userAchievement: deck });
    }));

    server.get('/api/userachievements', passport.authenticate('jwt', { session: false }), wrapAsync(async function(req, res) {
        userAchievementService.findByUserName(req.user.username)
            .then(userAchievements => {
                res.send({ success: true, userAchievements: userAchievements });
            })
            .catch(err => {
                return next(err);
            });
    }));

    server.put('/api/userachievements/:id', passport.authenticate('jwt', { session: false }), wrapAsync(async function(req, res) {
        let userAchievement = await achievementService.getById(req.params.id);

        if(!userAchievement) {
            return res.status(404).send({ message: 'No such userAchievement' });
        }

        if(userAchievement.username !== req.user.username) {
            return res.status(401).send({ message: 'Unauthorized' });
        }

        let data = Object.assign({ id: req.params.id }, req.body.userAchievement);

        userAchievementService.update(data);

        res.send({ success: true, message: 'Saved' });
    }));

    server.post('/api/userachievements', passport.authenticate('jwt', { session: false }), wrapAsync(async function(req, res) {
        let userAchievement = Object.assign(req.body.deck, { username: req.user.username });
        await userAchievementService.create(achievement);
        res.send({ success: true });
    }));

};

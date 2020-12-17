const MessageService = require('./MessageService');
const PatreonService = require('./PatreonService');
const ConfigService = require('./ConfigService');
const UserService = require('./UserService');
const BanlistService = require('./BanlistService');
const EventService = require('./EventService');
const AchievementService = require('./AchievementService');
const UserAchievementService = require('./UserAchievementService');

let services = {};

module.exports = {
    messageService: db => {
        if(!services.messageService) {
            services.messageService = new MessageService(db);
        }

        return services.messageService;
    },
    configService: () => {
        if(!services.configService) {
            services.configService = new ConfigService();
        }

        return services.configService;
    },
    userService: (db, configService) => {
        if(!services.userService) {
            services.userService = new UserService(db, configService);
        }

        return services.userService;
    },
    patreonService: (clientId, secret, userService, callbackUrl) => {
        if(!services.patreonService) {
            services.patreonService = new PatreonService(clientId, secret, userService, callbackUrl);
        }

        return services.patreonService;
    },
    banlistService: (db) => {
        if(!services.banlistService) {
            services.banlistService = new BanlistService(db);
        }

        return services.banlistService;
    },
    eventService: (db) => {
        if(!services.eventService) {
            services.eventService = new EventService(db);
        }

        return services.eventService;
    },
    achievementService: (db) => {
	if(!services.achievementService) {
            services.achievementService = new AchievementService(db);
        }

        return services.achievementService;
    },
    userAchievementService: (db) => {
	if(!services.userAchievementService) {
            services.userAchievementService = new UserAchievementService(db);
        }

        return services.userAchievementService;
    }
};

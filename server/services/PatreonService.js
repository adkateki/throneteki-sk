const patreon = require('patreon');
const patreonAPI = patreon.patreon;
const patreonOAuth = patreon.oauth;
const pledge_schema = require('patreon/dist/schemas/pledge').default;

const logger = require('../log.js');

class PatreonService {
    constructor(clientId, secret, userService, callbackUrl) {
        this.userService = userService;
        this.callbackUrl = callbackUrl;

        this.patreonOAuthClient = patreonOAuth(clientId, secret);
    }

    async getPatreonIdForUser(user) {
        let response;
        let patreonApiClient = patreonAPI(user.patreon.access_token);

        try {
            response = await patreonApiClient('/current_user', {
                });
        } catch(err) {
            logger.error(err);

            return 'none';
        }

        let { id } = response.rawJson.data;
        logger.info("debuglog userid: "+id);
        
        return id;
    }

    async getPatreonStatusForUser(user) {
        let response;
        logger.info("debuglog token: "+user.patreon.access_token);
        let patreonApiClient = patreonAPI(user.patreon.access_token);

        try {
            response = await patreonApiClient('/current_user', {
                fields: {
                    pledge: [...pledge_schema.default_attributes, pledge_schema.attributes.declined_since, pledge_schema.attributes.created_at, pledge_schema.attributes.amount_cents]
                }
            });
        } catch(err) {
            logger.error(err);

            return 'none';
        }

        let { id } = response.rawJson.data;
        let pUser = response.store.find('user', id);

        if(!pUser || !pUser.pledges || pUser.pledges.length === 0) {
            logger.info("debuglog linked no pledged:");
            return {status: 'linked', id:id};
        } 
        let pledge_id = pUser.pledges[0].id;
        logger.info("debuglog pledge id:" +pledge_id);
        let pledge = response.store.find('pledge', pledge_id);
//        for(let pl of pUser.pledges ){
const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
  logger.info("debuglog pledge object: "+key,value);
});
//        }

        logger.info("debuglog pledge:"+ pledge.amount_cents);
        return {status: 'pledged', id: id, pledgeAmount: pledge.amount_cents};
    }

    async refreshTokenForUser(user) {
        let response;
        try {
            response = await this.patreonOAuthClient.refreshToken(user.patreon.refresh_token);
        } catch(err) {
            logger.error('Error refreshing patreon account', err);
            return undefined;
        }
        
        let userDetails = user.getDetails();
        // eslint-disable-next-line require-atomic-updates
        user.patreon = userDetails.patreon = response;

        try {
            await this.userService.update(userDetails);
        } catch(err) {
            logger.error(err);
            return undefined;
        }

        return response;
    }

    async linkAccount(username, code) {
        let response;
        try {
            response = await this.patreonOAuthClient.getTokens(code, this.callbackUrl);
        } catch(err) {
            logger.error('Error linking patreon account', err);
            return false;
        }

        response.date = new Date();
        
        let dbUser = await this.userService.getUserByUsername(username);
        if(!dbUser) {
            logger.error('Error linking patreon account, user not found');
            return false;
        }

        let user = dbUser.getDetails();
        logger.info("debuglog: response"+response);
const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
  logger.info("debuglog: "+key,value);
});
        keyValue(response);
        user.patreon = response;

        try {
            await this.userService.update(user);
        } catch(err) {
            logger.error(err);
            return false;
        }

        return response;
    }

    async unlinkAccount(username) {
        let dbUser = await this.userService.getUserByUsername(username);
        if(!dbUser) {
            logger.error('Error unlinking patreon account, user not found');
            return false;
        }

        let user = dbUser.getDetails();
        user.patreon = undefined;

        try {
            await this.userService.update(user);
        } catch(err) {
            logger.error(err);
            return false;
        }
        
        logger.info("debuglog: unlinked");
        return true;
    }
}

module.exports = PatreonService;

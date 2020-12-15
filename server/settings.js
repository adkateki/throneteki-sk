const defaultWindows = {
    plot: true,
    draw: true,
    challengeBegin: true,
    attackersDeclared: true,
    defendersDeclared: true,
    dominance: true,
    standing: true,
    taxation: true
};

const defaultKeywordSettings = {
    chooseOrder: false,
    chooseCards: false
};

const defaultSettings = {
    windowTimer: 10,
    background: 'BG1',
    cardSize: 'normal',
    promptDupes: false
};

const defaultTimerSettings = {
    events: true,
    abilities: false
};

function getUserWithDefaultsSet(user) {
    let userToReturn = user;

    if(!userToReturn) {
        return userToReturn;
    }

    userToReturn.settings = Object.assign({}, defaultSettings, userToReturn.settings);
    userToReturn.settings.keywordSettings = Object.assign({}, defaultKeywordSettings, userToReturn.settings.keywordSettings);
    userToReturn.settings.timerSettings = Object.assign({}, defaultTimerSettings, userToReturn.settings.timerSettings);
    userToReturn.permissions = Object.assign({}, userToReturn.permissions);
    userToReturn.promptedActionWindows = Object.assign({}, defaultWindows, userToReturn.promptedActionWindows);
    if(!userToReturn.blockList) {
        userToReturn.blockList = [];
    }

    return userToReturn;
}

module.exports = {
    getUserWithDefaultsSet: getUserWithDefaultsSet
};

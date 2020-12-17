/*eslint no-console:0 */
const commandLineArgs = require('command-line-args');
const monk = require('monk');
const path = require('path');

const AchievementsImport = require('./fetchdata/AchievementImport.js');
const JsonAchievementSource = require('./fetchdata/JsonAchievementSource.js');
const NoImageSource = require('./fetchdata/NoImageSource.js');

const optionsDefinition = [
    { name: 'achievement-source', type: String, defaultValue: 'json' },
    { name: 'achievement-dir', type: String, defaultValue: path.join(__dirname, '..', '..', 'achievements-json-data-sk') },
];

function createDataSource(options) {
    switch(options['achievement-source']) {
        case 'json':
            return new JsonAchievementSource(options['achievement-dir']);
    }

    throw new Error(`Unknown achievement source '${options['achievement-source']}'`);
}



let options = commandLineArgs(optionsDefinition);

let db = monk('mongodb://127.0.0.1:27017/throneteki');
let dataSource = createDataSource(options);
let achievementImport = new AchievementsImport(db, dataSource);

achievementImport.import();


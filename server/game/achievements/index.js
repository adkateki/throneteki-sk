const fs = require('fs');
const path = require('path');

function getDirectories(srcpath) {
    let fullPath = path.join(__dirname, srcpath);
    return fs.readdirSync(fullPath).filter(function(file) {
        return fs.statSync(path.join(fullPath, file)).isDirectory();
    });
}

function loadFiles(directory) {
    let fullPath = path.join(__dirname, directory);
    let files = fs.readdirSync(fullPath).filter(file => {
        return !fs.statSync(path.join(fullPath, file)).isDirectory() && file.endsWith('.js');
    });

    for(let file of files) {
        let achievement = require('./' + directory + '/' + file);

        achievements[achievement.code] = achievement;
    }
}

function loadAchievements(directory) {
    let achievements = {};

    loadFiles(directory);

    for(let dir of getDirectories(directory)) {
        achievements = Object.assign(achievements, loadAchievements(path.join(directory, dir)));
    }

    return achievements;
}

let achievements = {};
let directories = getDirectories('.');

for(let directory of directories) {
    achievements = Object.assign(achievements, loadAchievements(directory));
}

module.exports = achievements;
